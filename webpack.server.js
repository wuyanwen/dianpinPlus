const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

require('./mockServer/server.js');
module.exports = {
	entry:{
	    app: path.resolve(__dirname, 'app/index.jsx'),
	    // 将 第三方依赖 单独打包
	    vendor: [
	      'react', 
	      'react-dom', 
	      'react-redux', 
	      'react-router-dom',
	      'redux', 
	      'es6-promise', 
	      'whatwg-fetch',
	      'prismjs',
	      'fastclick'
	    ]
  },
	output:{
		path:__dirname+"./public",
		filename: "script/[name].[hash:8].js",
    	publicPath: "/",
    	chunkFilename: "script/[name].[chunkhash:8].js"
	},
	resolve:{
		extensions:['.js','.jsx']
	},
	module:{
		loaders:[
			{
				test:/\.(js|jsx)$/,
				exclude:/node_modules/,
				loader:'babel-loader',
				query:{
					"presets":['react','es2015']
				}
			},
			{ 
				test: /\.less$/, 
				exclude: /node_modules/, 
	            loader: ExtractTextPlugin.extract({
	               fallback:'style-loader', 
	               use:'css-loader?modules&localIdentName=[local]-[hash:base64:8]!resolve-url-loader!postcss-loader!less-loader'
	             }) 
			},
            { 
            	test: /\.css$/, 
            	exclude: /node_modules/, 
            	loader: ExtractTextPlugin.extract({
                	fallback:'style-loader', 
                	use:'css-loadermodules&localIdentName=[local]-[hash:base64:8]!resolve-url-loader!postcss-loader'
              	}) 
            },
            { 
            	test:/\.(png|gif|jpg|jpeg|bmp)$/, 
            	loader:'url-loader?limit=1&name=images/[name].[hash:8].[ext]' 
            },  // 限制大小5kb
            { 
            	test:/\.(woff|woff2|svg|ttf|eot)($|\?)/, 
            	loader:'file-loader?name=fonts/[name].[hash:8].[ext]'
            } // 限制大小小于5k
		]
	},
	plugins:[
		new htmlWebpackPlugin({
			favicon:'./app/static/images/favicon.jpg',
			template:'./app/index.html'
		}),

		new webpack.LoaderOptionsPlugin({
			options:{
				postcss:()=>{
		          return [
		            require('autoprefixer')({
		              browsers: ['last 10 versions','ie>=8','>1% in CN']
		            })
		          ]
		        }
			}
		}),

		// 分离CSS
    	new ExtractTextPlugin('style/[name].[chunkhash:8].css'), 

		new webpack.HotModuleReplacementPlugin(),

		// 提供公共代码
	    new webpack.optimize.CommonsChunkPlugin({
	      name: 'vendor',
	      filename: 'script/[name].[hash:8].js'
	    })
	],

	devServer:{
		proxy:{
			'/api':{
				target:"http://localhost:3000",
				secure:false
			}
		},

		contentBase:'./public',
		historyApiFallback:true,
		inline:true,
		hot:true
	}
}
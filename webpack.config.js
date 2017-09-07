var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


var deleteFolder = function(path) {
    var files = [];
    if( fs.existsSync(path) ) {
        files = fs.readdirSync(path);
        files.forEach(function(file,index){
            var curPath = path + "/" + file;
            if(fs.statSync(curPath).isDirectory()) { // recurse
                deleteFolder(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};
deleteFolder('../build/script/');
deleteFolder('../build/style/');
deleteFolder('../build/fonts/');
deleteFolder('../build/images/');

module.exports = {
  entry: {
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
  output: {
    path:path.resolve(__dirname, './build'),
    filename: "script/[name].[chunkhash:8].js",
    publicPath: "/",
    jsonpFunction:'dianpinPlus',
    chunkFilename: "script/[name].[chunkhash:8].js"
  },

  resolve:{
      extensions:['.js','.jsx']
  },

  module: {
    loaders: [
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
            },
            { 
              test:/\.(woff|woff2|svg|ttf|eot)($|\?)/, 
              loader:'file-loader?name=fonts/[name].[hash:8].[ext]'
            }  
          ]
  },

  plugins: [
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

    // 定义为生产环境，编译 React 时压缩到最小
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    // html 模板插件
    new HtmlWebpackPlugin({
        template: __dirname + '/app/index.html',
        minify:{
            removeEmptyAttributes: true,
            removeAttributeQuotes: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true
          }
    }),

    // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
    new webpack.optimize.OccurrenceOrderPlugin(),
    
    //js代码压缩
    new webpack.optimize.UglifyJsPlugin({
        compress: {
          //supresses warnings, usually from module minification
          warnings: false
        },
        beautify:false,
        comments:false
    }),
    
    // 分离CSS和JS文件
    new ExtractTextPlugin('style/[name].[chunkhash:8].css'), 

    //css代码压缩
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    }),
    
    // 提供公共代码
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'script/[name].[hash:8].js'
    })
  ]
}
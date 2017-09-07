var config=require("../config/config")
module.exports = {
    hasMore: true,
    data: [
        {
            img: config.imgUrl+'/13.jpg',
            title: '河束人家',
            subTitle: '南锣鼓巷店',
            price: '150',
            distance: '120m',
            number: '389',
            id: Math.random().toString().slice(2)
        },
        {
            img: config.imgUrl+'/14.jpg',
            title: '漫漫火锅',
            subTitle: '[王府井]自助火锅',
            price: '113',
            distance: '140m',
            number: '689',
            id: Math.random().toString().slice(2)
        },
        {
            img: config.imgUrl+'/15.jpg',
            title: '北方涮肉',
            subTitle: '什刹海店',
            price: '92',
            distance: '160',
            number: '106',
            id: Math.random().toString().slice(2)
        },
        {
            img: config.imgUrl+'/16.jpg',
            title: '姓高火锅',
            subTitle: '知春里店',
            price: '90',
            distance: '160',
            number: '58',
            id: Math.random().toString().slice(2)
        },
        {
            img: config.imgUrl+'/17.jpg',
            title: '八重牛府',
            subTitle: '最好吃的牛丸',
            price: '85',
            distance: '160',
            number: '1426',
            id: Math.random().toString().slice(2)
        },
        {
            img: config.imgUrl+'/18.jpg',
            title: '蜀乡涮锅',
            subTitle: '[王府井]自助火锅',
            price: '113',
            distance: '140m',
            number: '689',
            id: Math.random().toString().slice(2)
        },
        {
            img: config.imgUrl+'/19.jpg',
            title: '满楼福火锅',
            subTitle: '知春路店',
            price: '90',
            distance: '160',
            number: '58',
            id: Math.random().toString().slice(2)
        }
    ]
}
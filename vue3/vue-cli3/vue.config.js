module.exports={

    //根目录
    publicPath:'/',
   // 编译输出文件夹
    outputDir:'build/',

    lintOnSave:false,

    //多页面配置
    // pages:{
    //     index:{
    //         entry:'./src/main.js',
    //         template:'./public/index.html'
    //     },
    //     shop:{
    //         entry:'./src/shop.js',
    //         template:'./public/shop.html'
    //     }
    // }

    //可以修改端口
    devServer:{
        port:3000, //我现在的服务器工作在3000上，如果跨域了就去5000上找，5000是我想请求数据的那个服务器
        //当数据读取失败的时候去5000找
        proxy: 'http://localhost:5000'
    }
}

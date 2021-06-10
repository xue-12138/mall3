const path = require('path');//引入path模块
function resolve(dir){
    return path.resolve(__dirname,dir)//path.join(__dirname)设置绝对路径
}
module.exports={
    chainWebpack:(config)=>{
        config.resolve.alias
        .set('@',resolve('./src'))
        .set('components',resolve('./src/components'))
        .set('views',resolve('./src/views'))
        .set('assets',resolve('./src/assets'))
        .set('network',resolve('./src/network'))
        .set('router',resolve('./src/router'))
        .set('common',resolve('./src/common'))
        .set('store',resolve('./src/store'))
    }
}
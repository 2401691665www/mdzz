module.exports = {
    assetsDir: 'static',
    parallel: false,
    publicPath: './',
    devServer: {
        proxy: { //配置跨域
            '/api': {
                // target: process.env.VUE_APP_URL,
                target: 'http://blockchain-test.jbjk1688.top',
                changOrigin: true, //允许跨域
                withCredentials: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
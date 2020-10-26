module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:4000', //主机地址
                ws: true, //网页接口
                changeOrigin: true, //将主机投的来源更改为目标url
                pathRewrite: {
                    // 重写目标的url路径
                    "^/api": '' //
                }
            }
        },
        "port": '3001', //配置端口
        "open": true //配置默认打开
    }
}
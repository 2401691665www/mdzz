const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {

  app.use(
    '/api-uaa',
    createProxyMiddleware({
      target: 'http://192.168.0.14:8000',   // 目标服务器
      changeOrigin: true
    })
  )

  app.use(
    '/api-user',
    createProxyMiddleware({
      target: 'http://192.168.0.14:8000',   // 目标服务器
      changeOrigin: true
    })
  )

  app.use(
    '/api-basedata',
    createProxyMiddleware({
      target: 'http://192.168.0.14:8000',   // 目标服务器
      changeOrigin: true
    })
  )
}


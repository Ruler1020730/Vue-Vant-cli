const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

module.exports = {
  outputDir: 'dist',
  publicPath: '/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(), // 自动转换rem
          pxtorem({
            rootValue: 37.5, // 基础 大小 以设计稿调整大小
            propList: ['*']
          })
        ]
      }
    }
  },
  devServer: {
    port: 8088, // 本地运行端口
    open: true, // 是否自动打开浏览器
    hot: true, // 热更新
    overlay: { // 报错提示
      warnings: false, // 警告
      errors: true // 错误
    },
    proxy: { // 本地接口配置 监听配置
      '/api': { // 替代
        target: 'http://test.saas.huaji.com/', // 地址
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}

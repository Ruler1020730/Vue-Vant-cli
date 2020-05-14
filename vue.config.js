const path = require('path')
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const myTheme = path.resolve(__dirname, 'src/style/vant.less')
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
      },
      less: {
        modifyVars: {
          // 直接覆盖变量
          // 'text-color': '#111',
          // 'border-color': '#eee',
          // 'tree-select-item-active-color': 'blue'
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          hack: `true; @import "${myTheme}";`
        }
      }
    }
  },
  devServer: {
    port: 8088, // 本地运行端口
    open: false, // 是否自动打开浏览器
    hot: true, // 热更新
    overlay: { // 报错提示
      warnings: false, // 警告
      errors: true // 错误
    },
    proxy: { // 本地接口配置 监听配置
      '/api': { // 替代
        target: 'http://gyys-api.gaoxiaodayin.com', // 地址
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}

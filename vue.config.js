const path = require('path')

function resolve(url) {
  return path.resolve(path.join(__dirname, url))
}
const config = {
  pages: {
    index: {
      // page 的入口
      entry: 'client/main.js',
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('client'))
    
    // 扩展 webpack 配置
    config.module
    .rule('js')
    .include.add(/engine-template/).end()
    .include.add(/client/).end()
    .use('babel')
    .loader('babel-loader')
    .tap(options => {
      return options
    })
  }
}

module.exports = config
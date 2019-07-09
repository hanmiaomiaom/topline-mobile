/**
 * 当前文件是node.js执行的，所以要写node.js代码
 * post-css 是一个后处理器
 * 预处理器less、sass处理之后的css再进一步处理
 * 该文件是post-css 的配置文件
 * 他又很多插件：
 *    autoprefixer   用来处理样式兼容前缀用的，不用再写兼容前缀
 *    postcss-pxtorem  用来将 px 转 rem 用的
 */
const { sep } = require('path')
module.exports = ({ file }) => {
  // path.sep 用于获取操作系统的路径分隔符
  let rootValue = file.dirname.indexOf(`node_modules${sep}vant`) !== -1
    ? 37.5 // vant 转换的基准值
    : 75 // 我们的设计稿转换的基准值
  return {
    plugins: {
      autoprefixer: {},
      'postcss-pxtorem': {
        /**
         * rem 转换的基准值
         * 这个转换工具：就是把你写的像素 / 37.5 去转换了
         * 关键是大多数移动网页设计稿都是以iPhone 6 为原型进行设计，并且使用物理像素 750 进行设计
         */
        rootValue,
        propList: ['*']
      }

    }
  }
}

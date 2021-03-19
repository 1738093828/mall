module.exports = {
  configureWebpack:{
    resolve:{
      //此处也可以配置省略扩展名，默认已经配置所以不必配置
      //别名
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views'
      }
    }
  }
}

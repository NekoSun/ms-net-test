const path = require('path')

module.exports = {
  publicPath: './',
  lintOnSave: false,
  chainWebpack: config => {
    config.plugin('copy')
      .tap(args => {
        args[0].push({
          from: path.resolve(__dirname, 'src/assets/statics'),
          to: path.resolve(__dirname, 'dist/statics'),
          toType: 'dir',
          ignore: ['.DS_Store']
        })
        return args
      })
  }
};

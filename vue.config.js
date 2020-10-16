const path = require('path');

module.exports = {
  filenameHashing: false,
  configureWebpack: {
    module: {
      rules: [{
        test: /\.svg$/,
        use: [{
            loader: 'html-loader',
          }
        ]
      }]
    },
    resolve: {
      extensions: ['.js', '.scss', '.vue'],
      alias: {
        src: path.resolve('./src'),
        assets: path.resolve('./src/assets'),
        scss: path.resolve('./src/assets/scss'),
        components: path.resolve('./src/components')
      }
    }
  },
  // Решаем проблему обработки svg в Vue cli
  chainWebpack: config => {
    config.module
      .rule('svg')
      .test(() => false)
  }
};
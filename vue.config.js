const path = require('path'),
  // UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
  isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  publicPath: './', //  解决打包之后静态文件路径404的问题
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))

    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, {
        limit: 10240
      }));

    if (isProduction) {
      config.output
        .filename('[name].[chunkhash].js')
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/css/variable.less'),
      ]
    }
  },
  configureWebpack: config => {

    if (isProduction) {
      // 生产环境js代码压缩，console、debugger调试语句删除
      // config.plugins.push(
      //   new UglifyJsPlugin({
      //     extractComments: false,
      //     uglifyOptions: {
      //       compress: {
      //         drop_debugger: true,
      //         drop_console: true,
      //       }
      //     },
      //     sourceMap: false,
      //     parallel: true,
      //   })
      // )
    }

  },
  devServer: {
    proxy: {
      '/app/mock': {
        target: 'http://rap2api.taobao.org/',
        changeOrigin: true,
        secure: false,
      },
      '/ip37': {
        target: 'http://172.16.3.7:10030/',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/ip37': '/'
        }
      },
      '/new-bucket-fd47fd81': {
        target: 'http://172.16.1.75:7480/new-bucket-fd47fd81',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/new-bucket-fd47fd81': '/'
        }
      },
    },
  }
}
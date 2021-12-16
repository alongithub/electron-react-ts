process.env.NODE_ENV = "development";
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server')
const rendererConfig = require('./webpack.renderer.config');
const mainConfig = require('./webpack.main.config');

/* render */
function startRender() {
  return new Promise((resolve, reject) => {
    rendererConfig.mode = "development";
    const renderCompiler = webpack(rendererConfig);
    const server = new WebpackDevServer(
      {
        compress: true,
        port: 9090,
        hot: true,
        historyApiFallback: {
          disableDotRule: true,
        },
        client: {
          overlay: {
            warnings: false,
            errors: true,
          },
        },
      },
      renderCompiler,

    )
    server.start()
    resolve();
  })
}

// main
function startMain() {
  return new Promise((resolve, reject) => {
    mainConfig.mode = 'development'
    const mainCompiler = webpack(mainConfig);

    console.log('process.env.NODE_ENV', process.env.NODE_ENV)

    mainCompiler.watch({}, (err, stats) => {
      if (err) {
        console.log(err)
        return
      }
      resolve()
    })
  })
}

function init() {
  startRender()
  startMain()
}

init();
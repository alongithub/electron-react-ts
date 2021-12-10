const electron = require('electron');
const path = require('path');
const webpack = require('webpack');
const { spawn } = require('child_process')
const WebpackDevServer = require('webpack-dev-server')
const webpackHotMiddleware = require('webpack-hot-middleware')

const mainConfig = require('./webpack.main.config');
const rendererConfig = require('./webpack.renderer.config');

let electronProcess = null;
let manualRestart = false

process.env.NODE_ENV = "development";

function startElectron() {
  var args = [
    '--inspect=5858',
    path.join(__dirname, '../dist/electron/main.js')
  ]

  // detect yarn or npm and process commandline args accordingly
  if (process.env.npm_execpath.endsWith('yarn.js')) {
    args = args.concat(process.argv.slice(3))
  } else if (process.env.npm_execpath.endsWith('npm-cli.js')) {
    args = args.concat(process.argv.slice(2))
  }

  electronProcess = spawn(electron, args)
  console.log('启动electron')
  electronProcess.stdout.on('data', data => {
    // electronLog(data, 'blue')
    console.log(data.toString())
  })
  electronProcess.stderr.on('data', data => {
    // electronLog(data, 'red')
    console.log(data.toString());
  })

  electronProcess.on('close', () => {
    if (!manualRestart) process.exit()
  })
}


/* render */
function startRender() {
  return new Promise((resolve, reject) => {
    rendererConfig.mode = "development";
    const renderCompiler = webpack(rendererConfig);

    // const renderCompiler = webpack(rendererConfig, (err, stats) => {
    //   if (err) {
    //     console.log(errorLog + err.stack || err)
    //   }
    //   else if (stats.hasErrors()) {
    //     console.log(errorLog, stats.toString({
    //       chunks: false,
    //       colors: true
    //     }))
    //     // .split(/\r?\n/)
    //     // .forEach(line => {
    //     //   err += `    ${line}\n`
    //     // })
    //     // console.log(err)
    //     process.exit(1);
    //   } else {
    //     // console.log(doneLog)
    //     console.log(stats.toString({
    //       chunks: false,
    //       colors: true
    //     }))
    //     // console.log(okayLog)
    //   }
    // })

    // hotMiddleware = webpackHotMiddleware(renderCompiler, {
    //   log: false,
    //   heartbeat: 2500,
    // })

    const server = new WebpackDevServer(
      {
        compress: true,
        port: 9090,
        // progress: true,
        // contentBase: './build',
        hot: true,
        historyApiFallback: {
          disableDotRule: true,
        },
        // onBeforeSetupMiddleware(devServer) {
        //   devServer.app.use(hotMiddleware)
        // },
        // contentBase: path.join(__dirname, '../'),
        // quiet: true,
        // before(app, ctx) {
        //   app.use(hotMiddleware)
        //   ctx.middleware.waitUntilValid(() => {
        //     resolve()
        //   })
        // }
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


/* main */
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

      // logStats('Main', stats)

      if (electronProcess && electronProcess.kill) {
        manualRestart = true
        process.kill(electronProcess.pid)
        electronProcess = null
        startElectron()

        setTimeout(() => {
          manualRestart = false
        }, 5000)
      }

      resolve()
    })
  })
}

function init() {
  Promise.all([startMain(), startRender()]).then(res => {
    startElectron()
  })
}

init();

// startElectron();

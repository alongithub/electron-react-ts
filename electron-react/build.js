
/** 文字样式 **/


process.env.NODE_ENV = 'production'
const chalk = require('chalk')
const errorLog = chalk.bgRed.white(' ERROR ') + ' '; // 文字背景色
const okayLog = chalk.bgBlue.white(' OKAY ') + ' '
const doneLog = chalk.bgGreen.white(' DONE ') + ' '

// return;

const webpack = require('webpack');
const rendererConfig = require('./webpack.renderer.config');
const mianConfig = require('./webpack.main.config');
const compiler = webpack(rendererConfig, (err, stats) => {
  if (err) {
    console.log(errorLog + err.stack || err)
  }
  else if (stats.hasErrors()) {
    console.log(errorLog, stats.toString({
      chunks: false,
      colors: true
    }))
    // .split(/\r?\n/)
    // .forEach(line => {
    //   err += `    ${line}\n`
    // })
    // console.log(err)
    process.exit(1);
  } else {
    console.log(doneLog)
    console.log(stats.toString({
      chunks: false,
      colors: true
    }))
    console.log(okayLog)
  }
})

const compiler2 = webpack(mianConfig, (err, stats) => {
  if (err) {
    console.log(errorLog + err.stack || err)
  }
  else if (stats.hasErrors()) {
    console.log(errorLog, stats.toString({
      chunks: false,
      colors: true
    }))
    // .split(/\r?\n/)
    // .forEach(line => {
    //   err += `    ${line}\n`
    // })
    // console.log(err)
    process.exit(1);
  } else {
    console.log(doneLog)
    console.log(stats.toString({
      chunks: false,
      colors: true
    }))
    console.log(okayLog)
  }
})

// compiler.run()


return

/** 使用cross-env **/

// yarn add cross-env -D
// npx cross-env BUILD_ENV=stage TT=tt node ./webpack.js
console.log(process.env.BUILD_ENV) // stage
console.log(process.env.TT) // tt


return;

/** 进度展示 **/
const Multispinner = require('multispinner')
const tasks = ['main', 'renderer']

const m = new Multispinner(tasks, {
  preText: 'building',
  postText: 'process',
  autoStart: false,
})

m.on('success', () => {
  console.log('success')
})

console.log('等待开始打包')
setTimeout(() => {
  m.start();
}, 1000)

setTimeout(() => {
  m.success('main');
  // m.error('renderer')
  m.success('renderer')
}, 2000)

return;

/** 删除文件 **/
const del = require('del');
del.sync(['build/*', '!build/no'])

return;

/** 3d 字体 **/
// const chalk = require('chalk');
const { say } = require('cfonts')
// console.log(chalk.yellow.bold('along'))

say('lets-build', {
  colors: ['yellow', 'red'],
  font: 'simple3d',
  gradient: ['cyan', 'red'], // 渐变
  space: true, // 上下的间距
})

return;


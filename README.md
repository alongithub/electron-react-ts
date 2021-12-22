### todo

- eslint
- typescript
- redux 优化
- 开发和生产环境依赖整理

### issue

- 页面不展示 undefined 错误
  - res: 增加了eslint后，会向页面抛出错误
- 路径别名 文件夹无提示问题
- history 模式打包后 服务正常访问路由
  - res: 改为使用 hash 模式，配置webpack
    ```
    output: {

      filename: '[name].js',
      path: path.resolve('./dist/electron'),
      publicPath: _isDevelopment ? "/" : "./",
    },
    ```

#### mac 图标icns文件制作
创建 .iconset后缀的文件夹，并将 icon_256x256.png 放入其中
执行
```
iconutil -c icns icons.iconset -o icon.icns
```

#### 主进程调试
1. vscode 调试
创建 .vscode/launch.json 文件
```
{
  "version": "0.2.0",
  "configurations": [
    {
      "command": "yarn debug",
      "name": "Run Debug",
      "request": "launch",
      "type": "node-terminal"
    },
    {
      "name": "Debug Main Process",
      "type": "node",
      "request": "launch",
      "cwd": "${workspaceFolder}",
      "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron",
      "windows": {
        "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron.cmd"
      },
      "args": [
        "."
      ]
    }
  ]
}
```

vscode 运行和调试中 先执行 Run Debug 后执行 Debug Main Process

> 每次修改代码，需要重新开启 Debug Main Process

2. chrome 调试（待验证）
使用如下的命令行开关来调试 Electron 的主进程：
--inspect=[port]

通过访问 chrome://inspect 来连接 Chrome 并在那里选择需要检查的Electron 应用程序

#### 测试 gitlab 代码同步

测试推送 tuisong

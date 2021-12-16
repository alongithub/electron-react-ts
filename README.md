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

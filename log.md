# 3.27

- 决定还是来写一些log来记录一些~~重大~~变动
- 舍弃了 [bisheng](https://github.com/benjycui/bisheng) 。虽然bisheng看起来很香，但是包括文档太差在内一系列因素使得使用难度较大。
- 选择 storybook 作为文档工具。

# 3.29

- style-jsx 对于主题的定制的局限性巨大。
- storybook 的 addons 的使用选择 hmmm...
- 修改 start 指令为 'start-storybook -p 2333'。将 webpack 的打包指令直接还是直接丢在build指令里好了。

# 4.2

- 既然'易于对组件样式自定义'和'主题定义'是刚需，考虑之下还是选择 styled-jsx 和 less 一起使用。
- storybook 并不支持less的解析。于 .storybook 目录中添加 webpack.config.js 进行覆盖（或者说补充？  [参考博文](https://zhuanlan.zhihu.com/p/59766117)第一章节第三小节。
- 针对上面的参考博文的内容，storybook5 对于 webpack 的配置有所变化，详见[webpack-config-simplification](https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#webpack-config-simplification)  
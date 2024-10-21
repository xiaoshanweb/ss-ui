import resolve from '@rollup/plugin-node-resolve'; //帮助 rollup 查找并打包 node_modules 中的第三方模块
import commonjs from '@rollup/plugin-commonjs'; //将 commonjs 模块转换为 ES6 模块，使其可以呗 rollup 处理
import babel from '@rollup/plugin-babel'; //使用 Babel 编译 ES6 代码为向后兼容的 Javascript
import terser from '@rollup/plugin-terser'; //压缩输出的 js文件

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife', //输出格式，iife（立即执行的函数表达式），适用于在浏览器中作为独立脚本运行
    name: 'MyBundle', //当输出格式为 iife或 umd 时，这个名字兼备用做全局变量的名称
  },
  plugin: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
};

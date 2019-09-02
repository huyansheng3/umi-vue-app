// ref: https://umijs.org/config/

const { resolve, join } = require('path')

export default {
  plugins: [
    // ref: https://github.com/jetsly/umi-plugin/tree/master/packages/create-umi-vue
    ['@didi/umi-plugin-vue'],
  ],
  chainWebpack(config, { webpack }) {
  }
};

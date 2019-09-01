// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://github.com/jetsly/umi-plugin/tree/master/packages/create-umi-vue
    ['umi-plugin-vue'],
  ],
  chainWebpack(config, { webpack }) {
    // 设置 alias
    config.resolve.alias.set('vue', 'vue');
  }
};

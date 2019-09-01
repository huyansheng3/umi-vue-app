const config = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  node: {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: '/Users/hys/Documents/2019/umi-vue-app/dist',
    filename: '[name].js',
    chunkFilename: '[name].async.js',
    publicPath: '/',
    devtoolModuleFilenameTemplate: info => {
      return (0, _path.relative)(opts.cwd, info.absoluteResourcePath).replace(/\\/g, '/');
    },
    pathinfo: true
  },
  resolve: {
    symlinks: true,
    alias: {
      '@ddot/umi-vue/dynamic': '@ddot/umi-vue/lib/dynamic.js',
      react: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_react@16.9.0@react',
      'react-dom': '/Users/hys/Documents/2019/umi-vue-app/node_modules/_react-dom@16.9.0@react-dom',
      'react-router': '/Users/hys/Documents/2019/umi-vue-app/node_modules/_react-router@4.3.1@react-router',
      'react-router-dom': '/Users/hys/Documents/2019/umi-vue-app/node_modules/_react-router-dom@4.3.1@react-router-dom',
      'react-router-config': '/Users/hys/Documents/2019/umi-vue-app/node_modules/_react-router-config@1.0.0-beta.4@react-router-config',
      history: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_umi-history@0.1.2@umi-history',
      '@': '/Users/hys/Documents/2019/umi-vue-app/src/',
      '@tmp': '/Users/hys/Documents/2019/umi-vue-app/src/pages/.umi',
      umi: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_umi@2.8.20@umi',
      'regenerator-runtime': '/Users/hys/Documents/2019/umi-vue-app/node_modules/_regenerator-runtime@0.13.2@regenerator-runtime'
    },
    extensions: [
      '.web.js',
      '.wasm',
      '.mjs',
      '.js',
      '.web.jsx',
      '.jsx',
      '.web.ts',
      '.ts',
      '.web.tsx',
      '.tsx',
      '.json',
      '.vue'
    ],
    modules: [
      'node_modules',
      '/Users/hys/Documents/2019/umi-vue-app/node_modules/_af-webpack@1.9.10@af-webpack/node_modules',
      '/Users/hys/Documents/2019/umi-vue-app/node_modules/'
    ]
  },
  resolveLoader: {
    modules: [
      'node_modules',
      '/Users/hys/Documents/2019/umi-vue-app/node_modules/_af-webpack@1.9.10@af-webpack/node_modules'
    ]
  },
  module: {
    rules: [
      /* config.module.rule('exclude') */
      {
        exclude: [
          /\.json$/,
          /\.(js|jsx|ts|tsx|mjs|wasm)$/,
          /\.(graphql|gql)$/,
          /\.(css|less|scss|sass)$/,
          /\.vue$/
        ],
        use: [
          /* config.module.rule('exclude').use('url-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_umi-url-pnp-loader@1.1.2@umi-url-pnp-loader/dist/cjs.js',
            options: {
              limit: 10000,
              name: 'static/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      /* config.module.rule('mjs-require') */
      {
        test: /\.mjs$/,
        type: 'javascript/auto',
        include: [
          '/Users/hys/Documents/2019/umi-vue-app'
        ]
      },
      /* config.module.rule('mjs') */
      {
        test: /\.mjs$/,
        include: [
          '/Users/hys/Documents/2019/umi-vue-app'
        ],
        use: [
          /* config.module.rule('mjs').use('babel-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js',
            options: {
              presets: [
                [
                  '/Users/hys/Documents/2019/umi-vue-app/node_modules/_babel-preset-umi@1.6.1@babel-preset-umi/lib/index.js',
                  {
                    targets: {
                      chrome: 49,
                      firefox: 64,
                      safari: 10,
                      edge: 13,
                      ios: 10
                    },
                    env: {
                      useBuiltIns: 'entry',
                      corejs: 2
                    }
                  }
                ]
              ],
              plugins: [
                '/Users/hys/Documents/2019/umi-vue-app/node_modules/_umi-build-dev@1.10.20@umi-build-dev/lib/plugins/afwebpack-config/lockCoreJSVersionPlugin.js',
                [
                  '/Users/hys/Documents/2019/umi-vue-app/node_modules/_babel-plugin-named-asset-import@0.3.2@babel-plugin-named-asset-import/index.js',
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_af-webpack@1.9.10@af-webpack/lib/svgr.js?-prettier,-svgo![path]'
                      }
                    }
                  }
                ]
              ],
              sourceType: 'unambiguous',
              cacheDirectory: true,
              babelrc: false,
              customize: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_babel-preset-umi@1.6.1@babel-preset-umi/lib/webpack-overrides.js'
            }
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.js$/,
        include: [
          '/Users/hys/Documents/2019/umi-vue-app'
        ],
        exclude: [
          /node_modules/
        ],
        use: [
          /* config.module.rule('js').use('babel-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js',
            options: {
              presets: [
                [
                  '/Users/hys/Documents/2019/umi-vue-app/node_modules/_babel-preset-umi@1.6.1@babel-preset-umi/lib/index.js',
                  {
                    targets: {
                      chrome: 49,
                      firefox: 64,
                      safari: 10,
                      edge: 13,
                      ios: 10
                    },
                    env: {
                      useBuiltIns: 'entry',
                      corejs: 2
                    }
                  }
                ]
              ],
              plugins: [
                '/Users/hys/Documents/2019/umi-vue-app/node_modules/_umi-build-dev@1.10.20@umi-build-dev/lib/plugins/afwebpack-config/lockCoreJSVersionPlugin.js',
                [
                  '/Users/hys/Documents/2019/umi-vue-app/node_modules/_babel-plugin-named-asset-import@0.3.2@babel-plugin-named-asset-import/index.js',
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_af-webpack@1.9.10@af-webpack/lib/svgr.js?-prettier,-svgo![path]'
                      }
                    }
                  }
                ]
              ],
              sourceType: 'unambiguous',
              cacheDirectory: true,
              babelrc: false,
              customize: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_babel-preset-umi@1.6.1@babel-preset-umi/lib/webpack-overrides.js'
            }
          }
        ]
      },
      /* config.module.rule('jsx') */
      {
        test: /\.jsx$/,
        include: [
          '/Users/hys/Documents/2019/umi-vue-app'
        ],
        use: [
          /* config.module.rule('jsx').use('babel-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js',
            options: {
              presets: [
                [
                  '/Users/hys/Documents/2019/umi-vue-app/node_modules/_babel-preset-umi@1.6.1@babel-preset-umi/lib/index.js',
                  {
                    targets: {
                      chrome: 49,
                      firefox: 64,
                      safari: 10,
                      edge: 13,
                      ios: 10
                    },
                    env: {
                      useBuiltIns: 'entry',
                      corejs: 2
                    }
                  }
                ]
              ],
              plugins: [
                '/Users/hys/Documents/2019/umi-vue-app/node_modules/_umi-build-dev@1.10.20@umi-build-dev/lib/plugins/afwebpack-config/lockCoreJSVersionPlugin.js',
                [
                  '/Users/hys/Documents/2019/umi-vue-app/node_modules/_babel-plugin-named-asset-import@0.3.2@babel-plugin-named-asset-import/index.js',
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_af-webpack@1.9.10@af-webpack/lib/svgr.js?-prettier,-svgo![path]'
                      }
                    }
                  }
                ]
              ],
              sourceType: 'unambiguous',
              cacheDirectory: true,
              babelrc: false,
              customize: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_babel-preset-umi@1.6.1@babel-preset-umi/lib/webpack-overrides.js'
            }
          }
        ]
      },
      /* config.module.rule('extraBabelInclude_0') */
      {
        test: /\.jsx?$/,
        include: [
          function () { /* omitted long function */ }
        ],
        use: [
          /* config.module.rule('extraBabelInclude_0').use('babel-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js',
            options: {
              presets: [
                [
                  '/Users/hys/Documents/2019/umi-vue-app/node_modules/_babel-preset-umi@1.6.1@babel-preset-umi/lib/index.js',
                  {
                    targets: {
                      chrome: 49,
                      firefox: 64,
                      safari: 10,
                      edge: 13,
                      ios: 10
                    },
                    env: {
                      useBuiltIns: 'entry',
                      corejs: 2
                    }
                  }
                ]
              ],
              plugins: [
                '/Users/hys/Documents/2019/umi-vue-app/node_modules/_umi-build-dev@1.10.20@umi-build-dev/lib/plugins/afwebpack-config/lockCoreJSVersionPlugin.js',
                [
                  '/Users/hys/Documents/2019/umi-vue-app/node_modules/_babel-plugin-named-asset-import@0.3.2@babel-plugin-named-asset-import/index.js',
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_af-webpack@1.9.10@af-webpack/lib/svgr.js?-prettier,-svgo![path]'
                      }
                    }
                  }
                ]
              ],
              sourceType: 'unambiguous',
              cacheDirectory: true,
              babelrc: false,
              customize: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_babel-preset-umi@1.6.1@babel-preset-umi/lib/webpack-overrides.js'
            }
          }
        ]
      },
      /* config.module.rule('ts') */
      {
        test: /\.tsx?$/,
        use: [
          /* config.module.rule('ts').use('babel-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js',
            options: {
              presets: [
                [
                  '/Users/hys/Documents/2019/umi-vue-app/node_modules/_babel-preset-umi@1.6.1@babel-preset-umi/lib/index.js',
                  {
                    targets: {
                      chrome: 49,
                      firefox: 64,
                      safari: 10,
                      edge: 13,
                      ios: 10
                    },
                    env: {
                      useBuiltIns: 'entry',
                      corejs: 2
                    }
                  }
                ]
              ],
              plugins: [
                '/Users/hys/Documents/2019/umi-vue-app/node_modules/_umi-build-dev@1.10.20@umi-build-dev/lib/plugins/afwebpack-config/lockCoreJSVersionPlugin.js',
                [
                  '/Users/hys/Documents/2019/umi-vue-app/node_modules/_babel-plugin-named-asset-import@0.3.2@babel-plugin-named-asset-import/index.js',
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_af-webpack@1.9.10@af-webpack/lib/svgr.js?-prettier,-svgo![path]'
                      }
                    }
                  }
                ]
              ],
              sourceType: 'unambiguous',
              cacheDirectory: true,
              babelrc: false,
              customize: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_babel-preset-umi@1.6.1@babel-preset-umi/lib/webpack-overrides.js'
            }
          },
          /* config.module.rule('ts').use('ts-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_ts-loader@6.0.3@ts-loader/index.js',
            options: {
              configFile: '/Users/hys/Documents/2019/umi-vue-app/tsconfig.json',
              transpileOnly: true,
              errorFormatter(error, colors) {
                const messageColor = error.severity === 'warning' ? colors.bold.yellow : colors.bold.red;
                return colors.grey('[tsl] ') + messageColor(error.severity.toUpperCase()) + (error.file === '' ? '' : messageColor(' in ') + colors.bold.cyan(`${(0, _path.relative)(cwd, (0, _path.join)(error.context, error.file))}(${error.line},${error.character})`)) + _os.EOL + messageColor(`      TS${error.code}: ${error.content}`);
              }
            }
          }
        ]
      },
      /* config.module.rule('graphql') */
      {
        test: /\.(graphql|gql)$/,
        exclude: [
          /node_modules/
        ],
        use: [
          /* config.module.rule('graphql').use('graphql-tag-loader') */
          {
            loader: 'graphql-tag/loader'
          }
        ]
      },
      /* config.module.rule('cssModulesExcludes_0') */
      {
        test: filePath => {
          if (exclude instanceof RegExp) {
            return exclude.test(filePath);
          } else {
            return filePath.indexOf(exclude) > -1;
          }
        },
        use: [
          /* config.module.rule('cssModulesExcludes_0').use('extract-css-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_mini-css-extract-plugin@0.7.0@mini-css-extract-plugin/dist/loader.js',
            options: {
              publicPath: '/',
              hmr: true
            }
          },
          /* config.module.rule('cssModulesExcludes_0').use('css-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_css-loader-1@2.0.0@css-loader-1/index.js',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          /* config.module.rule('cssModulesExcludes_0').use('postcss-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
            options: {
              ident: 'postcss',
              plugins: () => [require('postcss-flexbugs-fixes'), // eslint-disable-line
              (0, _autoprefixer.default)(_objectSpread({
                overrideBrowserslist: opts.browserslist || DEFAULT_BROWSERS,
                flexbox: 'no-2009'
              }, opts.autoprefixer || {})), ...(opts.extraPostCSSPlugins ? opts.extraPostCSSPlugins : []), ...(isDev || process.env.CSS_COMPRESS === 'none' || process.env.COMPRESS === 'none' || process.env.NO_COMPRESS ? [] : [require('cssnano')({
                preset: ['default', opts.cssnano || {
                  mergeRules: false,
                  // ref: https://github.com/umijs/umi/issues/955
                  normalizeUrl: false
                }]
              })])]
            }
          }
        ]
      },
      /* config.module.rule('cssModulesExcludes_1') */
      {
        test: filePath => {
          if (exclude instanceof RegExp) {
            return exclude.test(filePath);
          } else {
            return filePath.indexOf(exclude) > -1;
          }
        },
        use: [
          /* config.module.rule('cssModulesExcludes_1').use('extract-css-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_mini-css-extract-plugin@0.7.0@mini-css-extract-plugin/dist/loader.js',
            options: {
              publicPath: '/',
              hmr: true
            }
          },
          /* config.module.rule('cssModulesExcludes_1').use('css-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_css-loader-1@2.0.0@css-loader-1/index.js',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          /* config.module.rule('cssModulesExcludes_1').use('postcss-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
            options: {
              ident: 'postcss',
              plugins: () => [require('postcss-flexbugs-fixes'), // eslint-disable-line
              (0, _autoprefixer.default)(_objectSpread({
                overrideBrowserslist: opts.browserslist || DEFAULT_BROWSERS,
                flexbox: 'no-2009'
              }, opts.autoprefixer || {})), ...(opts.extraPostCSSPlugins ? opts.extraPostCSSPlugins : []), ...(isDev || process.env.CSS_COMPRESS === 'none' || process.env.COMPRESS === 'none' || process.env.NO_COMPRESS ? [] : [require('cssnano')({
                preset: ['default', opts.cssnano || {
                  mergeRules: false,
                  // ref: https://github.com/umijs/umi/issues/955
                  normalizeUrl: false
                }]
              })])]
            }
          }
        ]
      },
      /* config.module.rule('cssModulesExcludes_2') */
      {
        test: filePath => {
          if (exclude instanceof RegExp) {
            return exclude.test(filePath);
          } else {
            return filePath.indexOf(exclude) > -1;
          }
        },
        use: [
          /* config.module.rule('cssModulesExcludes_2').use('extract-css-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_mini-css-extract-plugin@0.7.0@mini-css-extract-plugin/dist/loader.js',
            options: {
              publicPath: '/',
              hmr: true
            }
          },
          /* config.module.rule('cssModulesExcludes_2').use('css-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_css-loader-1@2.0.0@css-loader-1/index.js',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          /* config.module.rule('cssModulesExcludes_2').use('postcss-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
            options: {
              ident: 'postcss',
              plugins: () => [require('postcss-flexbugs-fixes'), // eslint-disable-line
              (0, _autoprefixer.default)(_objectSpread({
                overrideBrowserslist: opts.browserslist || DEFAULT_BROWSERS,
                flexbox: 'no-2009'
              }, opts.autoprefixer || {})), ...(opts.extraPostCSSPlugins ? opts.extraPostCSSPlugins : []), ...(isDev || process.env.CSS_COMPRESS === 'none' || process.env.COMPRESS === 'none' || process.env.NO_COMPRESS ? [] : [require('cssnano')({
                preset: ['default', opts.cssnano || {
                  mergeRules: false,
                  // ref: https://github.com/umijs/umi/issues/955
                  normalizeUrl: false
                }]
              })])]
            }
          },
          /* config.module.rule('cssModulesExcludes_2').use('less-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js',
            options: {
              modifyVars: {},
              javascriptEnabled: true
            }
          }
        ]
      },
      /* config.module.rule('cssModulesExcludes_3') */
      {
        test: filePath => {
          if (exclude instanceof RegExp) {
            return exclude.test(filePath);
          } else {
            return filePath.indexOf(exclude) > -1;
          }
        },
        use: [
          /* config.module.rule('cssModulesExcludes_3').use('extract-css-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_mini-css-extract-plugin@0.7.0@mini-css-extract-plugin/dist/loader.js',
            options: {
              publicPath: '/',
              hmr: true
            }
          },
          /* config.module.rule('cssModulesExcludes_3').use('css-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_css-loader-1@2.0.0@css-loader-1/index.js',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          /* config.module.rule('cssModulesExcludes_3').use('postcss-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
            options: {
              ident: 'postcss',
              plugins: () => [require('postcss-flexbugs-fixes'), // eslint-disable-line
              (0, _autoprefixer.default)(_objectSpread({
                overrideBrowserslist: opts.browserslist || DEFAULT_BROWSERS,
                flexbox: 'no-2009'
              }, opts.autoprefixer || {})), ...(opts.extraPostCSSPlugins ? opts.extraPostCSSPlugins : []), ...(isDev || process.env.CSS_COMPRESS === 'none' || process.env.COMPRESS === 'none' || process.env.NO_COMPRESS ? [] : [require('cssnano')({
                preset: ['default', opts.cssnano || {
                  mergeRules: false,
                  // ref: https://github.com/umijs/umi/issues/955
                  normalizeUrl: false
                }]
              })])]
            }
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          /* config.module.rule('css').use('extract-css-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_mini-css-extract-plugin@0.7.0@mini-css-extract-plugin/dist/loader.js',
            options: {
              publicPath: '/',
              hmr: true
            }
          },
          /* config.module.rule('css').use('css-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_css-loader-1@2.0.0@css-loader-1/index.js',
            options: {
              importLoaders: 1,
              sourceMap: true,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          /* config.module.rule('css').use('postcss-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
            options: {
              ident: 'postcss',
              plugins: () => [require('postcss-flexbugs-fixes'), // eslint-disable-line
              (0, _autoprefixer.default)(_objectSpread({
                overrideBrowserslist: opts.browserslist || DEFAULT_BROWSERS,
                flexbox: 'no-2009'
              }, opts.autoprefixer || {})), ...(opts.extraPostCSSPlugins ? opts.extraPostCSSPlugins : []), ...(isDev || process.env.CSS_COMPRESS === 'none' || process.env.COMPRESS === 'none' || process.env.NO_COMPRESS ? [] : [require('cssnano')({
                preset: ['default', opts.cssnano || {
                  mergeRules: false,
                  // ref: https://github.com/umijs/umi/issues/955
                  normalizeUrl: false
                }]
              })])]
            }
          }
        ]
      },
      /* config.module.rule('css-in-node_modules') */
      {
        test: /\.css$/,
        include: [
          /node_modules/
        ],
        use: [
          /* config.module.rule('css-in-node_modules').use('extract-css-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_mini-css-extract-plugin@0.7.0@mini-css-extract-plugin/dist/loader.js',
            options: {
              publicPath: '/',
              hmr: true
            }
          },
          /* config.module.rule('css-in-node_modules').use('css-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_css-loader-1@2.0.0@css-loader-1/index.js',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          /* config.module.rule('css-in-node_modules').use('postcss-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
            options: {
              ident: 'postcss',
              plugins: () => [require('postcss-flexbugs-fixes'), // eslint-disable-line
              (0, _autoprefixer.default)(_objectSpread({
                overrideBrowserslist: opts.browserslist || DEFAULT_BROWSERS,
                flexbox: 'no-2009'
              }, opts.autoprefixer || {})), ...(opts.extraPostCSSPlugins ? opts.extraPostCSSPlugins : []), ...(isDev || process.env.CSS_COMPRESS === 'none' || process.env.COMPRESS === 'none' || process.env.NO_COMPRESS ? [] : [require('cssnano')({
                preset: ['default', opts.cssnano || {
                  mergeRules: false,
                  // ref: https://github.com/umijs/umi/issues/955
                  normalizeUrl: false
                }]
              })])]
            }
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          /* config.module.rule('less').use('extract-css-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_mini-css-extract-plugin@0.7.0@mini-css-extract-plugin/dist/loader.js',
            options: {
              publicPath: '/',
              hmr: true
            }
          },
          /* config.module.rule('less').use('css-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_css-loader-1@2.0.0@css-loader-1/index.js',
            options: {
              importLoaders: 1,
              sourceMap: true,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          /* config.module.rule('less').use('postcss-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
            options: {
              ident: 'postcss',
              plugins: () => [require('postcss-flexbugs-fixes'), // eslint-disable-line
              (0, _autoprefixer.default)(_objectSpread({
                overrideBrowserslist: opts.browserslist || DEFAULT_BROWSERS,
                flexbox: 'no-2009'
              }, opts.autoprefixer || {})), ...(opts.extraPostCSSPlugins ? opts.extraPostCSSPlugins : []), ...(isDev || process.env.CSS_COMPRESS === 'none' || process.env.COMPRESS === 'none' || process.env.NO_COMPRESS ? [] : [require('cssnano')({
                preset: ['default', opts.cssnano || {
                  mergeRules: false,
                  // ref: https://github.com/umijs/umi/issues/955
                  normalizeUrl: false
                }]
              })])]
            }
          },
          /* config.module.rule('less').use('less-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js',
            options: {
              modifyVars: {},
              javascriptEnabled: true
            }
          }
        ]
      },
      /* config.module.rule('less-in-node_modules') */
      {
        test: /\.less$/,
        include: [
          /node_modules/
        ],
        use: [
          /* config.module.rule('less-in-node_modules').use('extract-css-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_mini-css-extract-plugin@0.7.0@mini-css-extract-plugin/dist/loader.js',
            options: {
              publicPath: '/',
              hmr: true
            }
          },
          /* config.module.rule('less-in-node_modules').use('css-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_css-loader-1@2.0.0@css-loader-1/index.js',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          /* config.module.rule('less-in-node_modules').use('postcss-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
            options: {
              ident: 'postcss',
              plugins: () => [require('postcss-flexbugs-fixes'), // eslint-disable-line
              (0, _autoprefixer.default)(_objectSpread({
                overrideBrowserslist: opts.browserslist || DEFAULT_BROWSERS,
                flexbox: 'no-2009'
              }, opts.autoprefixer || {})), ...(opts.extraPostCSSPlugins ? opts.extraPostCSSPlugins : []), ...(isDev || process.env.CSS_COMPRESS === 'none' || process.env.COMPRESS === 'none' || process.env.NO_COMPRESS ? [] : [require('cssnano')({
                preset: ['default', opts.cssnano || {
                  mergeRules: false,
                  // ref: https://github.com/umijs/umi/issues/955
                  normalizeUrl: false
                }]
              })])]
            }
          },
          /* config.module.rule('less-in-node_modules').use('less-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_less-loader@5.0.0@less-loader/dist/cjs.js',
            options: {
              modifyVars: {},
              javascriptEnabled: true
            }
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.(sass|scss)$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          /* config.module.rule('sass').use('extract-css-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_mini-css-extract-plugin@0.7.0@mini-css-extract-plugin/dist/loader.js',
            options: {
              publicPath: '/',
              hmr: true
            }
          },
          /* config.module.rule('sass').use('css-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_css-loader-1@2.0.0@css-loader-1/index.js',
            options: {
              importLoaders: 1,
              sourceMap: true,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          /* config.module.rule('sass').use('postcss-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
            options: {
              ident: 'postcss',
              plugins: () => [require('postcss-flexbugs-fixes'), // eslint-disable-line
              (0, _autoprefixer.default)(_objectSpread({
                overrideBrowserslist: opts.browserslist || DEFAULT_BROWSERS,
                flexbox: 'no-2009'
              }, opts.autoprefixer || {})), ...(opts.extraPostCSSPlugins ? opts.extraPostCSSPlugins : []), ...(isDev || process.env.CSS_COMPRESS === 'none' || process.env.COMPRESS === 'none' || process.env.NO_COMPRESS ? [] : [require('cssnano')({
                preset: ['default', opts.cssnano || {
                  mergeRules: false,
                  // ref: https://github.com/umijs/umi/issues/955
                  normalizeUrl: false
                }]
              })])]
            }
          }
        ]
      },
      /* config.module.rule('sass-in-node_modules') */
      {
        test: /\.(sass|scss)$/,
        include: [
          /node_modules/
        ],
        use: [
          /* config.module.rule('sass-in-node_modules').use('extract-css-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_mini-css-extract-plugin@0.7.0@mini-css-extract-plugin/dist/loader.js',
            options: {
              publicPath: '/',
              hmr: true
            }
          },
          /* config.module.rule('sass-in-node_modules').use('css-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_css-loader-1@2.0.0@css-loader-1/index.js',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          /* config.module.rule('sass-in-node_modules').use('postcss-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-vue-app/node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js',
            options: {
              ident: 'postcss',
              plugins: () => [require('postcss-flexbugs-fixes'), // eslint-disable-line
              (0, _autoprefixer.default)(_objectSpread({
                overrideBrowserslist: opts.browserslist || DEFAULT_BROWSERS,
                flexbox: 'no-2009'
              }, opts.autoprefixer || {})), ...(opts.extraPostCSSPlugins ? opts.extraPostCSSPlugins : []), ...(isDev || process.env.CSS_COMPRESS === 'none' || process.env.COMPRESS === 'none' || process.env.NO_COMPRESS ? [] : [require('cssnano')({
                preset: ['default', opts.cssnano || {
                  mergeRules: false,
                  // ref: https://github.com/umijs/umi/issues/955
                  normalizeUrl: false
                }]
              })])]
            }
          }
        ]
      },
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        include: [
          '/Users/hys/Documents/2019/umi-vue-app'
        ],
        exclude: [
          /node_modules/
        ],
        use: [
          /* config.module.rule('vue').use('vue-loader') */
          {
            loader: '/Users/hys/Documents/2019/umi-plugin/packages/umi-plugin-vue/node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js'
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      name: 'vendors'
    },
    runtimeChunk: false
  },
  plugins: [
    /* config.plugin('extract-css') */
    new MiniCssExtractPlugin(
      {
        filename: '[name].css',
        chunkFilename: '[name].chunk.css'
      }
    ),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"'
        },
        'process.env.BASE_URL': '"/"',
        __IS_BROWSER: 'true',
        __UMI_BIGFISH_COMPAT: undefined,
        __UMI_HTML_SUFFIX: 'false'
      }
    ),
    /* config.plugin('progress') */
    new WebpackBarPlugin(
      {
        color: 'green',
        reporters: [
          'fancy'
        ]
      }
    ),
    /* config.plugin('filter-css-conflicting-warnings') */
    new FilterCSSConflictingWarning(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        clearConsole: false
      }
    ),
    /* config.plugin('hmr') */
    new HotModuleReplacementPlugin(),
    /* config.plugin('vue-plugin') */
    new VueLoaderPlugin()
  ],
  entry: {
    umi: [
      '/Users/hys/Documents/2019/umi-vue-app/node_modules/_af-webpack@1.9.10@af-webpack/lib/webpackHotDevClient.js',
      '/Users/hys/Documents/2019/umi-vue-app/src/pages/.umi/umi.js'
    ]
  }
}

const { join } = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { HotModuleReplacementPlugin } = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
    entry: join(__dirname, 'app.js'), 
    output: {
        path: join(__dirname, 'build'), 
        filename: 'app.min.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }, {
                test: /.vue$/, 
                loader: 'vue-loader'
            },
            {
                test: /\.css$/, 
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        // Requires sass-loader@^7.0.0
                        // options: {
                        //     implementation: require('sass'),
                        //     indentedSyntax: true // optional
                        // },
                        // Requires sass-loader@^8.0.0
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                indentedSyntax: true // optional
                            },
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
            showErrors: true,
            cache: true,
            template: join(__dirname, 'index.html')
        }),
        new BundleAnalyzerPlugin(),
        new VuetifyLoaderPlugin(),
    ],
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //     },
    // },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: "node_vendors", // part of the bundle name and
                    // can be used in chunks array of HtmlWebpackPlugin
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all",
                },
                common: {
                    test: /[\\/]components[\\/]/,
                    chunks: "all",
                    minSize: 0,
                },
            },
        },
    }
};
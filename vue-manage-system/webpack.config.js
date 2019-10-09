const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  	mode: 'development',
  	entry: './src/main.js',
  	output: {
    	// filename: './dist/index.html',
    	// path: path.resolve(__dirname, 'dist')
    	publicPath: __dirname + "/dist/",
    	path: path.resolve(__dirname, "dist"),
    	filename: "js/[name].bundle.js",
    	chunkFilename: "js/[name].chunk-[hash:5].js"
  	},
  	module: {
    	rules: [
      		{
        		test: /\.vue$/,
        		loader: 'vue-loader'        // 处理vue
      		},
      		// 它会应用到普通的 `.js` 文件
      		// 以及 `.vue` 文件中的 `<script>` 块
      		{
        		test: /\.js$/,
        		loader: 'babel-loader'
      		},
      		// 它会应用到普通的 `.css` 文件
      		// 以及 `.vue` 文件中的 `<style>` 块
      		{
        		test: /\.css$/,
        		use: [
          			'vue-style-loader',
          			'css-loader'
        		]
      		},
      		{
        		test: /\.(png|jpg|gif)$/i,
        		use: [
          			{
            			loader: 'url-loader',
            			options: {
              				limit: 8192,
              				publicPath: __dirname + "/dist/",
              				outputPath: "images/"
            			},
          			},
        		],
      		},
      		{
        		test: /\.(eot|woff2?|ttf|svg)$/,
        		use: [
          			{
            			loader: "url-loader",
            			options: {
              				// name: "[name]-[hash:5].min.[ext]",
              				limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
              				publicPath: __dirname + "/dist/",
              				outputPath: "fonts/"
            			}
          			}
        		]
      		}
    	]
  	},
  	plugins: [
    	new VueLoaderPlugin(),
    	new htmlWebpackPlugin(),
    	new webpack.HotModuleReplacementPlugin(),
  	],
  	devServer: {
    	contentBase: './dist',
    	host: 'localhost',
    	port: 9000,
    	open: true,
    	hot: true
  	}
}
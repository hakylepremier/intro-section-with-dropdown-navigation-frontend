/** @format */

const path = require("path")
const PugPlugin = require("pug-plugin")

module.exports = {
	mode: "production",
	entry: {
		index: "./src/views/index.pug",
		// about: "./src/views/about.pug",
		//☝🏽 Insert your PUG HTML files here
	},
	output: {
		path: path.join(__dirname, "dist/"),
		publicPath: "/",
		filename: "assets/js/[name].[contenthash:8].js",
		//☝🏽 Output filename of files with hash for unique id
	},
	plugins: [
		new PugPlugin({
			pretty: true,
			//☝🏽 Format HTML (only in dev mode)
			// js: {
			// 	// output filename of extracted JS file from source script
			// 	filename: "./assets/js/[name].[contenthash:8].js",
			// },
			css: {
				filename: "assets/css/[name].[contenthash:8].css",
			},
		}),
	],
	module: {
		rules: [
			{
				test: /\.pug$/,
				loader: PugPlugin.loader,
				//☝🏽 Load Pug files
			},
			{
				test: /\.(css|sass|scss)$/,
				use: ["css-loader", "sass-loader"],
				//☝🏽 Load Sass files
			},
			{
				// To use images on pug files:
				test: /\.(png|jpg|jpeg|ico)/,
				type: "asset/resource",
				generator: {
					filename: "assets/img/[name].[hash:8][ext]",
				},
			},
			{
				// To use fonts on pug files:
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
				type: "asset/resource",
				generator: {
					filename: "assets/fonts/[name][ext][query]",
				},
			},
		],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		watchFiles: {
			paths: ["src/**/*.*", "assets/scss/**/*.*"],
			//☝🏽 Enables HMR in these folders
			options: {
				usePolling: true,
			},
		},
	},
	stats: "errors-only",
	//☝🏽 For a cleaner dev-server run
	// watch: true,
}

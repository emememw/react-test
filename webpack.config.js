const path = require("path");

module.exports = {
	context: `${__dirname}/src/js`,
	resolve: {
		root: [
			path.resolve(__dirname, "src/js"),
			path.resolve(__dirname, "assets"),
			path.resolve(__dirname, "node_modules"),
		],
		extensions: ["", ".js", ".jsx"],
	},
	entry: {
		app: ["core/app.jsx"],
	},
	output: {
		path: `${__dirname}/dist`,
		filename: "bundle.js",
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: "babel",
		}, {
			test: /\.scss$/,
			exclude: /node_modules/,
			loaders: ["style", "css", "sass"],
		}],
	},
	plugins: [],
};

const   path = require("path"),
        HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
		app: "index",
		foo: "foo",
		vendor: ["jquery"]
    },
    resolve: {
		modules: [
			path.resolve(__dirname, "src"),
			path.resolve(__dirname, "node_modules")
		]
	},
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 0,
            cacheGroups: {
                app: {
                    name: "app",
                    priority: 10,
                    reuseExistingChunk: true
                },
                foo: {
                    name: "foo",
                    test: /[\\/]src[\\/]foo/,
                    priority: 20,
                    reuseExistingChunk: true
                },
                vendor: {
                    name: "vendor",
                    test: /[\\/]node_modules[\\/]/,
                    priority: 30,
                    reuseExistingChunk: true
                }
            }
        },
        runtimeChunk: "single"
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};
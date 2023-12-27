/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const { resolve } = require('path');
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");
const htmlWebpackPlugin = require('html-webpack-plugin')
const DotEnv = require("dotenv-webpack");

/**
 * Dev Server;
 * 
 * @type {import('webpack').Configuration}
 */

const Configuration = {
    mode: "development",
    target: "web",
    entry: {
        "yg-dev": resolve("./src/bundle.ts")
    },
    devtool: "inline-source-map",
    resolve: {
        extensions: [".ts", ".js"],
        plugins: [
            new TsconfigPathsPlugin({
                baseUrl: resolve("./src"),
                configFile: resolve("./tsconfig.json"),
            })
        ]
    },
    plugins : [
        new DotEnv(),
        new htmlWebpackPlugin({
            title : "Youthgarage",
            cache  :true,
            template : resolve("./src/workspace/web/web.html"),
            inject :"body",
        })
    ],

    module : {
        rules: [
			{
				test: /\.ts$/,
				loader: "ts-loader",
			},
			{
				test: /\.css/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|ttf|svg|jpeg|jpg)/,
				type: "asset",
			},
			{
				test: /\.wasm/,
				type: "asset/inline"
			}
		],
    },
    devServer: {
		static: resolve("./out"),
		historyApiFallback: true,
		open: false,
		liveReload: true,
		port : 5000

	},
    output: {
		filename: "[contenthash].js",
		path: resolve("./out"),
		clean: true,
		publicPath: "/",

	},

	optimization: {
		runtimeChunk: "single",
	},

}

module.exports = Configuration
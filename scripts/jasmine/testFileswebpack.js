/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const { resolve } = require("path");
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");
const glop = require("glob")
const webpack = require("webpack");

/**
 * Test Dev Server;
 *
 * @type {import('webpack').Configuration}
 */

const testDevServerWebpackConfig = {
    entry : glop.sync("./src/**/*.spec.ts"),
    mode: "development",
    output: {
        filename: "browser.spec.js",
        clean: true,
        path : resolve("./spec/tests/unit/browser")
    },
   
    resolve: {
        extensions: [".ts", ".js"],
        alias : {
            "src" : resolve('./src')
        },
        plugins: [
            new TsconfigPathsPlugin({
                baseUrl: resolve("./src"),
                configFile: resolve("./tsconfig.test.json"),
            }),
        ],
        modules: [__dirname, "src", "node_modules"],
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
    },

    module: {
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
				test: /\.(png|ttf|svg|jpeg)/,
				type: "asset",
			},
			{
				test: /\.wasm/,
				type: "asset/inline"
			}
		],
	},

};

module.exports = testDevServerWebpackConfig;
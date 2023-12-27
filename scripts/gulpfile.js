/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const gulp = require("gulp");
const { COMPILE_TESTS } = require("./testFilesCompiler");
const {TEST_SERVER} = require('./testFilesServer')

gulp.task("compile-tests", gulp.series(COMPILE_TESTS,TEST_SERVER));

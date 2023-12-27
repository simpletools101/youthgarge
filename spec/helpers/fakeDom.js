/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const { JSDOM }  = require("jsdom");
const dom = new JSDOM(`
    <html>
    <body>
    </body>
    </html>
`);
global.document = dom.window.document;
global.window = dom.window;
global.navigator = dom.window.navigator;
global.customElements = dom.window.customElements;


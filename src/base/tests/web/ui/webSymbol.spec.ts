/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IVTest } from "../../../../platform/testsUtils/testUtils";
import { WebSymbol } from "../../../web/ui/webSymbol/webSymbol";
import "../../../web/ui/webSymbol/webSymbol";

describe("WebSymbol Test", () => {
    let testFixture: IVTest<WebSymbol>;
    let testControlElement:HTMLElement;

    beforeEach(()=>{
        testControlElement = document.createElement("div");
    });

    afterEach(()=>{
        testControlElement.remove()
    })

    beforeAll(() => {
        testFixture = IVTest.createFixture(`
            <yg-web-symbol websymbol="MoreOptions"></yg-web-symbol>
        `);
    });

    afterAll(() => {
        testFixture.clearFixture();
    });

    it("should work and be defined", () => {
        expect(testFixture.element).toBeDefined();
    });

    it("should contain the right svg Content",() => {
        testControlElement.insertAdjacentHTML("afterbegin",`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
      </svg>`)

        let symbolContainerHTML = testFixture.shadowDom.querySelector<HTMLDivElement>(".symbol-container")!.innerHTML
        let testControlHTML = testControlElement.innerHTML

        expect(symbolContainerHTML).toBe(testControlHTML)
    });

});

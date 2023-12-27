/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { BootstrapIcons } from "../../web/bootstrapIcons"

describe("BootstrapIcons",()=>{

    it("should have bootstrap Icons defined within in",()=>{
        /**
         * Should atleast be greater than 4
         */
        expect(BootstrapIcons.allSvgDefinitions.length > 3).toBeTrue()
    })

    it("should be defined",()=>{
        expect(BootstrapIcons.Comment).toBeTruthy();
    })

    it("should contain svg Data and clear one",()=>{
        expect(BootstrapIcons.Search.svgContent).toEqual(BootstrapIcons.Search.svgContent)
    })

});
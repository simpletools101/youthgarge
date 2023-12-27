/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BootstrapIcons, type TBootstrapIcons } from "../../bootstrapIcons";
import { createRef,ref } from "lit/directives/ref.js";

@customElement("yg-web-symbol")
export class WebSymbol extends LitElement {

    public symbolContainerRef = createRef<HTMLDivElement>();

    /**
     * The default Symbol is undefined
     */
    @property() websymbol: TBootstrapIcons | undefined = undefined;


    override firstUpdated(){
        let element = this.symbolContainerRef.value!;
        element.innerHTML = this.getSvgContent()
    }


    override updated(){
        let element = this.symbolContainerRef.value!;
        element.innerHTML = this.getSvgContent()
    }

    static override get styles() {
        return css`
            :host {
                display: block;
                fill: #000;
                font-size: 24px;
            }
            .symbol-container {
                fill: inherit;
                width: inherit;
                height: inherit;
                font-size: inherit;
            }
            .symbol-container > svg {
                fill: inherit;
                font-size: inherit;
                width: inherit;
                height: inherit;
            }
        `;
    }

    /**
     * Return the svgContent from the bootstrap Database
     * @returns
     */
    private getSvgContent() {
        let content: string = "";
        if (this.websymbol) {
            content = BootstrapIcons[this.websymbol].svgContent;
        } else {
            throw new Error(`WebSymbol not defined`).stack;
        }
        return content;
    }

    override render() {
        return html` <div class="symbol-container" ${ref(this.symbolContainerRef)}>${this.getSvgContent()}</div> `;
    }
}

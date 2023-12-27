/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("yg-home-qt")
export class HomeQT extends LitElement {
    static override get styles() {
        return css`
            :host {
                width: 100%;
                height: 350px;
            }
            .wrapper {
                width:inherit;
                height:inherit;
                font-family:Pacifo;
                background-color:var(--turquoise);
                color:#fff;
                display:flex;
                align-items:center;
                justify-content:center;
                font-size:24pt;
                
            }
            .wrapper > div {
                max-width:80%;
                text-align:center;
            }
        `;
    }

    override render() {
        return html`
            <div class="wrapper">
                <div class="quote-container">Faith is the thread stitching purpose into every moment. In unity, Christians and seekers, inspired by Christ's teachings, ignite passions and unveil the extraordinary purpose within.</div>
            </div>
        `;
    }
}

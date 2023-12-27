/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("yg-featured-item")
export class FeaturedItem extends LitElement {
    static override get styles() {
        return css`
            :host {
                width: 100%;
            }
            .wrapper {
                margin:10px 0px 10px 0px;

                width: inherit;
                height: inherit;
                font-family: PlusJ;
            }
            .wrapper .title-section {
                /* border:1px solid green; */
                display: flex;
                align-items: center;
                height: 35px;
                font-family: 17pt;
                justify-content: space-between;
                margin-bottom: 5px;
            }
            .title-section > .brief-title {
                font-weight:350;
                font-size: 19pt;
                color: #1a1a1a;
            }
            .title-section > .release-date{
                color: var(--tiffany-blue);
                margin-right:10px;
            }
            .wrapper > .content {
                color: #756f6f;
                font-size: 12.5pt;
            }
        `;
    }

    override render() {
        return html`
            <div class="wrapper">
                <div class="title-section">
                    <div class="brief-title">Obsession</div>
                    <div class="release-date">09/11/2023</div>
                </div>
                <div class="content">
                    Getting the obssession over something that is not that big at all. Getting the obssession over something that is not that big at all. Getting the obssession over something that is not that big at all. Getting the obssession over something that is not that big at all.
                </div>
            </div>
        `;
    }
}

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./navigationContainer/navigationContainer";
import "../../../base/web/ui/webSymbol/webSymbol";

@customElement("yg-header")
export class Header extends LitElement {
    static override get styles() {
        return css`
            :host {
                display: block;
                width: 100%;
                height: auto;
            }
            .yg-header-container {
                width: inherit;
                height: inherit;
            }
            .split-view-container {
                width: 100%;
            }
            .split-view-container > .banner-section {
                background-color: var(--black);
                height: 35px;
                display: flex;
                justify-content: space-between;
                align-items:center;
            }

            .split-view-container > .banner-section > .new_blog_section {
                display:flex;
                margin-left:30px;
            }
            .new_blog_section > .cl-1 {
                width:fit-content;
                color:yellow;
                font-weight:bold;
                font-family:PlusJ;
                display:flex;
                height:30px;
                align-items:center;
                justify-content:center;
                font-size:15px;

            }

            .new_blog_section > a {
                color:#fff;
                height:inherit;
                display:flex;
                align-items:center;
                margin-left:5px;
                font-family:PlusJ;
                font-size:15px;
            }

            .split-view-container > .banner-section > .links-container-area {
                display: flex;
                width: fit-content;
            }

            a.social-link-container {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 30px;
                margin:0px 5px 0px 5px;
                height: inherit;

            }
            yg-web-symbol.social-icon{
                width: 18px;
                fill:#fff;

            }
            a.social-link-container:hover  yg-web-symbol.social-icon {
                fill: var(--turquoise);
                /* height: 17px; */
            }
        `;
    }

    override render() {
        return html`
            <div class="yg-header-container">
                <div class="split-view-container">
                    <div class="banner-section">
                        <div class="new_blog_section">
                            <div class="cl-1">LATEST:</div>
                            <a href="https://wwww.youthgarage.com/a_new_life_in_jesus">A New life in Jesus daily</a>
                        </div>
                        <div class="links-container-area">
                            <a href="https://www.instagram.com/youthgarage" target="_blank" class="social-link-container">
                                <yg-web-symbol class="social-icon" websymbol="Instagram"></yg-web-symbol>
                            </a>
                            <a href="https://www.facebook.com/youthgarage" target="_blank" class="social-link-container">
                                <yg-web-symbol class="social-icon" websymbol="Facebook"></yg-web-symbol>
                            </a>
                            <a href="https://www.twitter.com/youthgarage" target="_blank" class="social-link-container">
                                <yg-web-symbol class="social-icon" websymbol="Twitter"></yg-web-symbol>
                            </a>
                        </div>
                    </div>
                    <div class="navigation-container">
                        <yg-navigation-container></yg-navigation-container>
                    </div>
                </div>
            </div>
        `;
    }
}

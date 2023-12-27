/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import "../../logo/logo";
import "./navItem";

@customElement("yg-navigation-container")
export class NavigationContainer extends LitElement {
    static override get styles() {
        return css`
            :host {
                display: block;
                width: 100%;
                height: 70px;
            }

            .navigation-container-wrapper {
                width: inherit;
                height: inherit;
            }
            .navigation-container-wrapper > div {
                width: inherit;
                height: inherit;
                display: flex;
                justify-content: space-between;
            }

            .view-container-1 {
                display:flex;
            }

            .view-container-2 {
                display: flex;
                align-items: center;
                margin-right:20px;
            }
            .view-container-2 > div {
                display: flex;
            }
            .icon-container,.nav-icon{
                width:40px;
                display:none;
                align-items:center;
                justify-content:center;
                cursor:pointer;
            }

            .nav-icon > yg-web-symbol {
                fill:#000;
                width:18px;
            }

            .icon-container > yg-web-symbol {
                fill:var(--black);
                width:16px;
            }
            .icon-container:hover .search-icon,.nav-icon-svg{
                fill:var(--turquoise);

            }
            .nav-icon:hover .nav-icon-svg{
                fill:var(--turquoise);

            }
        `;
    }

    override render() {
        return html`
            <div class="navigation-container-wrapper">
                <div class="split-view">
                    <div class="view-container-1">
                        <div class="navigation nav-icon">
                            <yg-web-symbol websymbol="NavBars" class="nav-icon-svg"></yg-web-symbol>
                        </div>
                        <yg-logo></yg-logo>
                    </div>
                    <div class="view-container-2">
                        <div class="navigation-section">
                            <yg-nav-item link="/">Home</yg-nav-item>
                            <yg-nav-item link="/about">About</yg-nav-item>
                            <yg-nav-item link="/stories">Stories</yg-nav-item>
                            <yg-nav-item link="/pricing">Premium</yg-nav-item>
                        </div>
                        <div class="search icon-container" title="Search Stories">
                            <yg-web-symbol websymbol="Search" class="search-icon"></yg-web-symbol>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

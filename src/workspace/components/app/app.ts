/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { Router } from "@vaadin/router";
import "../webpage/webpage"

@customElement("yg-web")
export class App extends LitElement {
    public static override get styles() {
        return css`
            :host {
                display: block;
                width: 100%;
                height: 100%;
            }
            .app-main-container {
                width: inherit;
                height: inherit;
            }
            .app-main-container > div {
                width: inherit;
                height: inherit;
            }
            .app-main-container > div > div {
                width: inherit;
                height: inherit;
            }
        `;
    }

    override firstUpdated() {
        let router = new Router(this.getPageContainer());
        router.setRoutes([
            {
                path: "/",
                component: "yg-web-page",
            },
            {
                path: "/about",
                component: "yg-web-page",
            },
            {
                path: "/stories",
                component: "yg-web-page",
            },
            {
                path: "/stories/:id",
                component: "yg-web-page",
            },
            {
                path: "/pricing",
                component: "yg-web-page",
            },
            {
                path: "/privacy_policy",
                component: "yg-web-page",
            },
            {
                path: "/terms_of_use",
                component: "yg-web-page",
            }
        ]);
    }

    private getPageContainer() {
        return this.shadowRoot!.querySelector<HTMLDivElement>("#page-container")!;
    }

    protected override render(): unknown {
        return html`
            <div class="app-main-container">
                <div class="container-wrapper">
                    <div id="page-container"></div>
                </div>
                <div class="presentation-view" role="presentation"></div>
            </div>
        `;
    }
}

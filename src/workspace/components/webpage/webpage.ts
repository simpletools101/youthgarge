/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { RouteService } from "../../../services/routeService/routeService";
import "../header/header";
import "../routes/routePage";
import "../routes/Home/yghome";

@customElement("yg-web-page")
export class Webpage extends LitElement {
    @property() currentPath: string = "/";

    override connectedCallback(): void {
        super.connectedCallback();
        RouteService.eventDispatcher.subscribeAsync((args) => {
            this.currentPath = args.currentRoute;
        });
    }

    override render() {
        return html`
            <div class="main-container-area">
                <yg-header role="heading"></yg-header>
                <div class="page-container">
                    <yg-route-page .globalRoute=${this.currentPath} signedRoute="/">
                        <yg-home-route></yg-home-route>
                    </yg-route-page>
                </div>
            </div>
        `;
    }
}

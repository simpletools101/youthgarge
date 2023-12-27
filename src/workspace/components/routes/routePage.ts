/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { createFadeInOrOut } from "../../../base/web/dom";

@customElement("yg-route-page")
export class RoutePage extends LitElement {

    @property({attribute:false}) globalRoute:string = "";
    @property() signedRoute:string = "";
    public isActive:boolean = false;

    override updated(){
        if(this.globalRoute == this.signedRoute){
            this.isActive = true;
            createFadeInOrOut("in",this,150)
        }else{
            if(this.isActive){
                createFadeInOrOut("out",this,150)
                this.isActive = false;
            }
        }
    }

    static override get styles(){
        return css`
            :host {
                display:block;
                width:100%;
                height:100%;

            }
            .page-section {
                width:inherit;
                height:inherit;
            }
        `
    };

    protected override render(): unknown {
        return html`
            <div class="page-section">
                <slot></slot>
            </div>
        `
    }

}
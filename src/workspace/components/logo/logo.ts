/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';


@customElement('yg-logo')
export class ProductLogo extends LitElement {

    @property() color:string = "var(--black)"
    static override get styles(){
        return css`
            :host {
                display:block;
                width:fit-content;
                height:70px;
            }
            a {
                display:flex;
                align-items:center;
                justify-content:center;
                padding-left:25px;
                padding-right:25px;
                width:inherit;
                height:inherit;
                text-decoration:none;
                font-family:Pacifo;
                font-size:19pt;
                color:var(--black);
            }
            span {
                color:var(--turquoise);
            }
        `
    }


   override render(){
      return html`
            <a href="/" style=${styleMap({color : this.color})}>
                youth<span>Garage</span>
            </a>
      `

   }


}
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';


@customElement('yg-nav-item')
export class NavItem extends LitElement {

    @property() link:string = ""

    static override styles = css`
        a {
            color:var(--black);
            font-family:PlusJ;
            text-decoration:none;
            font-size:16px;
            cursor:pointer;
            margin:0px 20px 0px 20px;
            font-weight:350;
        }
        a:hover {
            color:var(--turquoise);
        }
    `


   override render(){
      return html`
        <a href=${this.link}>
            <slot></slot>
        </a>
      `

   }


}
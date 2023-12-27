/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
//@ts-ignore
import bannerbg from "../../../../../resources/imgs/people-3614311_1280.jpg"

@customElement('yg-home-banner')
export class BannerArea extends LitElement {

    @property({attribute:false}) nicheStatement:string = ""

    static override styles  = css`
        :host {
            display:block;
            width:100%;
            height:570px;
        }

        .container {
            width:inherit;
            height:inherit;
            background-size:cover;
            background-image:url(${unsafeCSS(bannerbg)})
        }

        .container > .background-slot-container{
            display:flex;
            align-items:center;
            justify-content:center;
            width:inherit;
            height:inherit;
            font-family:PlusJ;
            background-color:#00000047;
        }
        .content-area {
            display:flex;
            align-items:center;
            flex-direction:column;
            justify-content:center;
        }
        .content-area > .niche-area {
            font-size:40pt;
            margin-bottom:8px;
            font-weight:300;
            color:#fff;

        }

        .content-area > a {
            text-decoration:none;
            width:180px;
            border-radius:2px;
            display:flex;
            align-items:center;
            justify-content:center;
            height:50px;
            margin-top:8px;
            color:#fff;
            background-color:var(--turquoise);
            border:2px solid var(--turquoise);
            transition:all .3s;
        }
        a:hover {
            background-color:transparent;
            color:#fff;
            border-color:#fff;
        }
        a:active {
            transform:scale(0.9)
        }
    `

    override connectedCallback(): void {
        super.connectedCallback();
        this.role = "banner"
    }

   override render(){
      return html`
        <div class="container">
            <div class="background-slot-container">
                <div class="content-area">
                    <div class="niche-area">${this.nicheStatement}</div>
                    <a href="/stories">Start Journey</a>
                </div>
            </div>
        </div>
      `

   }


}
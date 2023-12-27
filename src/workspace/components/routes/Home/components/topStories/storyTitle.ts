/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { LitElement, css, html } from 'lit';
import { customElement} from 'lit/decorators.js';


@customElement('yg-story-title')
export class StoryTitle extends LitElement {


    static override get styles(){
        return css`
            :host {
                display:block;
                width:100%;
                height:57px;
                margin-bottom:80px;
            }
            .title-container{
                width:inherit;
                height:inherit;
            }
            .title-container > div {
                height:inherit;
                font-size:20px;
                display:flex;
                align-items:center;
                justify-content:center;
                text-transform: uppercase;
                color:#fff;
                font-family:PlusJ;
                font-weight:bold;
                background-color:var(--tiffany-blue);
                
            }
        `
    }

   override render(){
      return html`
        <div class="title-container">
            <div class="wrapper">
                <slot></slot>
            </div>
        </div>
      `

   }


}
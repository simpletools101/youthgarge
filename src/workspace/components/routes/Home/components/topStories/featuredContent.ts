/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import "./featuredContentItem"


@customElement('yg-featured-content')
export class FeaturedContent extends LitElement {

    static override get styles(){
        return css`
            :host {
                width:inherit;
                height:100%;
            }
            .featured-content{
                width:inherit;
                height:100%;
               margin-left:10px;
            }
            .wrapper .title {
                font-size:21pt;
                font-family:PlusJ;
                font-weight:500;
                color:var(--turquoise);
            }
            .items {
                overflow-y:auto;
                height:550px;
            }
        `
    }
    



   override render(){
      return html`
        <div class="featured-content">
            <div class="wrapper">
                <div class="title">More Items</div>
                <div class="items">
                    <yg-featured-item></yg-featured-item>
                    <yg-featured-item></yg-featured-item>
                    <yg-featured-item></yg-featured-item>
                    <yg-featured-item></yg-featured-item>
                    <yg-featured-item></yg-featured-item>
                    <yg-featured-item></yg-featured-item>
                    <yg-featured-item></yg-featured-item>
                    <yg-featured-item></yg-featured-item>
                    <yg-featured-item></yg-featured-item>

                </div>
            </div>
        </div>
      
      `

   }


}
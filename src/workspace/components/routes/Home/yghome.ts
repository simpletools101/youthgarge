/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import "./components/banner"
import "./components/topStories/topStories"
import "./components/quote"

@customElement('yg-home-route')
export class HomeRoute extends LitElement {
   override render(){
      return html`
         <div class="wrapper">
            <div class="split-view">
               <div class="view-1">
                  <yg-home-banner .nicheStatement=${"Faithful Living in a Modern World"}></yg-home-banner>
               </div>
               <div class="view-2">
                  <yg-home-topstories></yg-home-topstories>
               </div>
               <div class="view-3">
                  <yg-home-qt></yg-home-qt>
               </div>
            </div>
         </div>
      `

   }


}
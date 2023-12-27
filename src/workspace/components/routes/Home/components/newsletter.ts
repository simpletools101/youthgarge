/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';


@customElement('yg-newsletter')
export class LitComp extends LitElement {



   override render(){
      return html`
        <div class="container">
            <div class="wrapper">
                <div class="title">Subcribe to my newsletter and get updates </div>
            </div>
        </div>
      `
   }


}
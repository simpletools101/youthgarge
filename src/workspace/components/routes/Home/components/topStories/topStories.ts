/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import "../../../../BlogComponent/blogComponent";
import "./featuredContent";
import "./storyTitle";

@customElement("yg-home-topstories")
export class TopStories extends LitElement {
    static override styles = css`
        :host {
            display: flex;
            width: 100%;
            height: auto;
        }
        .stories-container {
            width: inherit;
            height: inherit;
        }
        .stories-container > .wrapper {
            width: 100%;
        }

        .wrapper > .title-container {
            height: 70px;
            font-family: PlusJ;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 500;
            font-size: 12.5pt;
            letter-spacing: 2px;
        }
        .wrapper .stories-section {
            width: 100%;
            height: fit-content;
            margin: 0px 0px 80px 0px;
        }
        .wrapper .stories-section .content {
            /* border:2px solid #838181; */
            height: inherit;
            width: 90%;
            margin: auto;
        }
        .wrapper > .stories-section > .content > .content-1 {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 20px;
            width: 100%;
            margin-bottom: 80px;
        }
        .wrapper > .stories-section > .content > .content-2 {
        }
        .wrapper > .stories-section > .content > .content-area {
            justify-items: center;
        }
        .content-2 > .grid-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-items: center;
        }
        .grid-section > .section-2 {
            width: 100%;
        }
    `;

    override render() {
        return html`
            <div class="stories-container">
                <div class="wrapper">
                    <yg-story-title>Top Stories</yg-story-title>

                    <div class="stories-section">
                        <div class="content">
                            <div class="content-1 content-area">
                                <yg-blog-component></yg-blog-component>
                                <yg-blog-component></yg-blog-component>
                                <yg-blog-component></yg-blog-component>
                            </div>
                            <div class="content-2 content-area">
                                <yg-story-title>make a different me</yg-story-title>
                                <div class="grid-section">
                                    <div class="section-1">
                                        <yg-blog-component2></yg-blog-component2>
                                    </div>
                                    <div class="section-2">
                                        <yg-featured-content></yg-featured-content>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

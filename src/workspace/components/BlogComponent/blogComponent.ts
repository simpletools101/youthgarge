/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
//@ts-ignore
import smallblogBanner from "../../../resources/imgs/people-1492052_1280.jpg";
//@ts-ignore

import { styleMap } from "lit/directives/style-map.js";
import "./blogcp1"

interface IBlogComponent {
    interiorTitle: string;
    mainTitle: string;
    briefDescription: string;
    readTime: string;
    viewNumber: number;
    id: string;
    imgSource: string;
    dateReleased: string;
}


@customElement("yg-blog-component")
export class BlogComponent extends LitElement {


    @property({ attribute: false }) data: IBlogComponent = {
        interiorTitle: "lifeChallenges",
        mainTitle: "Obsession",
        briefDescription: "Getting the obssession over something that is not that big at all.",
        readTime: "5min",
        viewNumber: 150,
        imgSource: smallblogBanner,
        id: "obsessions_part_1",
        dateReleased: "09/11/2023",
    };

    static override get styles() {
        return css`
            :host {
                display: block;
            }
            .blog-item-container {
                width: 350px;
                font-family: PlusJ;
            }

            .blog-item-container > .wrapper {
                width: inherit;
            }

            .blog-display-image {
                width: 350px;
                height: 250px;
                border-radius:3px;
                margin-bottom:20px;
                background-size:cover;
            }
            .st-1 {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .st-1 .interior-title {
                font-size: 11pt;
                font-weight: 400;
                text-transform:lowercase;
                color:#9b9494;
            }
            .st-1 .view-numbers {
                display: flex;
                align-items:center;
                font-size: 11pt;
                font-weight: 400;
                color:#9b9494;

            }
            .st-1 .view-numbers >  yg-web-symbol {
                margin-right:5px;
                fill:#9b9494;
            }

            .st-2 .main-title{
                font-size:16pt;
                font-weight:bold;
            }

            .st-2 > .description-container {
                font-weight:350;
                font-size:14.5pt;
                margin-top:4px;
            }
            .st-3 {
                margin-top:10px;
                display:flex;
                justify-content:space-between;
                font-size: 11pt;
                font-weight: 400;
                color:#9b9494;

            }
        `;
    }

    override render() {
        return html`
            <div class="blog-item-container">
                <div class="wrapper">
                    <div class="blog-display-image" style=${styleMap({
                        "background-image":`url(${this.data.imgSource})`
                    })}></div>
                    <div class="st-1" >
                        <div class="interior-title">${this.data.interiorTitle}</div>
                        <div class="view-numbers">
                            <yg-web-symbol websymbol="Viewers"></yg-web-symbol>
                            <div class="view-number-count">${this.data.viewNumber}</div>
                        </div>
                    </div>
                    <div class="st-2">
                        <div class="main-title" >${this.data.mainTitle}</div>
                        <div class="description-container" >${this.data.briefDescription}</div>
                    </div>
                    <div class="st-3">
                        <div class="data-time">${this.data.dateReleased}</div>
                        <div class="read-time">${this.data.readTime}</div>
                    </div>
                </div>
            </div>
        `;
    }
}




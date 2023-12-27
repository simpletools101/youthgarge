/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

interface IIVComponent<T extends HTMLElement> {

    /**
     * Get the currrent ELement
     */
    get element():HTMLElement;
	/**
	 * Used to return the LightDom of the element
	 */
	get lightDom(): T;

	/**
	 * Used to return the ShadowDom of the element
	 */
	get shadowDom(): ShadowRoot;

	/**
	 * Check for accessiblity present on the element;
	 */
	hasAccessiblity(): boolean;

	/**
	 * Check if it supports keyboard focus
	 */
	supportskeyBoardFocus(): boolean;

	/**
	 * Destroy fixture
	 */
	clearFixture(): void;
}

export class IVTest<T extends HTMLElement> implements IIVComponent<T> {
	private testEnvironment: HTMLElement | undefined = undefined;
	private testElement: HTMLElement | undefined = undefined;
	private fixtureData: string = "";

	constructor(_fixtureData: string) {
		this.fixtureData = _fixtureData;
		this.intializeFixture();
	}

	public get lightDom() {
		return this.testElement! as T;
	}

	public get shadowDom() {
		return this.testElement!.shadowRoot!;
	}

    get element(): HTMLElement {
        return this.testElement!;
    }

	private createFixtureEnvironmentRandomNumber() {
		return Math.random() * 1000;
	}

	public hasAccessiblity() {
		if (this.testElement?.role?.charAt(0)) {
			return true;
		} else {
			return false;
		}
	}

	public supportskeyBoardFocus() {
		if (this.testElement?.tabIndex == 0) {
			return true;
		} else {
			return false;
		}
	}

	clearFixture(): void {
		this.testEnvironment?.remove();
	}

	public static createFixture<T extends HTMLElement>(data: string) {
		return new IVTest<T>(data);
	}

	private intializeFixture() {
		this.testEnvironment = document.createElement("div");
		this.testEnvironment.classList.add(`test-environment-${this.createFixtureEnvironmentRandomNumber()}`);
		this.testEnvironment.innerHTML = this.fixtureData;
		this.testElement = this.testEnvironment.firstElementChild! as HTMLElement;
		document.body.appendChild(this.testEnvironment);
	}
}
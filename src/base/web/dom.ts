/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/


export function createFadeInOrOut(state: "in" | "out", container: HTMLElement, timeout: number) {
	return new Promise<void>((c, e) => {
		container.style.display = "block";
		setTimeout(() => {
			if (state == "in") {
				container.style.transition = "all .3s";
				container.style.opacity = "1";
				c();
			} else {
				container.style.transition = "all .3s";
				container.style.opacity = "0";
				c();
				container.style.display = "none";
			}
		}, timeout);
	});
}

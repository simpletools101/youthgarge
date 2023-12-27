/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Simple Tools. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { CommonEvents } from "../../platform/events/events";

interface IRouteServiceNavigationData {
    currentRoute: string;
    hashLocation: string;
}

/**
 * Reigstered Paths
 */

const registeredPaths = ["/", "/about", "/stories", "/pricing", "/privacy_policy", "/terms_of_use"];

export const RouteService = new (class {
    private timeoutID: NodeJS.Timeout | undefined = undefined;
    public eventDispatcher = CommonEvents.createGlobalAsyncEventEmitter<IRouteServiceNavigationData>();
    private cachedPath: string = window.location.pathname;
    private navigationsOptions: IRouteServiceNavigationData = { currentRoute: "", hashLocation: "" };

    constructor() {
        this.initialize();
    }

    private initialize() {
        this.initializeForInitialStartup();
        this.initializeRouteListenerTimer();
    }

    /**
     *
     * DO THIS ONLY FOR PATHS THAT ARE NOT PRE-REGISTERED TO BE HANDLED
     *
     * We call this at the beginning to enable us capture the path the user entered that might have been annonymus
     * for example a blog paths eg https://www.youthgarage.com/stories/preparing_your_christian_life
     */

    private initializeForInitialStartup() {
        this.navigationsOptions = {
            currentRoute: window.location.pathname,
            hashLocation: window.location.hash,
        };

        if (!registeredPaths.includes(window.location.pathname)) {
            this.eventDispatcher.raiseEventAsync({
                currentRoute: window.location.pathname,
                hashLocation: window.location.hash,
            });
        }
    }

    public getCurrentNavigationOptions() {
        return this.navigationsOptions;
    }

    public dispose() {
        if (this.timeoutID) {
            clearInterval(this.timeoutID);
        }
    }

    /**
     * Dispatch new navigaiton options that have been released 
     */

    private dispatchNewNavigationOptions() {
        let newRoute = window.location.pathname;
        if (this.cachedPath != newRoute) {
            this.eventDispatcher.raiseEventAsync({
                currentRoute: window.location.pathname,
                hashLocation: window.location.hash,
            });
            this.cachedPath = newRoute;
        }
    }

    private initializeRouteListenerTimer() {
        this.timeoutID = setInterval(() => {
            this.dispatchNewNavigationOptions();
        }, 1100);
    }
})();

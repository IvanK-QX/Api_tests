import { APIRequestContext } from "@playwright/test"

export class Analytics {
    apiContext: APIRequestContext

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }
}
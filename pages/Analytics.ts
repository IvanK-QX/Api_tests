import { APIRequestContext } from "@playwright/test"
import { AnalyticsDeviceActivityPage } from "./analyticsPage/da_page"
import { AnalyticsUserActivityPage } from "./analyticsPage/ua_page"

export class Analytics {
    apiContext: APIRequestContext
    daPage: AnalyticsDeviceActivityPage

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
        this.daPage = new AnalyticsDeviceActivityPage(apiContext)
        this.daPage = new AnalyticsUserActivityPage(apiContext)
    }
}
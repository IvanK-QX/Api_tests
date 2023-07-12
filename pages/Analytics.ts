import { APIRequestContext } from "@playwright/test"
import { AnalyticsDeviceActivityPage } from "./analyticsPage/da_page"
import { AnalyticsUserActivityPage } from "./analyticsPage/ua_page"

export class Analytics {
    apiContext: APIRequestContext
    daPage: AnalyticsDeviceActivityPage
    uaPage: AnalyticsUserActivityPage

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
        this.daPage = new AnalyticsDeviceActivityPage(apiContext)
        this.uaPage = new AnalyticsUserActivityPage(apiContext)
    }
}
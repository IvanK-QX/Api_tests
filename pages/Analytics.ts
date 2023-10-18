import { APIRequestContext } from "@playwright/test"
import { AnalyticsDeviceActivityPage } from "./analyticsPage/da_page"
import { AnalyticsUserActivityPage } from "./analyticsPage/ua_page"
import { AnalyticsUserActivityStreamPage } from "./analyticsPage/ua_page/ua_page_stream"

export class Analytics {
    apiContext: APIRequestContext
    daPage: AnalyticsDeviceActivityPage
    uaPage: AnalyticsUserActivityPage
    uaStreamPage: AnalyticsUserActivityStreamPage

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
        this.daPage = new AnalyticsDeviceActivityPage(apiContext)
        this.uaPage = new AnalyticsUserActivityPage(apiContext)
        this.uaStreamPage = new AnalyticsUserActivityStreamPage(apiContext)
    }
}
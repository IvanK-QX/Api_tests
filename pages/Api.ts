import { APIRequestContext } from "@playwright/test"
import { ApiLoginPage } from "./appPages/login_page"

export class Api {
    apiContext: any
    loginPage: ApiLoginPage

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
        this.loginPage = new ApiLoginPage(apiContext)
    }
}
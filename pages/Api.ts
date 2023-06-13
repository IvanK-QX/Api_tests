import { APIRequestContext } from "@playwright/test"
import { ApiLoginPage } from "./appPages/login_page"
import { ApiProfilePage } from "./appPages/profile_page"

export class Api {
    apiContext: any
    loginPage: ApiLoginPage
    profilePage: ApiProfilePage

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
        this.loginPage = new ApiLoginPage(apiContext)
        this.profilePage = new ApiProfilePage(apiContext)
    }
}
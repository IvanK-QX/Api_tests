import { APIRequestContext } from "@playwright/test"
import { ApiLoginPage } from "./apiPages/login_page"
import { ApiProfilePage } from "./apiPages/profile_page"
import { ApiLeadersPage } from "./apiPages/leader_page"
import { ApiDeleteAccountPage } from "./apiPages/deleteAccount_page"
import { ApiStreamPage } from "./apiPages/stream_page"

export class Api {
    apiContext: any
    loginPage: ApiLoginPage
    profilePage: ApiProfilePage
    leadersPage: ApiLeadersPage
    deleteAccountPage: ApiDeleteAccountPage
    streamsPage: ApiStreamPage

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
        this.loginPage = new ApiLoginPage(apiContext)
        this.profilePage = new ApiProfilePage(apiContext)
        this.leadersPage = new ApiLeadersPage(apiContext)
        this.deleteAccountPage = new ApiDeleteAccountPage(apiContext)
        this.streamsPage = new ApiStreamPage(apiContext)
    }
}
import { APIRequestContext } from "@playwright/test"
import { ApiLoginPage } from "./apiPages/login_page"
import { ApiProfilePage } from "./apiPages/profile_page"
import { ApiLeadersPage } from "./apiPages/leader_page"
import { ApiDeleteAccountPage } from "./apiPages/deleteAccount_page"
import { ApiStreamPage } from "./apiPages/stream_page"
import { ApiGiftsPage } from "./apiPages/gifts_page"
import { ApiBlockedPage } from "./apiPages/blocked_page"
import { ApiFollowingPage } from "./apiPages/following_page"
import { ApiPayoutPage } from "./apiPages/payout_page"
import { ApiClientSettingsPage } from "./apiPages/clientSettings_page"
import { ApiSalaryRulesPage } from "./apiPages/salaryRules_page"
import { ApiModeratorPage } from "./apiPages/moderator_page"
import { ApiReferalPage } from "./apiPages/referal_page"
import { ApiModerationsPage } from "./apiPages/moderations_page"
import { ApiReportsPage } from "./apiPages/reports_page"
import { ApiNotificationsContentPage } from "./apiPages/notificationsContent_page"
import { ApiInternalPage } from "./apiPages/internal_page"

export class Api {
    apiContext: APIRequestContext
    loginPage: ApiLoginPage
    profilePage: ApiProfilePage
    leadersPage: ApiLeadersPage
    deleteAccountPage: ApiDeleteAccountPage
    streamsPage: ApiStreamPage
    giftsPage: ApiGiftsPage
    blockedPage: ApiBlockedPage
    followingPage: ApiFollowingPage
    payoutPage: ApiPayoutPage
    clientSettingsPage: ApiClientSettingsPage
    selaryRulesPage: ApiSalaryRulesPage
    moderatorPage: ApiModeratorPage
    referalPage: ApiReferalPage
    moderationsPage: ApiModerationsPage
    reportPage: ApiReportsPage
    notificationsContentPage: ApiNotificationsContentPage
    internalPage: ApiInternalPage

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
        this.loginPage = new ApiLoginPage(apiContext)
        this.profilePage = new ApiProfilePage(apiContext)
        this.leadersPage = new ApiLeadersPage(apiContext)
        this.deleteAccountPage = new ApiDeleteAccountPage(apiContext)
        this.streamsPage = new ApiStreamPage(apiContext)
        this.blockedPage = new ApiBlockedPage(apiContext)
        this.payoutPage = new ApiPayoutPage(apiContext)
        this.giftsPage = new ApiGiftsPage(apiContext)
        this.followingPage = new ApiFollowingPage(apiContext)
        this.clientSettingsPage = new ApiClientSettingsPage(apiContext)
        this.selaryRulesPage = new ApiSalaryRulesPage(apiContext)
        this.moderatorPage = new ApiModeratorPage(apiContext)
        this.referalPage = new ApiReferalPage(apiContext)
        this.moderationsPage = new ApiModerationsPage(apiContext)
        this.reportPage = new ApiReportsPage(apiContext)
        this.notificationsContentPage = new ApiNotificationsContentPage(apiContext)
        this.internalPage = new ApiInternalPage(apiContext)
    }
}
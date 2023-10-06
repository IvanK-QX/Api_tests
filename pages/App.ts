import { Page } from "@playwright/test"
import { AppLoginPage } from "./appPage/login_page"
import { AppSidePanelPage } from "./appPage/sidePanel_page"
import { AppPreStreamPage } from "./appPage/preStream_page"
import { AppMainPage } from "./appPage/main_page"
import { AppStreamPage } from "./appPage/stream_page"
import { AppEditProfilePage } from "./appPage/editProfile_page"
export class App {
    page: Page
    loginPage: AppLoginPage
    sidePanelPage: AppSidePanelPage
    preStreamPage: AppPreStreamPage
    mainPage: AppMainPage
    streamPage: AppStreamPage
    ediProfilePage: AppEditProfilePage

    constructor(page: Page) {
        this.page = page
        this.loginPage = new AppLoginPage(this.page)
        this.sidePanelPage = new AppSidePanelPage(this.page)
        this.preStreamPage = new AppPreStreamPage(this.page)
        this.mainPage = new AppMainPage(this.page)
        this.streamPage = new AppStreamPage(this.page)
        this.ediProfilePage = new AppEditProfilePage(this.page)
    }
}
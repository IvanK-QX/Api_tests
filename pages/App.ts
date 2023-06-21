import { Page } from "@playwright/test"
import { AppLoginPage } from "./appPage/login_page"

export class App {
    page: any
    loginPage: AppLoginPage

    constructor(page: Page) {
        this.page = page
        this.loginPage = new AppLoginPage(this.page)
    }
}
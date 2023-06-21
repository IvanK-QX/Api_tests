import { APIRequestContext, expect, request, Page } from "@playwright/test"
import { Api } from "../Api";
import { th } from "@faker-js/faker";

export class AppLoginPage {
    apiContext: any
    page: Page

    constructor(page: Page) {
        this.page = page 
    }

    async apiLogin(url: string, deviceId: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const api = new Api(apiContext)
        const login = await api.loginPage.login(url)
        const user = await api.loginPage.addEmail(url, login.token, deviceId)
        this.page.addInitScript(value => {
            window.localStorage.setItem('token', value)
          }, `"${user.userToken}"`);
          this.page.addInitScript(value => {
            window.localStorage.setItem('isAuthorized', value)
          }, "true");

        await this.page.goto('https://webclient.streamsqa.com/')
        await this.page.waitForLoadState('networkidle')
        console.log('opened')
        await this.page.pause()

    }

       
}
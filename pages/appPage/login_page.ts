import { request, Page } from "@playwright/test"
import { Api } from "../Api";
import { apiDataSet } from "../../utils/dataSet";

export class AppLoginPage {
    apiContext: any
    page: Page

    constructor(page: Page) {
        this.page = page 
    }

    async apiLogin(url: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const api = new Api(apiContext)
        await this.page.goto('https://webclient.streamsqa.com/')
        await this.page.waitForLoadState('networkidle')
        const login = await api.loginPage.login(`${url}/login`)
        const user = await api.loginPage.addEmail(`${url}/login`, login.token, apiDataSet.deviceUUID)
        this.page.addInitScript(value => {
          window.localStorage.setItem('token', value)
        }, `"${user.userToken}"`);
        this.page.addInitScript(value => {
          window.localStorage.setItem('isAuthorized', value)
        }, "true");
        this.page.addInitScript(value => {
          window.localStorage.setItem('sendTokenToServer', value)
        }, "0");

        await this.page.reload()
        await this.page.waitForLoadState('networkidle')
    }

       
}
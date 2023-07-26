import { APIRequestContext, request, Page } from "@playwright/test"
import { Api } from "../Api";
import { apiDataSet } from "../../utils/dataSet";

export class AppLoginPage {
    apiContext: APIRequestContext
    page: Page

    constructor(page: Page) {
        this.page = page 
    }

    async apiLogin(url: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const api = new Api(apiContext)
        await this.page.goto('https://webclient.streamsqa.com/')
        await this.page.waitForLoadState('networkidle')
        const login = await api.loginPage.login(`${url}:3000/login`)
        const user = await api.loginPage.addEmail(`${url}:3000/login`, login.token, apiDataSet.deviceUUID)
        this.page.addInitScript(value => {
          window.localStorage.setItem('token', value)
        }, `"${user.userToken}"`);
        this.page.addInitScript(value => {
          window.localStorage.setItem('isAuthorized', value)
        }, "true");
        this.page.addInitScript(value => {
          window.localStorage.setItem('sendTokenToServer', value)
        }, "0");
        const userToken = user.userToken
        await this.page.reload()
        await this.page.waitForLoadState('networkidle')
        return { userToken }
    }

       
}
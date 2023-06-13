import { APIRequestContext, expect, request } from "@playwright/test"
import { faker } from '@faker-js/faker';
import { apiUrl } from "../../utils/apiUrl";

export class ApiLoginPage {
    apiContext: any

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }

    async login(url: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            authProvider: "ownDeviceId",
            deviceId: `${faker.string.uuid()}`,
            language: "uk"
        }
        const headers = {
            'packagename': 'com.plamfy',
            'content-type': 'application/json',
            'appversion': '1',
            'os': 'browser'
        }
        const apiRequest = await apiContext.post(url, {data, headers: headers})
        const response = await apiRequest.json()
        expect(apiRequest.ok()).toBeTruthy()
        const token = response.token
        const id = response.profile._id
        expect(response.profile.status).toEqual('Active')
        return { token, id } 
    }

    async addEmail(url: string, token: string, deviceId: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            authProvider:"ownEmail",
            email: `api+${Math.floor(Math.random() * (999999-100000) + 100000)}@unitedtech.ai`,
            password: "123456",
            deviceId: `${faker.string.uuid()}`,
            language: "uk",
            pushToken: "string",
            guestUserToken: `${token}`
        }
        const headers = {
            'packagename': 'com.plamfy',
            'content-type': 'application/json',
            'appversion': '1',
            'os': 'browser'
        }
        const apiRequest = await apiContext.post(url, {data, headers: headers})
        const response = await apiRequest.json()
        expect(apiRequest.ok()).toBeTruthy()
        const email = response.profile.email
        const userToken = response.token
        const id = response.profile._id
        expect(response.profile.status).toEqual('Active')
        return { userToken, email}
    }
}
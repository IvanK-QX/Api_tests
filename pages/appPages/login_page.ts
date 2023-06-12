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
        const query = {authProvider: "ownDeviceId",
        deviceId: `${faker.string.uuid()}`,
        language: "uk"}
        const data = {
            query: query
        }
        const apiRequest = await apiContext.post(url, {data, headers: {
            packagename: 'com.plamfy',
            contentType: 'application/json'
        }})
        const response = await apiRequest.json()
        expect(apiRequest.ok()).toBeTruthy()
        console.log(response)
    }
}
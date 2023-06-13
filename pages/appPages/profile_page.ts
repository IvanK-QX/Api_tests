import { APIRequestContext, expect, request } from "@playwright/test"

export class ApiProfilePage {
    apiContext: any

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }

    async editProfile(url: string, userToken: string, name: string, about: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            name: `${name}`,
            about: `${about}`,
            gender: "iPreferNotToSay"
        }
        const headers = {
            'authorization': `Bearer ${userToken}`,
            'packagename': 'com.plamfy',
            'content-type': 'application/json',
            'appversion': '1',
            'os': 'browser'
        }
        const apiRequest = await apiContext.post(url, {data, headers: headers})
        const response = await apiRequest.json()
        expect(apiRequest.ok()).toBeTruthy()
        const userName = response.name
        const userAbout = response.about
        expect(userName).toEqual(name)
        expect(userAbout).toEqual(about)
        console.log(`Profile has been changed`)
    }

    async getProfile(url: string, userToken: string, userEmail: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const headers = {
            'authorization': `Bearer ${userToken}`,
            'packagename': 'com.plamfy',
            'content-type': 'application/json',
            'appversion': '1',
            'os': 'browser'
        }
        const apiRequest = await apiContext.get(url, {headers: headers})
        const response = await apiRequest.json()
        expect(apiRequest.ok()).toBeTruthy()
        const email = response.email
        expect(email).toEqual(userEmail)
        console.log(`Profile for user: ${userEmail} has been dispalyed`)
    }

}
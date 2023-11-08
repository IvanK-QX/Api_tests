import { APIRequestContext, expect, request } from "@playwright/test"
import { Headers } from "../../utils/headers"

export class AdminPanelPage {
    apiContext: APIRequestContext

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }

    async getModerators(url: string, userToken: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "skip": 0,
            "itemsPerPage": 20
        }
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}:3011/admin/moderators/shift`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const responseJson = await apiRequest.json()
        const role = responseJson.documents[3].rolesGroup
        const name = responseJson.documents[3].about
        expect(role).toEqual('moderator')
        expect(name).toEqual('string')
        console.log(`Moderators list is received`)
    }

    async getModeratorsOnShift(url: string, userToken: string, moderatorId: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {}
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.get(`${url}:3011/admin/moderators/shift/ids`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const responseJson = await apiRequest.json()
        expect(responseJson).toContain(moderatorId)
        console.log(`Moderators on Shift list is received`)
    }

    async getModeratorsOnOtherShift(url: string, userToken: string, moderatorId: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {}
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.get(`${url}:3011/admin/moderators/mp/shift/ids`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const responseJson = await apiRequest.json()
        expect(responseJson).toContain(moderatorId)
        console.log(`Moderators on "Other" Shift list is received`)
    }

    async moderatorOnSafeShiftNotDisplayedInOtherShiftList(url: string, userToken: string, moderatorId: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {}
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.get(`${url}:3011/admin/moderators/mp/shift/ids`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const responseJson = await apiRequest.json()
        expect(responseJson).not.toContain(moderatorId)
        console.log(`Moderators on "Safe" Shift isn't present in "Other" shift list`)
    }

    async startSafeShiftForModerator(url: string, userToken: string, moderatorId: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "moderatorId": `${moderatorId}`,
            "isMpStreams": false
        }
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}:3011/admin/moderators/shift/start`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const responseJson = await apiRequest.json()
        expect(responseJson).toContain(moderatorId)
        console.log(`Moderator Safe Shift has started`)
    }

    async endShiftForModerator(url: string, userToken: string, moderatorId: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "moderatorId": `${moderatorId}`
        }
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}:3011/admin/moderators/shift/end`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const responseJson = await apiRequest.json()
        expect(responseJson).not.toContain(moderatorId)
        console.log(`Moderator Safe Shift has started`)
    }

    async startOtherShiftForModerator(url: string, userToken: string, moderatorId: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "moderatorId": `${moderatorId}`,
            "isMpStreams": true
        }
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}:3011/admin/moderators/shift/start`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const responseJson = await apiRequest.json()
        expect(responseJson).toContain(moderatorId)
        console.log(`Moderator Other Shift has started`)
    }

    


}
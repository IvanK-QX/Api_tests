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

    async getModeratorsOnShift(url: string, userToken: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {}
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.get(`${url}:3011/admin/moderators/shift/ids`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const responseJson = await apiRequest.json()
        console.log(responseJson)
        console.log(`Moderators on Shift list is received`)
    }

    async startShiftForModerator(url: string, userToken: string, moderatorId: string, isMp: boolean) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "moderatorId": `${moderatorId}`,
            "isMpStreams": isMp
        }
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}:3011/admin/moderators/shift/start`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const responseJson = await apiRequest.json()
        expect(responseJson).toContain(moderatorId)
        console.log(`Moderators Shift has started`)
    }

    


}
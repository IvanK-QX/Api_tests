import { APIRequestContext, expect, request } from '@playwright/test'
import { Headers } from '../../utils/headers'
import { AdminPanelPayloads } from './adminPanel3011_payloads'

export class ApiStreamLogsPage {
    apiContext: APIRequestContext

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }

    async screenshotSearch(url: string, userToken: string, searchBy: string, value) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = AdminPanelPayloads.screenshotSearch(searchBy, value)
        // "streamerId": "6516dd395fc36151b18246af",
        // "streamId": "6633761c2690d8629473adef",
        // "moderatorId": 14873,
        // "streamType": "public",
        // "action": "endStream",
        // "humanReadableId": 95639,
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}/moderation/api/screenShots/search`, { data, headers: headers })
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const streamId = response.documents[0].stream.id
        const streamerId = response.documents[0].streamer.id
        const moderatorId = response.documents[0].moderator.id
        const streamType = response.documents[0].stream.type
        const action = response.documents[0].screenshots.action
        const streamerHumanId = response.documents[0].streamer.humanReadableId
        if (searchBy === "streamerId") {expect(streamerId).toEqual(value)}
        if (searchBy === "streamId") {expect(streamId).toEqual(value)}
        if (searchBy === "moderatorId") {expect(moderatorId).toEqual(value)}
        if (searchBy === "streamType") {expect(streamType).toEqual(value)}
        if (searchBy === "action") {expect(action).toEqual(value)}
        if (searchBy === "streamerHumanId") {expect(streamerHumanId).toEqual(value)}
        console.log(`Stream Log is found by filter ${searchBy} = ${value}`)
    }
}

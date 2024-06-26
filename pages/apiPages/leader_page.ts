import { APIRequestContext, expect, request } from '@playwright/test'
import { Headers } from '../../utils/headers'
export class ApiLeadersPage {
    apiContext: APIRequestContext

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }

    async getLeders(url: string, userToken: string, period: 'week' | 'day' | 'month') {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = {
            period: `${period}`,
            itemsPerPage: 100,
            skip: 0,
        }
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}/core/streams/leaderboard`, { data, headers: headers })
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        console.log(response)
        const Top1User = response[0].user._id
        console.log(`Leaders for period: ${period} is dispalyed, top1user : ${Top1User}`)
        return {Top1User}
    }

}

import { APIRequestContext, expect, request } from '@playwright/test'
import { Headers } from '../../utils/headers'
import { apiDataSet } from '../../utils/dataSet'

export class Api3011Page {
    apiContext: APIRequestContext

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }

    async getQueueCount(url: string, userToken: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.get(`${url}:3011/admin/approvalQueue/count`, { headers: headers })
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const count = response.count
        expect(isNaN(count)).toBe(false);
        console.log(`Amount of avatars on review is received`)
    }

    async filterUsersList(url: string, userToken: string, searchBy: string, value, idVer: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = {
            "skip":0,
            "itemsPerPage":10,
            "sortDateDirection":1,
        }
        data[searchBy] = value;
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}:3011/admin/profile/list`, { data, headers: headers })
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const _id = response.documents[0]._id
        expect(_id).toEqual(idVer)
        console.log(`User is found by filter ${searchBy} = ${value}`)
    }

    async filterActionsList(url: string, userToken: string, searchBy1: string, value1, searchBy2: string, value2, idVer: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = {
            "skip":0,
            "itemsPerPage":10,
            "streamerType":"Individual",
            "streamType":"public",
            "reason":"closedCamera/emptyRoom",
            "sortDateDirection":1,
        }
        data[searchBy1] = value1;
        data[searchBy2] = value2;
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}:3011/admin/action/list`, { data, headers: headers })
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const streamId = response.documents[0].streamId
        expect(streamId).toEqual(idVer)
        console.log(`Action is found by reason, streamerType, streamType, action, streamerId filters`)
    }

    async filterPayoutsList(url: string, userToken: string, searchBy1: string, value1, idVer: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = {
            "skip":0,
            "itemsPerPage":40,
            "streamerType":"Individual",
            "status":"pending",
            "sortDateDirection":1}
        data["fromRequestDate"] = apiDataSet.isoDate;
        data["toRequestDate"] = apiDataSet.isoDate;
        data[searchBy1] = value1;
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}:3011/admin/payouts/v2/history`, { data, headers: headers })
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const userId = response.documents[0].userId
        expect(userId).toEqual(idVer)
        console.log(`Payout is found by filter ${searchBy1} = ${value1}`)
    }

    async filterReportsList(url: string, userToken: string, searchBy1: string, value1, idVer: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = {
            "skip":0,
            "itemsPerPage":10,
            "reason":"spam",
            "reportType":"user",
            "reportedUserStatus":"Active",
            "sortDateDirection":1
        }
        data["startDate"] = apiDataSet.isoDate;
        data["endDate"] = apiDataSet.isoDate;
        data[searchBy1] = value1;
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}:3011/admin/reports`, { data, headers: headers })
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const userId = response.documents[0].reportedUserId
        expect(userId).toEqual(idVer)
        console.log(`Report is found by reason, reportType, reportedUserStatus, start/end date and filter ${searchBy1} = ${value1}`)
    }

    async filterStreamersList(url: string, userToken: string, searchBy1: string, value1, dateStart, dateEnd, idVer: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        // const currentDate = new Date()
        // const isoFormattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
        const data = {
            "filters":{
            "streamerType":"Individual",
            },
            "pagination":{"itemsPerPage":40,"skip":0}}
        data.filters["statsStartIncludingDate"] = dateStart
        data.filters["statsEndIncludingDate"] = dateEnd
        data.filters[searchBy1] = value1;
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}:3011/streamersStats`, { data, headers: headers })
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const userId = response.documents[0]._id
        expect(userId).toEqual(idVer)
        console.log(`Streamer is found by streamerType, start/end date and filter ${searchBy1} = ${value1}`)
    }

    async filterAgentsList(url: string, userToken: string, searchBy1: string, value1, dateStart, dateEnd, idVer: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        // const currentDate = new Date()
        // const isoFormattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
        const data = {"filters": {
                },
                    "pagination": {
                        "itemsPerPage":10,
                        "skip":0
                    }}
        data.filters["statsStartIncludingDate"] = dateStart
        data.filters["statsEndIncludingDate"] = dateEnd
        data.filters[searchBy1] = value1;
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}:3011/agentsStats`, { data, headers: headers })
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const userId = response.documents[0]._id
        expect(userId).toEqual(idVer)
        console.log(`Officaial Agent is found by start/end date and filter ${searchBy1} = ${value1}`)
    }


    
}

import { APIRequestContext, expect, request } from '@playwright/test'
import { Headers } from '../../utils/headers'
import { AdminPanelPayloads } from './adminPanel3011_payloads'

export class Api3011Page {
    apiContext: APIRequestContext

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }

    async getQueueCount(url: string, userToken: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.get(`${url}/admin/admin/approvalQueue/count`, { headers: headers })
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const count = response.count
        expect(isNaN(count)).toBe(false);
        console.log(`Amount of avatars on review is received`)
    }

    async filterUsersList(url: string, userToken: string, searchBy: string, value, idVer: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = AdminPanelPayloads.filterUsersList(searchBy, value)
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}/admin/admin/profile/list`, { data, headers: headers })
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const _id = response.documents[0]._id
        expect(_id).toEqual(idVer)
        console.log(`User is found by filter ${searchBy} = ${value}`)
    }

    async filterActionsList(url: string, userToken: string, searchBy1: string, value1, searchBy2: string, value2, idVer: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = AdminPanelPayloads.filterActionsList(searchBy1, value1, searchBy2, value2)
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}/admin/admin/action/list`, { data, headers: headers })
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const streamId = response.documents[0].streamId
        expect(streamId).toEqual(idVer)
        console.log(`Action is found by reason, streamerType, streamType, action, ${searchBy1}, ${searchBy2} filters`)
    }

    async filterPayoutsList(url: string, userToken: string, searchBy1: string, value1, idVer: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = AdminPanelPayloads.filterPayoutsList(searchBy1, value1)
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}/admin/admin/payouts/v2/history`, { data, headers: headers })
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const userId = response.documents[0].userId
        expect(userId).toEqual(idVer)
        console.log(`Payout is found by filter ${searchBy1} = ${value1}`)
    }

    async filterReportsList(url: string, userToken: string, searchBy1: string, value1, idVer: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = AdminPanelPayloads.filterReportsList(searchBy1, value1)
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}/admin/admin/reports`, { data, headers: headers })
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const userId = response.documents[0].reportedUserId
        expect(userId).toEqual(idVer)
        console.log(`Report is found by reason, reportType, reportedUserStatus, start/end date and filter ${searchBy1} = ${value1}`)
    }

    async filterStreamersList(url: string, userToken: string, searchBy1: string, value1, streamerType, idVer: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = AdminPanelPayloads.filterStreamersList(searchBy1, value1, streamerType)
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}/admin/streamersStats`, { data, headers: headers })
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const userId = response.documents[0]._id
        expect(userId).toEqual(idVer)
        console.log(`Streamer is found by streamerType, start/end date and filter ${searchBy1} = ${value1}`)
    }

    async filterAgentsList(url: string, userToken: string, searchBy1: string, value1, dateStart, dateEnd, idVer: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = AdminPanelPayloads.filterAgentsList(searchBy1, value1, dateStart, dateEnd)
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}/admin/agentsStats`, { data, headers: headers })
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const userId = response.documents[0]._id
        expect(userId).toEqual(idVer)
        console.log(`Officaial Agent is found by start/end date and filter ${searchBy1} = ${value1}`)
    }

    async createApprovalRule(url: string, userToken: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = AdminPanelPayloads.approvalRule("isActive", true)
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}/admin/admin/approval/rule`, { data, headers: headers })
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const id = response._id
        console.log(`Rule with id ${id} was successfully created`)
        return { id }
    }

    async updateApprovalRule(url: string, userToken: string, id: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = AdminPanelPayloads.approvalRule("isActive", false)
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.put(`${url}/admin/admin/approval/${id}/rule`, { data, headers: headers })
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const isActive = response.isActive
        const id1 = response._id
        expect(isActive).toEqual(false)
        console.log(`Rule with id ${id} was successfully updated`)
    }

    async getApprovalRule(url: string, userToken: string, id: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = {}
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.get(`${url}/admin/admin/approval`, { data, headers: headers })
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const expectedId = id;
        const foundObject = response.find(obj => obj._id === expectedId);
        expect(foundObject._id).toEqual(id)
        console.log(`Rule with id ${id} is successfully found in all rules`)
    }

    async deleteApprovalRule(url: string, userToken: string, id: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = {}
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.delete(`${url}/admin/admin/approval/${id}/rule`, { data, headers: headers })
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        console.log(`Rule with id ${id} was successfully deleted`)
    }

    async getApprovalRuleAfterDeletion(url: string, userToken: string, id: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = {}
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.get(`${url}/admin/admin/approval`, { data, headers: headers })
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const expectedId = id;
        const foundObject = response.find(obj => obj._id === expectedId);
        expect(foundObject).toEqual(undefined)
        console.log(`Rule with id ${id} is not found in all rules`)
    }
    
}

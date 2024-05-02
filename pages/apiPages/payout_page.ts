import { APIRequestContext, expect, request } from '@playwright/test'
import { Headers } from '../../utils/headers'
import { apiDataSet } from '../../utils/dataSet'

export class ApiPayoutPage {
    apiContext: APIRequestContext

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }

    async addWalletToProfile(url: string, userToken: string, wallet: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = {
            cryptoWallet: `${wallet}`,
        }
        const headers = Headers.userHeader(userToken)
        const apiRequest = await apiContext.post(`${url}/core/profile`, {
            data,
            headers: headers,
        })
        expect(apiRequest.ok()).toBeTruthy()
        console.log(`Wallet was added to Profile`)
    }

    async payoutRequest(url: string, userToken: string, payoutType: string, value1) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = {
            usdAmount: 50,
        }
        data[payoutType] = value1;
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}/core/payouts/request`, {
            data,
            headers: headers,
        })
        expect(apiRequest.ok()).toBeTruthy()
        console.log(`The Request with ${value1} Payoneer Email is sent`)
        return { value1 }
    }

    async getPayoutsHistory(url: string, userToken: string, requestFromUserId: string, payoneerEmail: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = {
            itemsPerPage: 100,
        }
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}/core/payouts/history`, {
            data,
            headers: headers,
        })
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const reternedRequestedUserId = response.payouts[0].userId
        const returnedRequestedPayoneerEmail = response.payouts[0].payoneerEmail
        expect(reternedRequestedUserId).toEqual(requestFromUserId)
        expect(payoneerEmail).toEqual(returnedRequestedPayoneerEmail)
        console.log(`The request from ${requestFromUserId} with ${payoneerEmail} is present`)
    }

    async adminPayoutRequest(url: string, adminToken: string, requestFromUserId: string, payoneerEmail: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = {
            usdAmount: 50,
            payoneerEmail: `${payoneerEmail}`,
            diamondsAmount: 18950,
            userId: `${requestFromUserId}`,
        }
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.post(`${url}/core/admin/payouts/request`, { data, headers: headers })
        expect(apiRequest.ok()).toBeTruthy()
        console.log(`The Request with ${payoneerEmail} Payoneer Email is sent by Admin`)
    }

    async adminPayoutHistory(url: string, adminToken: string, humanReadableId: number, requestFromUserId: string, payoneerEmail: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = {
            skip: 0,
            itemsPerPage: 10,
            userId: `${humanReadableId}`,
        }
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.post(`${url}/admin/admin/payouts/v2/history`, { data, headers: headers })
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const returnedPayoneerEmail = response.documents[0].payoneerEmail
        const returnedUserId = response.documents[0].user._id
        const payoutRequestId = response.documents[0]._id
        expect(payoneerEmail).toEqual(returnedPayoneerEmail)
        expect(requestFromUserId).toEqual(returnedUserId)
        console.log(`The Request with ${payoneerEmail} Pauout type from ${humanReadableId} is present`)
        return { payoutRequestId }
    }

    async adminSetPayoutStatus(url: string, adminToken: string, requestedId: string, payoutStatus: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = {
            ids: [`${requestedId}`],
            status: `${payoutStatus}`,
        }
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.post(`${url}/core/payouts/status`, {
            data,
            headers: headers,
        })
        expect(apiRequest.ok()).toBeTruthy()
        console.log(`The Payout Status is changed to ${payoutStatus}`)
    }
}

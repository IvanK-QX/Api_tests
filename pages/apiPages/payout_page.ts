import { APIRequestContext, expect, request } from "@playwright/test"
import { Headers } from "../../utils/headers"
import { apiDataSet } from "../../utils/dataSet";
import { faker, th, ur } from '@faker-js/faker';
export class ApiPayoutPage {
    apiContext: any

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }
   
    async payoutRequest(url: string, userToken: string, payoneerEmail: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "usdAmount": 50,
            "payoneerEmail": `${payoneerEmail}`
        }
        const headers = Headers.userHeader(userToken)
        
        const apiRequest = await apiContext.post(`${url}/payouts/request`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        console.log(`The Request with ${payoneerEmail} Payoneer Email is sent`)
        
    
    }
    
    async getPayoutsHistory(url: string, userToken: string, requestFromUserId: string, payoneerEmail: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
             "itemsPerPage": 100
        }
        const headers = Headers.userHeader(userToken)
        
        const apiRequest = await apiContext.post(`${url}/payouts/history`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const reternedRequestedUserId = response.payouts[0].userId
        const returnedRequestedPayoneerEmail = response.payouts[0].payoneerEmail
        expect(reternedRequestedUserId).toEqual(requestFromUserId)
        expect(payoneerEmail).toEqual(returnedRequestedPayoneerEmail)
        console.log(`The request from ${requestFromUserId} with ${payoneerEmail} is present`)
    }

    async adminPayoutRequest(url: string, adminToken: string, requestFromUserId: string, payoneerEmail: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "usdAmount": 50,
            "payoneerEmail": `${payoneerEmail}`,
            "diamondsAmount": 18950,
            "userId": `${requestFromUserId}`
          }
        const headers = Headers.userHeader(adminToken)
        
        const apiRequest = await apiContext.post(`${url}/admin/payouts/request`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        console.log(`The Request with ${payoneerEmail} Payoneer Email is sent by Admin`)
        
    
    }

    
    
}
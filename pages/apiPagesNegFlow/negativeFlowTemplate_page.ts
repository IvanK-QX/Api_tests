import { APIRequestContext, expect, request } from "@playwright/test"
import { Headers } from "../../utils/headers";


export class ApiNegativeFlowTemplate {
    apiContext: APIRequestContext

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }

    async negativeFlowTemplate({url, payload, ExpectedStatusCode, ExpectedErrorMessage, testSuiteName, testName, token = ""}: {
            url: string, payload: object, ExpectedStatusCode: number, ExpectedErrorMessage: string, testSuiteName: string, testName: string, token?: string,}){
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = payload
        const headers = { ...Headers.guestHeader(), ...(token && { authorization: `Bearer ${token}` }) } //Add Token if it's available 
        const apiRequest = await apiContext.post(url, {data, headers: headers})
        const response = await apiRequest.text()
        const actualStatusCode = apiRequest.status()
        const testStatus = actualStatusCode === ExpectedStatusCode
        console.log(`The test ${testSuiteName} -> ${testName} ${testStatus ? 'passed' : 'failed'}`);  //display the Test Suite and Case Name of the Passed/Failed Test
        expect(actualStatusCode).toBe(ExpectedStatusCode);  //Check the Status Code 
        expect(response).toContain(ExpectedErrorMessage);  //Check the Returned Error Message 
    }

}
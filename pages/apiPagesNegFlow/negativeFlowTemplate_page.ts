/* eslint-disable @typescript-eslint/no-explicit-any */
import { APIRequestContext, expect, request } from '@playwright/test'
import { Headers } from '../../utils/headers'
import { PrintedData } from '../../utils/loops'
import { test } from "@playwright/test";
import { Api } from '../Api';

export class ApiNegativeFlowTemplate {
    apiContext: APIRequestContext

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }

    async negativeFlowTemplate({
        url,
        payload,
        ExpectedStatusCode,
        ExpectedErrorMessage,
        testSuiteName,
        testName,
        token = '',
    }: {
        url: string
        payload: object
        ExpectedStatusCode: number
        ExpectedErrorMessage: string
        testSuiteName: string
        testName: string
        token?: string
    }) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = payload
        //console.log(data)     //Need for debug
        const headers = {
            ...Headers.guestHeader(),
            ...(token && { authorization: `Bearer ${token}` }),
        } //Add Token if it's available
        //console.log(headers)     //Need for debug
        const apiRequest = await apiContext.post(url, { data, headers: headers })
        const response = await apiRequest.text()
        // console.log(response)     //Need for debug 
        const actualStatusCode = apiRequest.status()
        const testStatus = actualStatusCode === ExpectedStatusCode
        console.log(`The test ${testSuiteName} -> ${testName} ${testStatus ? 'passed' : 'failed'}`) //display the Test Suite and Case Name of the Passed/Failed Test
        PrintedData.negativeFlowLoop(actualStatusCode, ExpectedStatusCode, url, data, response)
        expect(actualStatusCode).toBe(ExpectedStatusCode) //Check the Status Code
        expect(response).toContain(ExpectedErrorMessage) //Check the Returned Error Message
    }
}

//Update Value in the Test Case 
export function updateValueInTestCase(testCases: object[], key: string, value: string | number, updateToValue: string): void {
    testCases.forEach(testCase => {
        if (key in testCase && testCase[key] === value) {
            testCase[key] = updateToValue
        }
    })
}

//Update Value in the Payload
export function updateValueInPayload(testCases: any[], key: string, value: string | number, updateToValue: string | number): void {
    testCases.forEach((testCase) => {
        if (key in testCase.payload && testCase.payload[key] === value) {
            testCase.payload[key] = updateToValue
        }
    })
}

//Update Value in the Array
export function updateValueInArray(testCases: any[], arrayName: string, value: string | number, updateToValue: string | number): void {
    testCases.forEach((testCase) => {
        if ('payload' in testCase && arrayName in testCase.payload && Array.isArray(testCase.payload[arrayName])) {
            const index = testCase.payload[arrayName].indexOf(value)
            if (index !== -1) {
                testCase.payload[arrayName][index] = updateToValue
            }
        }
    })
}

//Update Value in the Object
export function updateValueInObject(testCases: any[], objectName: string, key: string, value: string | number, updateToValue: string | number): void {
    testCases.forEach((testCase) => {
        const object = testCase.payload[objectName]
        if (key in object && object[key] === value) {
            object[key] = updateToValue
        }
    })
}

export function runAllTestCases(testCases: any[]) {
    for (const testCase of testCases) {
        const testSuite = testCase.testSuite
        test(`Test case with payload:` + testSuite + `${testCase.case}`, async () => {
            const apiContext = await request.newContext()
            const api = new Api(apiContext)
            await api.negativeFlowTemplate.negativeFlowTemplate({url: testCase.url, payload: testCase.payload, ExpectedStatusCode: testCase.expectedStatus, ExpectedErrorMessage: testCase.errorMessage, testSuiteName: testCase.testSuite, testName: testCase.case, token: testCase.token,
            })
        })
    }
}

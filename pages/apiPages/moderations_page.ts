import { APIRequestContext, expect, request } from "@playwright/test"
import { Headers } from "../../utils/headers"
import { apiDataSet } from "../../utils/dataSet";
import { ModetarorPayloads } from "./moderator_payloads";

export class ApiModerationsPage {
    apiContext: APIRequestContext

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }

    async getForbiidenWordsList(url: string, adminToken: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.get(`${url}:3000/moderation/forbiidenWords`, {headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        console.log(`The Forbiiden Words List is displayed`)

    }

    async getAbusiveWordsList(url: string, adminToken: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.get(`${url}:3000/moderation/abusiveWords`, {headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        console.log(`The Abusive Words List is displayed`)

    }

    async setForbiddenWord(url: string, adminToken: string, forbiddenWord: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "words": [
                `${forbiddenWord}`
            ]
          }
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.post(`${url}:3000/moderation/forbiidenWords`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const returnedSetForbiidenWord = response[0].text
        const forbiddenWordId = response[0]._id
        expect(forbiddenWord).toEqual(returnedSetForbiidenWord)
        console.log(`The Forbidden Word: ${forbiddenWord} is set`)
        return { forbiddenWordId }

    }

    async setAbusiveWord(url: string, adminToken: string, abusiveWord: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "words": [
                `${abusiveWord}`
            ]
          }
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.post(`${url}:3000/moderation/abusiveWords`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const returnedSetAbusiveWord = response[0].text
        const abusiveWordId = response[0]._id
        expect(abusiveWord).toEqual(returnedSetAbusiveWord)
        console.log(`The Forbidden Word: ${abusiveWord} is set`)
        return { abusiveWordId }

    }

    async forbiddenWordDelete(url: string, adminToken: string, forbiddenWordId: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "ids": [
                `${forbiddenWordId}`
            ]
          }
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.post(`${url}:3000/moderation/forbiidenWords/delete`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        console.log(`The Forbidden Word is Deleted`)
    
    }

    async abusiveWordDelete(url: string, adminToken: string, abusiveWordId: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "ids": [
                `${abusiveWordId}`
            ]
          }
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.post(`${url}:3000/moderation/abusiveWords/delete`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        console.log(`The Abusive Word is Deleted`)
    
    }

    async suspendActionRemove(url: string, adminToken: string, actionId: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "actionId": `${actionId}`
          }
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.post(`${url}:3000/moderation/suspend-action/remove`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const returnedActionId = response.deletedAction._id
        const RemoveStatus = response.success
        expect(actionId).toEqual(returnedActionId)
        expect(RemoveStatus).toEqual(true)
        console.log(`The Action with Id: ${actionId} is Deleted`)
    
    }

    async getUpdatedUsersList(url: string, adminToken: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "itemsPerPage": 10,
            "skip": 0
          }
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.post(`${url}:3000/moderation/updatedUser/list`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        console.log(`The Updated Users List is displayed`)
    
    }

}
import { APIRequestContext, expect, request } from "@playwright/test"
import { Headers } from "../../utils/headers"
const fs = require('fs')

export class ApiProfilePage {
    apiContext: any

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }

    async editProfile(url: string, userToken: string, name: string, about: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "name": `${name}`,
            "about": `${about}`,
            "gender": "iPreferNotToSay"
        }
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(url, {data, headers: headers})
        const response = await apiRequest.json()
        expect(apiRequest.ok()).toBeTruthy()
        const userName = response.name
        const userAbout = response.about
        expect(userName).toEqual(name)
        expect(userAbout).toEqual(about)
        console.log(`Profile has been changed`)
    }

    async getProfile(url: string, userToken: string, userEmail: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.get(url, {headers: headers})
        const response = await apiRequest.json()
        expect(apiRequest.ok()).toBeTruthy()
        const email = response.email
        expect(email).toEqual(userEmail)
        console.log(`Profile for user: ${userEmail} has been dispalyed`)
    }

    async search(url: string, userToken: string, searchText: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "text": `${searchText}`
        }
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(url, {data, headers: headers})
        const response = await apiRequest.json()
        expect(apiRequest.ok()).toBeTruthy()
        const name = response[0].name
        const id = response[0]._id
        expect(name).toEqual(searchText)
        console.log(`User with name: ${searchText} was found`)
        return { id }
    }

    async otherUserProfile(url: string, userToken: string, otherUserId: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "otherUserId": `${otherUserId}`
        }
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(url, {data, headers: headers})
        const response = await apiRequest.json()
        expect(apiRequest.ok()).toBeTruthy()
        const userID = response._id
        expect(userID).toEqual(otherUserId)
        console.log(`Profile with id: ${userID} is displayed`)
    }

    async createFileuplaod(url: string, userToken: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "extension": "jpg",
            "flow": "editProfile",
            "purpose": "avatar",
            "type": "photo"
        }
        const apiRequest = await apiContext.post(url, {data,
            headers: Headers.userHeader(userToken)})
        const response = await apiRequest.json()
        expect(apiRequest.ok()).toBeTruthy()
        const uploadID = response.tempUploadId
        const uploadUrl = response.url
        const uploadKey = Object.values(response.fields)[0]
        const xAmzTagging = Object.values(response.fields)[1]
        const bucket = Object.values(response.fields)[2]
        const xAmzAlgorithm = Object.values(response.fields)[3]
        const xAmzCredential = Object.values(response.fields)[4]
        const xAmzDate = Object.values(response.fields)[5]
        const policy = Object.values(response.fields)[6]
        const xAmzSignature = Object.values(response.fields)[7]
        console.log(response)
        console.log(`URL for upload : ${uploadUrl} is generated`)
        return { uploadID, uploadUrl, uploadKey, xAmzTagging, bucket, xAmzAlgorithm, xAmzCredential, xAmzDate, policy, xAmzSignature}
    }

    async uploadToS3(url: string, uploadKey: any, xAmzTagging: any, bucket: any, xAmzAlgorithm: any, xAmzCredential: any, xAmzDate: any, policy: any, xAmzSignature: any) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const formData = new URLSearchParams()
        formData.append('key', `${uploadKey}`)
        formData.append('x-amz-tagging', `${xAmzTagging}`)
        formData.append('bucket', `${bucket}`)
        formData.append('X-Amz-Algorithm', `${xAmzAlgorithm}`)
        formData.append('X-Amz-Credential', `${xAmzCredential}`)
        formData.append('X-Amz-Date', `${xAmzDate}`)
        formData.append('Policy', `${policy}`)
        formData.append('X-Amz-Signature', `${xAmzSignature}`)
        formData.append('file', '43435')


        const apiRequest = await apiContext.post(url, {
            multipart:{
                key: uploadKey,
                'x-amz-tagging': xAmzTagging,
                bucket: bucket, 
                'X-Amz-Algorithm': xAmzAlgorithm,
                'X-Amz-Credential': xAmzCredential,
                'X-Amz-Date': xAmzDate,
                'Policy': policy, 
                'X-Amz-Signature': xAmzSignature,
                file: fs.ReadStream('./100KB.bin')
            },
        headers: {
            'Content-Type': 'multipart/form-data',

        }})

        
        // const response = await apiRequest.json()
        console.log(apiRequest.status())
        console.log(apiRequest)
        expect(apiRequest.status()).toEqual(204)
        console.log(`file uploaded to s3 bucket`)
    }

}
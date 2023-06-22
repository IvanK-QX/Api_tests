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
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
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
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
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
        console.log(apiRequest.status())
        expect(apiRequest.ok()).toBeTruthy()
        console.log(`file uploaded to s3 bucket`)
    }

    async updateProfileCover(url: string, userToken: string, uploadId: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "avatarPicture": `${uploadId}`,
            "avatarPictureSmall": `${uploadId}`
          }
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(url, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        console.log(response)
        const avatarPicture = response.avatarPicture
        expect(avatarPicture).toEqual(uploadId)
        console.log(`Avatar with id: ${uploadId} is uploaded`)
    }

    async inviteToSteram(url: string, userToken: string, option: boolean) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "allowedInviteToStream": option
          }
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(url, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const allowedInviteToStream = response.allowedInviteToStream
        expect(allowedInviteToStream).toEqual(option)
        console.log(`Invite to stream is: ${option}`)
    }

    async allowedToStartPremium(url: string, adminToken: string, userId: string, option: boolean) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "userId": `${userId}`,
            "allowedToStartPremium": option
          }
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.post(url, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const allowedToStartPremium = response.allowedToStartPremium
        expect(allowedToStartPremium).toEqual(option)
        console.log(`User with id: ${userId} is allowedToStartPremium: ${option}`)
    }

    async addDiamonds(url: string, adminToken: string, userId: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "userId": `${userId}`,
            "diamonds": 100000
          }
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.post(url, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        expect(response.diamondsAllTime).toEqual(110000)
        console.log(`Dimonds ${response.diamondsAllTime} is added for user: ${userId}`)
    }

}
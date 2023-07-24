import { APIRequestContext, expect, request } from "@playwright/test"
import { Headers } from "../../utils/headers"
import { faker } from '@faker-js/faker';
import { apiDataSet } from "../../utils/dataSet";


export class ApiModeratorPage {
    apiContext: APIRequestContext

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }

    async createNewModerator(url: string, adminToken: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const email = apiDataSet.randomEmail
        const data = {
            "authProvider": "ownEmail",
            "role": "admin",
            "email": `${email}`,
            "password": "password"
        }

        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.post(`${url}:3000/admin/profile/create`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const id = response._id
        const rolesGroup = response.rolesGroup
        expect(rolesGroup).toEqual('admin')
        console.log(`Admin with: ${id}, ${email} and "password" is created`)
        return { id, email }
    }

    async moderatorLogin(url: string, guestUserToken: string, email: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "authProvider": "ownEmail",
            "email": `${email}`,
            "password": "password",
            "guestUserToken": `${guestUserToken}`,
            "deviceId": `${faker.string.uuid()}`,
            "language": "uk",
            "version": 1  
        }
        const headers = {
            'packagename': 'com.plamfy',
            'content-type': 'application/json',
            'appversion': '1',
            'os': 'browser'
        }

        const apiRequest = await apiContext.post(`${url}:3000/admin/login`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const id = response.profile._id
        const rolesGroup = response.profile.rolesGroup
        const newAdminToken = response.token
        expect(rolesGroup).toEqual('admin')
        console.log(`Admin with: ${id}, ${email} and "password" is Logged In`)
        return { id, email, newAdminToken }
    }



    async getAdminReferralEarnings(url: string, userToken: string, userId: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "period": "day",
            "userId": `${userId}`
        }
        const headers = Headers.userHeader(userToken)

        const apiRequest = await apiContext.post(`${url}:3000/admin/agent/referalEarnings`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const returnedUserId = response.user._id
        expect(userId).toEqual(returnedUserId)
        console.log(`Correct ${returnedUserId} is displayed`)
    }

    async setAdminProfileStatus(url: string, adminToken: string, referralUserId: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "status": "Blocked",
            "userIds": [
                `${referralUserId}`
            ]
        }
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.post(`${url}:3000/admin/profile/status`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const returnedProfileStatus = response.success
        expect(returnedProfileStatus).toEqual(true)
        console.log(`Correct Profile Status is set`)
    }

    async setAdminProfileAgent(url: string, adminToken: string, userId: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "userId": `${userId}`,
            "isOfficialAgent": true
        }
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.post(`${url}:3000/admin/profile/agent`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const returnedAgentStatus = response.isOfficialAgent
        expect(returnedAgentStatus).toEqual(true)
        console.log(`Correct Agent Status is set`)
    }

    async getAdminApprovalQueueCount(url: string, adminToken: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.get(`${url}:3000/admin/approvalQueue/count`, {headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const approvalQueueCount = response.count
        console.log(`The Approval Queue Count is ${approvalQueueCount}`)
        return approvalQueueCount
    }

    async getAdminAvatarsApprovalQueue(url: string, adminToken: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "paginationToken": "2023-07-24T14:29:33.191Z",
            "itemsPerPage": 1
        }
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.post(`${url}:3000/profile/approvalQueue/list/new`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const avatarId = response.approvalQueue[0]._id
        console.log(`Pending AvatarId is displayed`)
        return { avatarId }
    }

    async adminApproveAvatar(url: string, adminToken: string, pendingAvatarId: string ) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "ids": [
                `${pendingAvatarId}`
            ]
        }
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.post(`${url}:3000/profile/avatar/approve`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const returnedApprovedAvatarId = response[0].id
        const approveStatus = response[0].success.success
        expect(returnedApprovedAvatarId).toEqual(pendingAvatarId)
        expect(approveStatus).toEqual(true)
        console.log(`The Avatar is Approved`)
    }

    async adminDeclineAvatar(url: string, adminToken: string, pendingAvatarId: string ) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "ids": [
                `${pendingAvatarId}`
            ],
            "needBlock": true
        }
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.post(`${url}:3000/profile/avatar/decline`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const returnedDeclinedAvatarId = response[0].id
        const declineStatus = response[0].success
        expect(returnedDeclinedAvatarId).toEqual(pendingAvatarId)
        expect(declineStatus).toEqual(true)
        console.log(`The Avatar is Declined`)
    }

    async getAdminProfileList(url: string, adminToken: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "skip": 0,
            "itemsPerPage": 1
        }
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.post(`${url}:3000/admin/profile/list`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const returnedProfileId = response.documents[0]._id
        console.log(`The List with UserId: ${returnedProfileId} is displayed`)
    }

    async getAdminProfile(url: string, adminToken: string, userId: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "userId": `${userId}`
        }
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.post(`${url}:3000/admin/profile`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const returnedProfileUserId = response._id
        expect(returnedProfileUserId).toEqual(userId)
        console.log(`The Profile with id ${returnedProfileUserId} is displayed`)
        return returnedProfileUserId
    }

    async getAgentProfile(url: string, adminToken: string, userId: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "userId": `${userId}`
        }
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.post(`${url}:3000/agent/profile`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const returnedAgentUserId = response._id
        expect(returnedAgentUserId).toEqual(userId)
        console.log(`The Profile with id ${returnedAgentUserId} is displayed`)
        return returnedAgentUserId
    }

    async AdminProfileUpdate(url: string, adminToken: string, userId: string, action: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const randomPayoneerEmail = apiDataSet.randomEmail
        const randomName = apiDataSet.randomName
        const data = {
            "userId": `${userId}`,
            "action": `${action}`,
            "updateFields": {
              "name": `${randomName}`,
              "status": "Active",
              "payoutEmail": `${randomPayoneerEmail}`,
              "defaultPaymentMethod": "payoneerEmail"
            }
        }
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.post(`${url}:3000/admin/profile/update`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const returnedUpdatedPayoutEmail = response.payoutEmail
        const returnedUpdatedUserName = response.name
        expect(returnedUpdatedPayoutEmail).toEqual(randomPayoneerEmail)
        expect(returnedUpdatedUserName).toEqual(randomName)
        console.log(`The Name: ${randomName} and Email: ${randomPayoneerEmail} of the User: ${userId} are updated`)
    }

    async adminSetPayoutEmail(url: string, adminToken: string, userId: string, payoutEmail: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "userId": `${userId}`,
            "email": `${payoutEmail}`
        }
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.post(`${url}:3000/admin/profile/setPayoutEmail`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const returnedPayoutEmail = response.payoutEmail
        expect(returnedPayoutEmail).toEqual(payoutEmail)
        console.log(`The PayoutEmail is updated to ${returnedPayoutEmail}`)
    }

    async adminModeratorAction(url: string, adminToken: string, streamId: string, reason: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "type": "warning",
            "streamIds": [
                `${streamId}`
            ],
            "reason": `${reason}`
          }
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.post(`${url}:3000/admin/moderator/action`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const returnedStreamId = response[0].streamId
        const returnedReason = response[0].reason
        const returnedActionId = response[0]._id
        expect(returnedStreamId).toEqual(streamId)
        expect(returnedReason).toEqual(reason)
        console.log(`The Action with ${reason} is set`)
        return { returnedActionId }
    }

    async getAdminActionList(url: string, adminToken: string, streamId: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "type": "warning",
            "streamIds": [
                `${streamId}`
            ],
            "skip": 0,
            "itemsPerPage": 10
        }
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.post(`${url}:3000/admin/action/list`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const returnedStreamId = response.documents[0].streamId
        expect(returnedStreamId).toEqual(streamId)
        console.log(`The correct StreamId: ${returnedStreamId} is displayed`)
    }

    async adminTimerStop(url: string, adminToken: string, actionId: string) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const data = {
            "actionId": `${actionId}`
          }
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.post(`${url}:3000/admin/timer/stop`, {data, headers: headers})
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const returnedActionId = response._id
        expect(returnedActionId).toEqual(actionId)
        console.log(`The Timer fo the ${returnedActionId} Action is stopped`)
    }





    





}
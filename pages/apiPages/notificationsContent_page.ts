import { APIRequestContext, expect, request } from '@playwright/test'
import { Headers } from '../../utils/headers'
import { NotificationsContentPayloads } from './notificationsContent_payloads'
import { apiDataSet } from '../../utils/dataSet'
export class ApiNotificationsContentPage {
    apiContext: APIRequestContext

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext
    }

    async notificationsContentCreate(url: string, adminToken: string, contentTitle: string, contentText: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = NotificationsContentPayloads.notificationsContentCreate(contentTitle, contentText)
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.post(`${url}/core/admin/notificationsContent/create`, { data, headers: headers })
        expect(apiRequest.ok()).toBeTruthy()
        const response = await apiRequest.json()
        const createdNotificationTitle = response.resultId.title
        const createdNotificationText = response.resultId.text
        const notificationContentId = response.resultId._id
        expect(createdNotificationTitle).toEqual(contentTitle)
        expect(createdNotificationText).toEqual(contentText)
        console.log(`The Notification Content with ${contentTitle} and ${contentText} is created`)
        return { notificationContentId }
    }

    async notificationsContentUpdate(url: string, adminToken: string, notificationContentId: string, contentTitle: string, contentText: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = NotificationsContentPayloads.notificationsContentUpdate(notificationContentId, contentTitle, contentText)
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.post(`${url}/core/admin/notificationsContent/update`, { data, headers: headers })
        expect(apiRequest.ok()).toBeTruthy()
    }

    async notificationsContentDelete(url: string, adminToken: string, notificationContentId: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const data = {
            id: `${notificationContentId}`,
        }
        const headers = Headers.userHeader(adminToken)

        const apiRequest = await apiContext.post(`${url}/core/admin/notificationsContent/delete`, { data, headers: headers })
        expect(apiRequest.ok()).toBeTruthy()
    }

    async sendMassNotification(url: string, adminToken: string) {
        const apiContext = await request.newContext({ ignoreHTTPSErrors: true })
        const date = new Date().toISOString()
        const formattedDate = date.substring(0, 10)
        const data = {
            "task": "weekly-contests-finished",
            "params": {
              "date": `${formattedDate}`,
              "1_streamer_name": "Bright1, ID 10001",
              "2_streamer_name": "Bright2, ID 10002",
              "3_streamer_name": "Bright3, ID 10003",
              "4_streamer_name": "Bright4, ID 10004",
              "5_streamer_name": "Bright5, ID 10005"
            }
        }
        const headers = Headers.userHeader(adminToken)
        const apiRequest = await apiContext.post(`${url}/schedule/internal/cron`, { data, headers: headers })
        expect(apiRequest.ok()).toBeTruthy()
        console.log(`Mass Message successfully sent`)
    }
}

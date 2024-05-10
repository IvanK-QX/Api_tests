import { request, test } from '@playwright/test'
import { apiUrl } from '../../../utils/apiUrl'
import { Api } from '../../../pages/Api'

let admin

test.describe('Moderation service API test', async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        admin = await api.loginPage.loginWithAdminUser(apiUrl.qaEnvUrl)
    })

    test('Stream Logs page', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.streamLogsPage.screenshotSearch(apiUrl.qaEnvUrl, admin.adminToken, "streamId", "6633761c2690d8629473adef")
        await api.streamLogsPage.screenshotSearch(apiUrl.qaEnvUrl, admin.adminToken, "streamerId", "6516dd395fc36151b18246af")
        await api.streamLogsPage.screenshotSearch(apiUrl.qaEnvUrl, admin.adminToken, "moderatorId", "64b7cda846c38cbafbc6b19f")
        await api.streamLogsPage.screenshotSearch(apiUrl.qaEnvUrl, admin.adminToken, "streamType", "public")
        await api.streamLogsPage.screenshotSearch(apiUrl.qaEnvUrl, admin.adminToken, "action", "endStream")
        await api.streamLogsPage.screenshotSearch(apiUrl.qaEnvUrl, admin.adminToken, "reason", "adultContent")
        await api.streamLogsPage.screenshotSearch(apiUrl.qaEnvUrl, admin.adminToken, "humanReadableId", 95639)
    })
})

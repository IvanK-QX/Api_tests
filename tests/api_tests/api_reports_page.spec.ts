import { request, test } from "@playwright/test";
import { apiUrl } from "../../utils/apiUrl";
import { Api } from "../../pages/Api";

let user1, user2, admin

test.describe('Payouts API test ',async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user1 = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        user2 = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        admin = await api.loginPage.loginWithAdminUser(apiUrl.qaEnvUrl)
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user1.userToken)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user2.userToken)
    })

    test('Report Spam and Report Status',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.reportPage.reportUser(apiUrl.qaEnvUrl, user1.userToken, 'spam', user2.id)
        const report = await api.reportPage.adminReport(apiUrl.qaEnvUrl, admin.adminToken, 'spam', user2.humanReadableId)
        await api.reportPage.reportStatus(apiUrl.qaEnvUrl, admin.adminToken, report.reportId)
    })

    test('Report Other',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.reportPage.reportUser(apiUrl.qaEnvUrl, user1.userToken, "other", user2.id)
        await api.reportPage.adminReport(apiUrl.qaEnvUrl, admin.adminToken, "other", user2.humanReadableId)
    })

    test('Report streamerUnder17',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.reportPage.reportUser(apiUrl.qaEnvUrl, user1.userToken, 'streamerUnder17', user2.id)
        await api.reportPage.adminReport(apiUrl.qaEnvUrl, admin.adminToken, 'streamerUnder17', user2.humanReadableId)
    })

    test('Report sharingPrivateInformation',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.reportPage.reportUser(apiUrl.qaEnvUrl, user1.userToken, 'sharingPrivateInformation', user2.id)
        await api.reportPage.adminReport(apiUrl.qaEnvUrl, admin.adminToken, 'sharingPrivateInformation', user2.humanReadableId)
    })

    test('Report sexualContent',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.reportPage.reportUser(apiUrl.qaEnvUrl, user1.userToken, 'sexualContent', user2.id)
        await api.reportPage.adminReport(apiUrl.qaEnvUrl, admin.adminToken, 'sexualContent', user2.humanReadableId)
    })

    test('Report nudity',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.reportPage.reportUser(apiUrl.qaEnvUrl, user1.userToken, 'nudity', user2.id)
        await api.reportPage.adminReport(apiUrl.qaEnvUrl, admin.adminToken, 'nudity', user2.humanReadableId)
    })

    test('Report harassmentHatefulSpeechBullying',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.reportPage.reportUser(apiUrl.qaEnvUrl, user1.userToken, 'harassmentHatefulSpeechBullying', user2.id)
        await api.reportPage.adminReport(apiUrl.qaEnvUrl, admin.adminToken, 'harassmentHatefulSpeechBullying', user2.humanReadableId)
    })

    test('Report drugsAlcoholSmoking',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.reportPage.reportUser(apiUrl.qaEnvUrl, user1.userToken, 'drugsAlcoholSmoking', user2.id)
        await api.reportPage.adminReport(apiUrl.qaEnvUrl, admin.adminToken, 'drugsAlcoholSmoking', user2.humanReadableId)
    })

    test('Report displayOfCriminalActivitiesOrWeapon',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.reportPage.reportUser(apiUrl.qaEnvUrl, user1.userToken, 'displayOfCriminalActivitiesOrWeapon', user2.id)
        await api.reportPage.adminReport(apiUrl.qaEnvUrl, admin.adminToken, 'displayOfCriminalActivitiesOrWeapon', user2.humanReadableId)
    })

})
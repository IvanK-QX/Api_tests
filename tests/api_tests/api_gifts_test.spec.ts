import { request, test } from "@playwright/test";
import { apiUrl } from "../../utils/apiUrl";
import { Api } from "../../pages/Api";
import { apiDataSet } from "../../utils/dataSet";

let user, user2, gift

test.describe('API Gift Tests with Two user', async () => {
    test.beforeEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        user2 = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
    })

    test.afterEach(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user2.userToken)
    })

    test('Get gift list', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.giftsPage.getGiftsAll(apiUrl.qaEnvUrl, user.userToken)
        await api.giftsPage.getGifts(apiUrl.qaEnvUrl, user.userToken)
    })
    
    test.skip('Sent Gift', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        gift = await api.giftsPage.getGifts(apiUrl.qaEnvUrl, user.userToken)
        const stream = await api.streamsPage.createStream(apiUrl.qaEnvUrl, user2.userToken, 'public', apiDataSet.streamTitle)
        await api.giftsPage.sendGift(apiUrl.qaEnvUrl, user.userToken, gift.giftIdOne, user2.id, stream.myChatId, stream.myStreamId)
        await api.giftsPage.myGiftListSend(apiUrl.qaEnvUrl, user.userToken, gift.giftIdOne)
    })

    test('Get gift reccomendation and premium', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.giftsPage.getGiftsRecommendation(apiUrl.qaEnvUrl, user.userToken)
        await api.giftsPage.getGiftsPremium(apiUrl.qaEnvUrl, user.userToken)
    })

    test('My top/stream gifters', async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        gift = await api.giftsPage.getGifts(apiUrl.qaEnvUrl, user.userToken)
        const stream = await api.streamsPage.createStream(apiUrl.qaEnvUrl, user.userToken, 'public', apiDataSet.streamTitle)
        await api.giftsPage.myTopGifters(apiUrl.qaEnvUrl, user.userToken, stream.myStreamerId)
        await api.giftsPage.stremTopGifters(apiUrl.qaEnvUrl, user.userToken, stream.myStreamId)
    })

})


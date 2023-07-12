import { request, test } from "@playwright/test";
import { Api } from "../pages/Api";
import { apiUrl } from "../utils/apiUrl";
import { apiDataSet } from "../utils/dataSet";

let user, user2, gift

test.describe('API Gift Tests with Two user',async () => {
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

    test('Get gift list',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.giftsPage.getGiftsAll(apiUrl.qaEnvUrl, user.userToken)
        await api.giftsPage.getGifts(apiUrl.qaEnvUrl, user.userToken)
    })

    test('Sent and Receive Gift',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        gift = await api.giftsPage.getGifts(apiUrl.qaEnvUrl, user.userToken)
        const stream = await api.streamsPage.createStream(apiUrl.qaEnvUrl, user2.userToken, 'public', apiDataSet.streamTitle)
        await api.giftsPage.sendGift(apiUrl.qaEnvUrl, user.userToken, gift.giftIdOne, user2.id, stream.myChatId, stream.myStreamId)
        await api.giftsPage.myGiftListSend(apiUrl.qaEnvUrl, user.userToken, gift.giftIdOne)
        const stream2 = await api.streamsPage.createStream(apiUrl.qaEnvUrl, user.userToken, 'public', apiDataSet.streamTitle)
        await api.giftsPage.sendGift(apiUrl.qaEnvUrl, user2.userToken, gift.giftIdTwo, user.id, stream2.myChatId, stream2.myStreamId)
        await api.giftsPage.myGiftListReceived(apiUrl.qaEnvUrl, user.userToken, gift.giftIdTwo)
    })

    test('Get gift reccomendation and premium',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.giftsPage.getGiftsRecommendation(apiUrl.qaEnvUrl, user.userToken)
        await api.giftsPage.getGiftsPremium(apiUrl.qaEnvUrl, user.userToken)
    })

    test('My top/stream gifters',async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        gift = await api.giftsPage.getGifts(apiUrl.qaEnvUrl, user.userToken)
        const stream = await api.streamsPage.createStream(apiUrl.qaEnvUrl, user.userToken, 'public', apiDataSet.streamTitle)
        await api.giftsPage.myTopGifters(apiUrl.qaEnvUrl, user.userToken, stream.myStreamerId)
        // waiting for fix PB-1456 
        // await api.giftsPage.stremTopGifters(apiUrl.qaEnvUrl, user.userToken, stream.myStreamId)
    })

})


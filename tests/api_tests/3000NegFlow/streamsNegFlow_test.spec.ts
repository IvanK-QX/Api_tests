import { request, test } from "@playwright/test";
import { apiUrl } from "../../../utils/apiUrl";
import { Api } from "../../../pages/Api";
import { streamsDesiredGiftDeleteTestCases, streamsDesiredGiftTestCases, streamsGetByStreamerTestCases, streamsListTestCases, streamsReferalEarningsTestCases, streamsStatusUpdateTestCases, stremsCreateTestCases, stremsGetTestCases, stremsRankTestCases, stremsSendInviteTestCases, stremsStopTestCases, stremsUpdateTestCases, stremsWatchersTestCases } from "../../../pages/apiPagesNegFlow/streamsNegFlow_payload";
import { runAllTestCases, updateValueInPayload, updateValueInTestCase } from "../../../pages/apiPagesNegFlow/negativeFlowTemplate_page";
import { apiDataSet } from "../../../utils/dataSet";


let user, stream, gift

test.describe.only('Profile Negative Flow', async () => {
    test.beforeAll(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
        stream = await api.streamsPage.createStream(apiUrl.qaEnvUrl, user.userToken, 'public', apiDataSet.streamTitle)
        gift = await api.giftsPage.getGifts(apiUrl.qaEnvUrl, user.userToken)

        //Add Token to Payloads 
        updateValueInTestCase(streamsListTestCases, 'token', 'token', user.userToken); 
        updateValueInTestCase(stremsCreateTestCases, 'token', 'token', user.userToken); 
        updateValueInTestCase(stremsSendInviteTestCases, 'token', 'token', user.userToken);
        updateValueInTestCase(stremsUpdateTestCases, 'token', 'token', user.userToken);
        updateValueInTestCase(stremsGetTestCases, 'token', 'token', user.userToken);
        updateValueInTestCase(stremsStopTestCases, 'token', 'token', user.userToken);
        updateValueInTestCase(stremsWatchersTestCases, 'token', 'token', user.userToken);
        updateValueInTestCase(stremsRankTestCases, 'token', 'token', user.userToken);
        updateValueInTestCase(streamsDesiredGiftTestCases, 'token', 'token', user.userToken);
        updateValueInTestCase(streamsDesiredGiftDeleteTestCases, 'token', 'token', user.userToken);
        updateValueInTestCase(streamsStatusUpdateTestCases, 'token', 'token', user.userToken);
        updateValueInTestCase(streamsGetByStreamerTestCases, 'token', 'token', user.userToken);
        updateValueInTestCase(streamsReferalEarningsTestCases, 'token', 'token', user.userToken);

        updateValueInPayload(stremsSendInviteTestCases, 'streamId', 'defaultStreamId', stream.myStreamId)
        updateValueInPayload(stremsUpdateTestCases, 'streamId', 'defaultStreamId', stream.myStreamId)
        updateValueInPayload(streamsDesiredGiftTestCases, 'streamId', 'defaultStreamId', stream.myStreamId)
        updateValueInPayload(streamsDesiredGiftTestCases, 'giftId', 'defaultGiftId', gift.giftIdOne)
        updateValueInPayload(streamsStatusUpdateTestCases, 'streamId', 'defaultStreamId', stream.myStreamId)

    })

    test.afterAll(async () => {
        const apiContext = await request.newContext()
        const api = new Api(apiContext)
        await api.deleteAccountPage.deleteAccount(apiUrl.qaEnvUrl, user.userToken)
    })

    //Streams List Negative Flow
    runAllTestCases(streamsListTestCases)

    //Streams Ctreate Negative Flow
    runAllTestCases(stremsCreateTestCases)

    //Streams Get Negative Flow
    runAllTestCases(stremsSendInviteTestCases)

    //Streams Get Negative Flow
    runAllTestCases(stremsGetTestCases)

    //Streams Update Negative Flow
    runAllTestCases(stremsUpdateTestCases)

    //Streams Stop Negative Flow
    runAllTestCases(stremsStopTestCases)

    //Streams Watchers Negative Flow
    runAllTestCases(stremsWatchersTestCases)

    //Streams Rank Negative Flow
    runAllTestCases(stremsRankTestCases)

    //Streams Add Desired Gift Negative Flow
    runAllTestCases(streamsDesiredGiftTestCases)

    //Streams Add Desired Gift Delete Negative Flow
    runAllTestCases(streamsDesiredGiftDeleteTestCases)

    //Streams Status Update Negative Flow
    runAllTestCases(streamsStatusUpdateTestCases)

    //Streams Bet By Streamer Negative Flow
    runAllTestCases(streamsGetByStreamerTestCases)

    //Streams Referal Earnings Negative Flow
    runAllTestCases(streamsReferalEarningsTestCases)   
})
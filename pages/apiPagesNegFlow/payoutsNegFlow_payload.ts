import { apiUrl } from '../../utils/apiUrl'

const payoutRequestUrl = `${apiUrl.qaEnvUrl}:3000/payouts/request`
const payoutsHistoryUrl = `${apiUrl.qaEnvUrl}:3000/payouts/history`
const adminPayoutRequestUrl = `${apiUrl.qaEnvUrl}:3000/admin/payouts/request`
const adminPayoutHistoryUrl = `${apiUrl.qaEnvUrl}:3011/admin/payouts/v2/history`


export const payoutRequestTestCases = [
    {
        url: payoutRequestUrl,
        token: 'token',
        payload: {
            "usdAmount": "_",
            "payoneerEmail": "test2@test.com"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Payout Request',
        case: 'wrongUsdAmount',
    },
    {
        url: payoutRequestUrl,
        token: 'token',
        payload: {
            "payoneerEmail": "test2@test.com"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Payout Request',
        case: 'missedUsdAmount',
    }
]

export const payoutsHistoryTestCases = [
    {
        url: payoutsHistoryUrl,
        token: 'token',
        payload: {
            "itemsPerPage": "_"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Payouts History',
        case: 'wrongItemsPerPage',
    },
    {
        url: payoutsHistoryUrl,
        token: 'token',
        payload: {},
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Payouts History',
        case: 'missedItemsPerPage',
    }
]

export const adminPayoutRequestTestCases = [
    {
        url: adminPayoutRequestUrl,
        token: 'token',
        payload: {
            "usdAmount": "_",
            "payoneerEmail": "test@test.com",
            "diamondsAmount": 18950,
            "userId": "defaultUserId"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Admin Payout Request',
        case: 'wrongUsdAmount',
    },
    {
        url: adminPayoutRequestUrl,
        token: 'token',
        payload: {
            "usdAmount": "_",
            "payoneerEmail": "test@test.com",
            "userId": "defaultUserId"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Admin Payout Request',
        case: 'missedDiamondsAmount',
    },
    {
        url: adminPayoutRequestUrl,
        token: 'token',
        payload: {
            "usdAmount": "_",
            "payoneerEmail": "test@test.com",
            "diamondsAmount": 18950,
            "userId": 123
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Admin Payout Request',
        case: 'wrongUserId',
    },
    {
        url: adminPayoutRequestUrl,
        token: 'token',
        payload: {
            "usdAmount": "_",
            "payoneerEmail": "test@test.com",
            "diamondsAmount": 18950
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Admin Payout Request',
        case: 'missedUserId',
    }
]

export const adminPayoutHistoryTestCases = [
    {
        url: adminPayoutHistoryUrl,
        token: 'token',
        payload: {
            "skip":"_",
            "itemsPerPage":40,
            "fromRequestDate":"2023-06-14T08:53:21.224Z",
            "toRequestDate":"2023-07-13T08:53:21.226Z",
            "sortDateDirection":1
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Admin Payout History',
        case: 'wrongSkip',
    },
    {
        url: adminPayoutHistoryUrl,
        token: 'token',
        payload: {
            "itemsPerPage":40,
            "fromRequestDate":"2023-06-14T08:53:21.224Z",
            "toRequestDate":"2023-07-13T08:53:21.226Z",
            "sortDateDirection":1
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Admin Payout History',
        case: 'missedSkip',
    },
    {
        url: adminPayoutHistoryUrl,
        token: 'token',
        payload: {
            "skip":0,
            "itemsPerPage": "_",
            "fromRequestDate":"2023-06-14T08:53:21.224Z",
            "toRequestDate":"2023-07-13T08:53:21.226Z",
            "sortDateDirection":1
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Admin Payout History',
        case: 'wrongItemsPerPage',
    },
    {
        url: adminPayoutHistoryUrl,
        token: 'token',
        payload: {
            "skip":0,
            "fromRequestDate":"2023-06-14T08:53:21.224Z",
            "toRequestDate":"2023-07-13T08:53:21.226Z",
            "sortDateDirection":1
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Admin Payout History',
        case: 'missedItemsPerPage',
    },
    {
        url: adminPayoutHistoryUrl,
        token: 'token',
        payload: {
            "skip":0,
            "itemsPerPage": 40,
            "fromRequestDate":"2023-06-14T08:53:21.224Z",
            "toRequestDate":"2023-07-13T08:53:21.226Z",
            "sortDateDirection": "_"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Admin Payout History',
        case: 'wrongSortDateDirection',
    }
]
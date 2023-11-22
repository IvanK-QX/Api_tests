import { apiUrl } from '../../utils/apiUrl'
import { apiDataSet } from '../../utils/dataSet'

const adminProfileCreateUrl = `${apiUrl.qaEnvUrl}:3000/admin/profile/create`
const adminReferralEarningsUrl = `${apiUrl.qaEnvUrl}:3000/admin/agent/referalEarnings`
const adminProfileStatusUrl = `${apiUrl.qaEnvUrl}:3000/admin/profile/status`

export const moderatorProfileCreateTestCases = [
    {
        url: adminProfileCreateUrl,
        token: 'token',
        payload: {
            authProvider: 'phone',
            role: 'admin',
            email: apiDataSet.randomEmail,
            password: apiDataSet.password,
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Admin Create',
        case: 'wrongAuthProvider',
    },
    {
        url: adminProfileCreateUrl,
        token: 'token',
        payload: {
            authProvider: 'ownEmail',
            role: 'user',
            email: apiDataSet.randomEmail,
            password: apiDataSet.password,
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Admin Create',
        case: 'wrongRole',
    },
    {
        url: adminProfileCreateUrl,
        token: 'token',
        payload: {
            authProvider: 'ownEmail',
            role: 'admin',
            password: apiDataSet.password,
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Admin Create',
        case: 'missedEmail',
    },
    {
        url: adminProfileCreateUrl,
        token: 'token',
        payload: {
            authProvider: 'ownEmail',
            role: 'admin',
            email: apiDataSet.randomEmail,
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Admin Create',
        case: 'missedPassword',
    },
]

export const moderatorRefferalEarningsTestCases = [
    {
        url: adminReferralEarningsUrl,
        token: 'token',
        payload: {
            userId: 'defaultUserId',
            endDate: apiDataSet.isoDate,
        },
        expectedStatus: 500,
        errorMessage: 'Cannot read properties of undefined',
        testSuite: 'Admin Referal Earnings',
        case: 'missedStartDate',
    },
    {
        url: adminReferralEarningsUrl,
        token: 'token',
        payload: {
            userId: 'defaultUserId',
            startDate: apiDataSet.isoDate,
        },
        expectedStatus: 500,
        errorMessage: 'Cannot read properties of undefined',
        testSuite: 'Admin Referal Earnings',
        case: 'missedEndtDate',
    },
    {
        url: adminReferralEarningsUrl,
        token: 'token',
        payload: {
            startDate: apiDataSet.isoDate,
            endDate: apiDataSet.isoDate,
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Admin Referal Earnings',
        case: 'missedUserId',
    },
    {
        url: adminReferralEarningsUrl,
        token: 'token',
        payload: {
            userId: '_',
            startDate: apiDataSet.isoDate,
            endDate: apiDataSet.isoDate,
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Admin Referal Earnings',
        case: 'wrongUserId',
    },
]

export const adminProfileStatusTestCases = [
    {
        url: adminProfileStatusUrl,
        token: 'token',
        payload: {
            userIds: ['referralUserId'],
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Admin Profile Status',
        case: 'missedStatus',
    },
    {
        url: adminProfileStatusUrl,
        token: 'token',
        payload: {
            status: '_',
            userIds: ['referralUserId'],
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Admin Profile Status',
        case: 'wrongStatus',
    },
    {
        url: adminProfileStatusUrl,
        token: 'token',
        payload: {
            status: 'Active',
            userIds: ['wrongUserId'],
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Admin Profile Status',
        case: 'wrongUserId',
    },
    {
        url: adminProfileStatusUrl,
        token: 'token',
        payload: {
            status: 'Active',
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Admin Profile Status',
        case: 'missedUserIds',
    },
]

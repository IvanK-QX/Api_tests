import { apiUrl } from '../../utils/apiUrl'

const referralSetUrl = `${apiUrl.qaEnvUrl}/core/referal/user/set`
const referralStatisticsUrl = `${apiUrl.qaEnvUrl}/core/referal/users/statistics`


export const referralSetTestCases = [
    {
        url: referralSetUrl,
        token: 'token',
        payload: {
            "userId": "_",
            "referringUserId": "defaultUserId"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Referral Set',
        case: 'wrongUserId'
    },
    {
        url: referralSetUrl,
        token: 'token',
        payload: {
            "referringUserId": "defaultUserId"
        },
        expectedStatus: 418,
        errorMessage: 'FORBIDDEN',
        testSuite: 'Referral Set',
        case: 'missedUserId'
    },
    {
        url: referralSetUrl,
        token: 'token',
        payload: {
            "userId": "defaultUserId",
            "referringUserId": ")"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Referral Set',
        case: 'wrongReferringUserId'
    }
]

export const referralStatisticsTestCases = [
    {
        url: referralStatisticsUrl,
        token: 'token',
        payload: {
            "period": "_"
          },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Referral Statistics',
        case: 'wrongPeriod'
    }
]
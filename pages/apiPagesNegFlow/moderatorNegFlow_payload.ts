import { apiUrl } from "../../utils/apiUrl"
import { apiDataSet } from "../../utils/dataSet"

const adminProfileCreateUrl = `${apiUrl.qaEnvUrl}:3000/admin/profile/create`
const adminReferralEarningsUrl = `${apiUrl.qaEnvUrl}:3000/admin/agent/referalEarnings`

export const moderatorProfileCreateTestCases = [
    { 
        url: adminProfileCreateUrl,
        token: null,
        payload: {
            "authProvider": "phone",
            "role": "admin",
            "email": apiDataSet.randomEmail,
            "password": apiDataSet.password
        }, 
        expectedStatus: 400,
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Create",
        case: "wrongAuthProvider" 
    },
    { 
        url: adminProfileCreateUrl,
        token: null,
        payload: {
            "authProvider": "ownEmail",
            "role": "user",
            "email": apiDataSet.randomEmail,
            "password": apiDataSet.password
        }, 
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Create",
        case: "wrongRole" 
    },
    { 
        url: adminProfileCreateUrl,
        token: null,
        payload: {
            "authProvider": "ownEmail",
            "role": "admin",
            "password": apiDataSet.password
        }, 
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Create",
        case: "missedEmail" 
    },
    { 
        url: adminProfileCreateUrl,
        token: null,
        payload: {
            "authProvider": "ownEmail",
            "role": "admin",
            "email": apiDataSet.randomEmail
        }, 
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Create",
        case: "missedPassword" 
    }
]

export const moderatorRefferalEarningsTestCases = [
    { 
        url: adminReferralEarningsUrl,
        token: null,
        payload: {
            "userId": null,
            "endDate": apiDataSet.isoDate
        }, 
        expectedStatus: 500, 
        errorMessage: 'Cannot read properties of undefined', 
        testSuite: "Admin Referal Earnings",
        case: "missedStartDate" 
    },
    { 
        url: adminReferralEarningsUrl,
        token: null,
        payload: {
            "userId": null,
            "startDate": apiDataSet.isoDate    
        }, 
        expectedStatus: 500, 
        errorMessage: 'Cannot read properties of undefined', 
        testSuite: "Admin Referal Earnings",
        case: "missedEndtDate" 
    },
    { 
        url: adminReferralEarningsUrl,
        token: null,
        payload: {
            "startDate": apiDataSet.isoDate,
            "endDate": apiDataSet.isoDate   
        }, 
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Referal Earnings",
        case: "missedUserId" 
    },
    { 
        url: adminReferralEarningsUrl,
        token: null,
        payload: {
            "userId": "_",
            "startDate": apiDataSet.isoDate,
            "endDate": apiDataSet.isoDate   
        }, 
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Referal Earnings",
        case: "wrongUserId" 
    }
]

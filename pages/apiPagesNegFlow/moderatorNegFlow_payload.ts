import { apiUrl } from '../../utils/apiUrl'
import { apiDataSet } from '../../utils/dataSet'

const adminProfileCreateUrl = `${apiUrl.qaEnvUrl}:3000/admin/profile/create`
const adminReferralEarningsUrl = `${apiUrl.qaEnvUrl}:3000/admin/agent/referalEarnings`
const adminProfileStatusUrl = `${apiUrl.qaEnvUrl}:3000/admin/profile/status`
const adminProfileAgentUrl = `${apiUrl.qaEnvUrl}:3000/admin/profile/agent`
const adminProfileListUrl = `${apiUrl.qaEnvUrl}:3000/admin/profile/list`
const adminProfileUrl = `${apiUrl.qaEnvUrl}:3000/admin/profile`
const agentProfileUrl = `${apiUrl.qaEnvUrl}:3000/agent/profile`
const adminProfileUpdateUrl = `${apiUrl.qaEnvUrl}:3000/admin/profile/update`
const adminSetPayoutEmailUrl = `${apiUrl.qaEnvUrl}:3000/admin/profile/setPayoutEmail`
const adminModeratorActionlUrl = `${apiUrl.qaEnvUrl}:3000/admin/moderator/action`
const adminModeratorActionListlUrl = `${apiUrl.qaEnvUrl}:3000/admin/action/list`
const adminModeratorActionTimerStoplUrl = `${apiUrl.qaEnvUrl}:3000/admin/timer/stop`


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
        case: 'wrongAuthProvider'
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

export const adminProfileAgentTestCases = [
    { 
        url: adminProfileAgentUrl,
        token: "token",
        payload: {
            "userId": "_",
            "isOfficialAgent": true
          },
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Profile Agent",
        case: "wrongUserId"
    },
    { 
        url: adminProfileAgentUrl,
        token: "token",
        payload: {
            "isOfficialAgent": true
          },
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Profile Agent",
        case: "missedUserId"
    },
    { 
        url: adminProfileAgentUrl,
        token: "token",
        payload: {
            "userId": "defaultUserId",
          },
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Profile Agent",
        case: "missedIsOfficialAbent"
    },
    { 
        url: adminProfileAgentUrl,
        token: "token",
        payload: {
            "userId": "defaultUserId",
            "isOfficialAgent": "_"
          },
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Profile Agent",
        case: "wrongIsOfficialAbent"
    }
]

export const adminProfileListTestCases = [
    { 
        url: adminProfileListUrl,
        token: "token",
        payload: {
            "skip": "_",
            "itemsPerPage": 1
          },
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Profile List",
        case: "wrongSkip"
    },
    { 
        url: adminProfileListUrl,
        token: "token",
        payload: {
            "skip": 0
          },
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Profile List",
        case: "misseditemsPerPage"
    },
    { 
        url: adminProfileListUrl,
        token: "token",
        payload: {
            "skip": 0,
            "itemsPerPage": "_"
          },
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Profile List",
        case: "wrongItemsPerPage"
    },

]

export const adminProfileTestCases = [
    { 
        url: adminProfileUrl,
        token: "token",
        payload: {
            "userId": "_"
          },
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Profile",
        case: "wrongUserId"
    },
    { 
        url: adminProfileUrl,
        token: "token",
        payload: {},
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Profile",
        case: "missedUserId"
    }

]

export const agentProfileTestCases = [
    { 
        url: agentProfileUrl,
        token: "token",
        payload: {
            "userId": "_"
          },
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Agent Profile",
        case: "wrongUserId"
    },
    { 
        url: agentProfileUrl,
        token: "token",
        payload: {},
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Agent Profile",
        case: "missedUserId"
    }

]

export const adminProfileUpdateTestCases = [
    { 
        url: adminProfileUpdateUrl,
        token: "token",
        payload: {
            "userId": "defaultUserId",
            "updateFields": {
                "status": "Active",
                "payoutEmail": "defaultPayoneerEmail",
                "defaultPaymentMethod": "payoneerEmail"
            }
        },
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Profile Update",
        case: "missedAction"
    },
    { 
        url: adminProfileUpdateUrl,
        token: "token",
        payload: {
            "userId": "defaultUserId",
            "action": true,
            "updateFields": {
                "status": "Active",
                "defaultPaymentMethod": "payoneerEmail"
            }
        },
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Profile Update",
        case: "wrongAction"
    },
    { 
        url: adminProfileUpdateUrl,
        token: "token",
        payload: {
            "userId": "defaultUserId",
            "action": "updateFields"
        },
        expectedStatus: 418, 
        errorMessage: 'MODERATOR_ACTION', 
        testSuite: "Admin Profile Update",
        case: "missedUpdateFields"
    },
    { 
        url: adminProfileUpdateUrl,
        token: "token",
        payload: {
            "userId": "defaultUserId",
            "action": "updateFields",
            "updateFields": {
                "status": true,
                "defaultPaymentMethod": "payoneerEmail"
            }
        },
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Profile Update",
        case: "wrongStatus"
    },
    { 
        url: adminProfileUpdateUrl,
        token: "token",
        payload: {
            "userId": "defaultUserId",
            "action": "updateFields",
            "updateFields": {
                "status": "Active",
                "defaultPaymentMethod": "_"
            }
        },
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Profile Update",
        case: "wrongDefaultPaymentMethod"
    }
]

export const adminSetPayoutEmailTestCases = [
    { 
        url: adminSetPayoutEmailUrl,
        token: "token",
        payload: {
            "userId": "_",
            "email": "test@test.com"
        },
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Set Payout Email",
        case: "wrongUserId"
    },
    { 
        url: adminSetPayoutEmailUrl,
        token: "token",
        payload: {
            "email": "test@test.com"
        },
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Set Payout Email",
        case: "missedUserId"
    }
]

export const adminModeratorActionTestCases = [
    { 
        url: adminModeratorActionlUrl,
        token: "token",
        payload: {
            "type": "_",
            "streamIds": [
              "defaultStreamId"
            ],
            "reason": "closedCamera/emptyRoom"
        },
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Moderator Action",
        case: "wrongTyoe"
    },
    {
        url: adminModeratorActionlUrl,
        token: "token",
        payload: {
            "streamIds": [
              "defaultStreamId"
            ],
            "reason": "closedCamera/emptyRoom"
        },
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Moderator Action",
        case: "missedType"
    },
    {
        url: adminModeratorActionlUrl,
        token: "token",
        payload: {
            "type": "warning",
            "reason": "closedCamera/emptyRoom"
        },
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Moderator Action",
        case: "missedStreamsIds"
    },
    {
        url: adminModeratorActionlUrl,
        token: "token",
        payload: {
            "type": "warning",
            "streamIds": [
              "defaultStreamId"
            ]
        },
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Moderator Action",
        case: "missedReason"
    },
    {
        url: adminModeratorActionlUrl,
        token: "token",
        payload: {
            "type": "warning",
            "streamIds": [
              "defaultStreamId"
            ],
            "reason": "_"
        },
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Moderator Action",
        case: "wrongReason"
    },
    {
        url: adminModeratorActionlUrl,
        token: "token",
        payload: {
            "type": "warning",
            "streamIds": [
              "_"
            ],
            "reason": "closedCamera/emptyRoom"
        },
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Moderator Action",
        case: "wrongStreamId"
    }
]

export const adminModeratorActionListTestCases = [
    { 
        url: adminModeratorActionListlUrl,
        token: "token",
        payload: {
            "type": "_",
            "streamIds": [
              "defaultStreamId"
            ],
            "skip": 0,
            "itemsPerPage": 10
        },
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Moderator Action List",
        case: "wrongTyoe"
    },
    { 
        url: adminModeratorActionListlUrl,
        token: "token",
        payload: {
            "type": "warning",
            "streamIds": [
              "_"
            ],
            "skip": 0,
            "itemsPerPage": 10
        },
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Moderator Action List",
        case: "wrongStreamId"
    },
    { 
        url: adminModeratorActionListlUrl,
        token: "token",
        payload: {
            "type": "warning",
            "streamIds": [
              "defaultStreamId"
            ],
            "itemsPerPage": 10
        },
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Moderator Action List",
        case: "missedSkip"
    },
    { 
        url: adminModeratorActionListlUrl,
        token: "token",
        payload: {
            "type": "warning",
            "streamIds": [
              "defaultStreamId"
            ],
            "skip": 0
        },
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Moderator Action List",
        case: "missedItemsPerPage"
    }
]

export const adminModeratorActionTimerStopTestCases = [
    { 
        url: adminModeratorActionTimerStoplUrl,
        token: "token",
        payload: {
            "actionId": "_"
        },
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Moderator Action Timer Stop",
        case: "wrongActionId"
    },
    { 
        url: adminModeratorActionTimerStoplUrl,
        token: "token",
        payload: {},
        expectedStatus: 400, 
        errorMessage: 'Error while validating request', 
        testSuite: "Admin Moderator Action Timer Stop",
        case: "missedActionId"
    }
]
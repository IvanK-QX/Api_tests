import { apiUrl } from '../../utils/apiUrl'

const reportUrl = `${apiUrl.qaEnvUrl}:3000/report`
const adminReportUrl = `${apiUrl.qaEnvUrl}:3000/admin/reports`
const adminReportStatusUrl = `${apiUrl.qaEnvUrl}:3000/admin/report/status`

export const reportTestCases = [
    {
        url: reportUrl,
        token: 'token',
        payload: {
            "reportedUserId": "_",
            "reason": "streamerUnder17"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Report',
        case: 'wrongReportedUserId'
    },
    {
        url: reportUrl,
        token: 'token',
        payload: {
            "reason": "streamerUnder17"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Report',
        case: 'missedReportedUserId'
    },
    {
        url: reportUrl,
        token: 'token',
        payload: {
            "reportedUserId": "reportedUserId",
            "reason": "_"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Report',
        case: 'wrongReason'
    },
    {
        url: reportUrl,
        token: 'token',
        payload: {
            "reportedUserId": "reportedUserId"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Report',
        case: 'missedReason'
    }
]

export const adminReportTestCases = [
    {
        url: adminReportUrl,
        token: 'token',
        payload: {
            "itemsPerPage": "_",
            "skip": 0,
            "sortDateDirection": -1,
            "reportedUserId": "defaultUserId",
            "status": "New",
            "reportedUserStatus": "Active"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Admin Report',
        case: 'wrongItemsPerPage'
    },
    {
        url: adminReportUrl,
        token: 'token',
        payload: {
            "skip": 0,
            "sortDateDirection": -1,
            "reportedUserId": "defaultUserId",
            "status": "New",
            "reportedUserStatus": "Active"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Admin Report',
        case: 'missedItemsPerPage'
    },
    {
        url: adminReportUrl,
        token: 'token',
        payload: {
            "itemsPerPage": 100,
            "skip": "_",
            "sortDateDirection": -1,
            "reportedUserId": "defaultUserId",
            "status": "New",
            "reportedUserStatus": "Active"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Admin Report',
        case: 'wrongSkip'
    },
    {
        url: adminReportUrl,
        token: 'token',
        payload: {
            "itemsPerPage": 100,
            "skip": 0,
            "sortDateDirection": "_",
            "reportedUserId": "defaultUserId",
            "status": "New",
            "reportedUserStatus": "Active"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Admin Report',
        case: 'wrongSortDateDirection'
    },
    {
        url: adminReportUrl,
        token: 'token',
        payload: {
            "itemsPerPage": 100,
            "skip": 0,
            "sortDateDirection": -1,
            "reportedUserId": "_",
            "status": "New",
            "reportedUserStatus": "Active"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Admin Report',
        case: 'wrongReportedUserId'
    },
    {
        url: adminReportUrl,
        token: 'token',
        payload: {
            "itemsPerPage": 100,
            "skip": 0,
            "sortDateDirection": -1,
            "status": 0,
            "reportedUserStatus": "Active"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Admin Report',
        case: 'wrongStatus'
    },
    {
        url: adminReportUrl,
        token: 'token',
        payload: {
            "itemsPerPage": 100,
            "skip": 0,
            "sortDateDirection": -1,
            "reportedUserId": "defaultUserId",
            "status": "New",
            "reportedUserStatus": "_"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Admin Report',
        case: 'wrongReportedUserStatus'
    }
]

export const adminReportStatusTestCases = [
    {
        url: adminReportStatusUrl,
        token: 'token',
        payload: {
            "reportIds": [
              "_"
            ],
            "status": "New"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Admin Report Status',
        case: 'wrongReportIds'
    },
    {
        url: adminReportStatusUrl,
        token: 'token',
        payload: {
            "reportIds": [
              "defaultUserId"
            ],
            "status": "_"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Admin Report Status',
        case: 'wrongStatus'
    },
    {
        url: adminReportStatusUrl,
        token: 'token',
        payload: {
            "reportIds": [
              "defaultUserId"
            ]
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Admin Report Status',
        case: 'missedStatus'
    }
]
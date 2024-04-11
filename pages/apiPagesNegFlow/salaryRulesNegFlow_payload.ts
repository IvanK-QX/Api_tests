import { apiUrl } from '../../utils/apiUrl'
//mport { apiDataSet } from '../../utils/dataSet'

const salaryRulesCreateUrl = `${apiUrl.qaEnvUrl}/core/rules/create`
const salaryRulesUpdateUrl = `${apiUrl.qaEnvUrl}/core/rules/update`
const botSalaryRulesCreateUrl = `${apiUrl.qaEnvUrl}/core/bot/rules/create`
const botSalaryRulesUpdateUrl = `${apiUrl.qaEnvUrl}/core/rules/update`

export const salaryRulesCreateTestCases = [
    {
        url: salaryRulesCreateUrl,
        token: 'token',
        payload: {
            "streamerType": "_",
            "streamerIds": [
                "defaultUserId"
            ],
            "periods": [
                {
                    "amount": 14,
                    "period": "Hours"
                },
                {
                    "amount": 7,
                    "period": "Days"
                }
            ],
            "status": "Active",
            "operatorPeriod": "AND",
            "timeLimitAmount": 90,
            "timeLimitPeriod": "Days",
            "dimondsLimit": 18950
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Salary Rules',
        case: 'Create - wrongStreamerType'
    },
    {
        url: salaryRulesCreateUrl,
        token: 'token',
        payload: {
            "streamerType": "Official",
            "streamerIds": [
                "_"
            ],
            "periods": [
                {
                    "amount": 14,
                    "period": "Hours"
                },
                {
                    "amount": 7,
                    "period": "Days"
                }
            ],
            "status": "Active",
            "operatorPeriod": "AND",
            "timeLimitAmount": 90,
            "timeLimitPeriod": "Days",
            "dimondsLimit": 18950
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Salary Rules',
        case: 'Create - wrongUserId'
    },
    {
        url: salaryRulesCreateUrl,
        token: 'token',
        payload: {
            "streamerType": "Official",
            "streamerIds": [
                "defaultUserId"
            ],
            "periods": [
                {
                    "amount": "_",
                    "period": "Hours"
                },
                {
                    "amount": "_",
                    "period": "Days"
                }
            ],
            "status": "Active",
            "operatorPeriod": "AND",
            "timeLimitAmount": 90,
            "timeLimitPeriod": "Days",
            "dimondsLimit": 18950
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Salary Rules',
        case: 'Create - wrongPeriodAmount'
    },
    {
        url: salaryRulesCreateUrl,
        token: 'token',
        payload: {
            "streamerType": "Official",
            "streamerIds": [
                "defaultUserId"
            ],
            "periods": [
                {
                    "amount": 14,
                    "period": "_"
                },
                {
                    "amount": 7,
                    "period": "_"
                }
            ],
            "status": "Active",
            "operatorPeriod": "AND",
            "timeLimitAmount": 90,
            "timeLimitPeriod": "Days",
            "dimondsLimit": 18950
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Salary Rules',
        case: 'Create - wrongPeriodsPeriod'
    },
    {
        url: salaryRulesCreateUrl,
        token: 'token',
        payload: {
            "streamerType": "Official",
            "streamerIds": [
                "defaultUserId"
            ],
            "status": "Active",
            "operatorPeriod": "AND",
            "timeLimitAmount": 90,
            "timeLimitPeriod": "Days",
            "dimondsLimit": 18950
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Salary Rules',
        case: 'Create - missedPeriods'
    },
    {
        url: salaryRulesCreateUrl,
        token: 'token',
        payload: {
            "streamerType": "Official",
            "streamerIds": [
                "defaultUserId"
            ],
            "periods": [
                {
                    "amount": 14,
                    "period": "Hours"
                },
                {
                    "amount": 7,
                    "period": "Days"
                }
            ],
            "status": "_",
            "operatorPeriod": "AND",
            "timeLimitAmount": 90,
            "timeLimitPeriod": "Days",
            "dimondsLimit": 18950
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Salary Rules',
        case: 'Create - wrongStatus'
    },
    {
        url: salaryRulesCreateUrl,
        token: 'token',
        payload: {
            "streamerType": "Official",
            "streamerIds": [
                "defaultUserId"
            ],
            "periods": [
                {
                    "amount": 14,
                    "period": "Hours"
                },
                {
                    "amount": 7,
                    "period": "Days"
                }
            ],
            "operatorPeriod": "AND",
            "timeLimitAmount": 90,
            "timeLimitPeriod": "Days",
            "dimondsLimit": 18950
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Salary Rules',
        case: 'Create - missedStatus'
    },
    {
        url: salaryRulesCreateUrl,
        token: 'token',
        payload: {
            "streamerType": "Official",
            "streamerIds": [
                "defaultUserId"
            ],
            "periods": [
                {
                    "amount": 14,
                    "period": "Hours"
                },
                {
                    "amount": 7,
                    "period": "Days"
                }
            ],
            "status": "Active",
            "operatorPeriod": "_",
            "timeLimitAmount": 90,
            "timeLimitPeriod": "Days",
            "dimondsLimit": 18950
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Salary Rules',
        case: 'Create - wrongOperatorPeriod'
    },
    {
        url: salaryRulesCreateUrl,
        token: 'token',
        payload: {
            "streamerType": "Official",
            "streamerIds": [
                "defaultUserId"
            ],
            "periods": [
                {
                    "amount": 14,
                    "period": "Hours"
                },
                {
                    "amount": 7,
                    "period": "Days"
                }
            ],
            "status": "Active",
            "timeLimitAmount": 90,
            "timeLimitPeriod": "Days",
            "dimondsLimit": 18950
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Salary Rules',
        case: 'Create - missedOperatorPeriod'
    },
    {
        url: salaryRulesCreateUrl,
        token: 'token',
        payload: {
            "streamerType": "Official",
            "streamerIds": [
                "defaultUserId"
            ],
            "periods": [
                {
                    "amount": 14,
                    "period": "Hours"
                },
                {
                    "amount": 7,
                    "period": "Days"
                }
            ],
            "status": "Active",
            "operatorPeriod": "AND",
            "timeLimitAmount": 90,
            "timeLimitPeriod": "Days",
            "dimondsLimit": "_"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Salary Rules',
        case: 'Create - wrongDimondsLimit'
    },
    {
        url: salaryRulesCreateUrl,
        token: 'token',
        payload: {
            "streamerType": "Official",
            "streamerIds": [
                "defaultUserId"
            ],
            "periods": [
                {
                    "amount": 14,
                    "period": "Hours"
                },
                {
                    "amount": 7,
                    "period": "Days"
                }
            ],
            "status": "Active",
            "operatorPeriod": "AND",
            "timeLimitAmount": 90,
            "timeLimitPeriod": "Days"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Salary Rules',
        case: 'Create - missedDimondsLimit'
    }
    
]

export const salaryRulesUpdateTestCases = [
    {
        url: salaryRulesUpdateUrl,
        token: 'token',
        payload: {
            "_id": "_",
            "streamerType": "Official",
            "streamerIds": [
                "defaultUserId"
            ],
            "periods": [
                {
                    "amount": 0,
                    "period": "Hours"
                },
                {
                    "amount": 7,
                    "period": "Days"
                }
            ],
            "status": "Active",
            "operatorPeriod": "AND",
            "timeLimitAmount": 90,
            "timeLimitPeriod": "Days",
            "dimondsLimit": 100000
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Salary Rules',
        case: 'Update - wrongId'
    },
    {
        url: salaryRulesUpdateUrl,
        token: 'token',
        payload: {
            "streamerType": "Official",
            "streamerIds": [
                "defaultUserId"
            ],
            "periods": [
                {
                    "amount": 0,
                    "period": "Hours"
                },
                {
                    "amount": 7,
                    "period": "Days"
                }
            ],
            "status": "Active",
            "operatorPeriod": "AND",
            "timeLimitAmount": 90,
            "timeLimitPeriod": "Days",
            "dimondsLimit": 100000
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Salary Rules',
        case: 'Update - missedId'
    },
    {
        url: salaryRulesUpdateUrl,
        token: 'token',
        payload: {
            "_id": "defaultBotRuleId",
            "streamerType": "Official",
            "streamerIds": [
                "_"
            ],
            "periods": [
                {
                    "amount": 0,
                    "period": "Hours"
                },
                {
                    "amount": 7,
                    "period": "Days"
                }
            ],
            "status": "Active",
            "operatorPeriod": "AND",
            "timeLimitAmount": 90,
            "timeLimitPeriod": "Days",
            "dimondsLimit": 100000
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Salary Rules',
        case: 'Update - wrongStreamerIds'
    },
    {
        url: salaryRulesUpdateUrl,
        token: 'token',
        payload: {
            "_id": "defaultBotRuleId",
            "streamerType": "Official",
            "streamerIds": [
                "defaultUserId"
            ],
            "periods": [
                {
                    "amount": "_",
                    "period": "Hours"
                },
                {
                    "amount": "_",
                    "period": "Days"
                }
            ],
            "status": "Active",
            "operatorPeriod": "AND",
            "timeLimitAmount": 90,
            "timeLimitPeriod": "Days",
            "dimondsLimit": 100000
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Salary Rules',
        case: 'Update - wrongPeriodsAmount'
    },
    {
        url: salaryRulesUpdateUrl,
        token: 'token',
        payload: {
            "_id": "defaultBotRuleId",
            "streamerType": "Official",
            "streamerIds": [
                "defaultUserId"
            ],
            "periods": [
                {
                    "amount": 0,
                    "period": "_"
                },
                {
                    "amount": 7,
                    "period": "_"
                }
            ],
            "status": "Active",
            "operatorPeriod": "AND",
            "timeLimitAmount": 90,
            "timeLimitPeriod": "Days",
            "dimondsLimit": 100000
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Salary Rules',
        case: 'Update - wrongPeriodsPeriod'
    }, 
    {
        url: salaryRulesUpdateUrl,
        token: 'token',
        payload: {
            "_id": "defaultBotRuleId",
            "streamerType": "Official",
            "streamerIds": [
                "defaultUserId"
            ],
            "periods": [
                {
                    "amount": 0,
                    "period": "Hours"
                },
                {
                    "amount": 7,
                    "period": "Days"
                }
            ],
            "status": "_",
            "operatorPeriod": "AND",
            "timeLimitAmount": 90,
            "timeLimitPeriod": "Days",
            "dimondsLimit": 100000
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Salary Rules',
        case: 'Update - wrongStatus'
    },
    {
        url: salaryRulesUpdateUrl,
        token: 'token',
        payload: {
            "_id": "defaultBotRuleId",
            "streamerType": "Official",
            "streamerIds": [
                "defaultUserId"
            ],
            "periods": [
                {
                    "amount": 0,
                    "period": "Hours"
                },
                {
                    "amount": 7,
                    "period": "Days"
                }
            ],
            "status": "Active",
            "operatorPeriod": "_",
            "timeLimitAmount": 90,
            "timeLimitPeriod": "Days",
            "dimondsLimit": 100000
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Salary Rules',
        case: 'Update - wrongOperatorPeriod'
    }

]

export const botSalaryRulesCreateTestCases = [
    {
        url: botSalaryRulesCreateUrl,
        token: 'token',
        payload: {
            "streamerType": "_",
            "status": "Active",
            "salaryRuleIds": [
              "defaultBotRuleId"
            ],
            "streamsAmount": {
              "from": 0,
              "to": 100
            },
            "timeInStreams": {
              "from": 0,
              "to": 10,
              "period": "Hours"
            },
            "sort": "beginning"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Salary Rules',
        case: 'Bot - Create - wrongStreamerType'
    },
    {
        url: botSalaryRulesCreateUrl,
        token: 'token',
        payload: {
            "streamerType": "Official",
            "status": "_",
            "salaryRuleIds": [
              "defaultBotRuleId"
            ],
            "streamsAmount": {
              "from": 0,
              "to": 100
            },
            "timeInStreams": {
              "from": 0,
              "to": 10,
              "period": "Hours"
            },
            "sort": "beginning"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Salary Rules',
        case: 'Bot - Create - wrongStatus'
    },
    {
        url: botSalaryRulesCreateUrl,
        token: 'token',
        payload: {
            "streamerType": "Official",
            "status": "Active",
            "salaryRuleIds": [
              "_"
            ],
            "streamsAmount": {
              "from": 0,
              "to": 100
            },
            "timeInStreams": {
              "from": 0,
              "to": 10,
              "period": "Hours"
            },
            "sort": "beginning"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Salary Rules',
        case: 'Bot - Create - wrongSalaryRuleIds'
    },
    {
        url: botSalaryRulesCreateUrl,
        token: 'token',
        payload: {
            "streamerType": "Official",
            "status": "Active",
            "salaryRuleIds": [
              "defaultBotRuleId"
            ],
            "streamsAmount": {
              "from": "_",
              "to": "_"
            },
            "timeInStreams": {
              "from": 0,
              "to": 10,
              "period": "Hours"
            },
            "sort": "beginning"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Salary Rules',
        case: 'Bot - Create - wrongStreamsAmount'
    },
    {
        url: botSalaryRulesCreateUrl,
        token: 'token',
        payload: {
            "streamerType": "Official",
            "status": "Active",
            "salaryRuleIds": [
              "defaultBotRuleId"
            ],
            "streamsAmount": {
              "from": 0,
              "to": 100
            },
            "timeInStreams": {
              "from": "_",
              "to": "_",
              "period": "_"
            },
            "sort": "beginning"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Salary Rules',
        case: 'Bot - Create - wrongTimeInStreams'
    },
    {
        url: botSalaryRulesCreateUrl,
        token: 'token',
        payload: {
            "streamerType": "Official",
            "status": "Active",
            "salaryRuleIds": [
              "defaultBotRuleId"
            ],
            "streamsAmount": {
              "from": 0,
              "to": 100
            },
            "timeInStreams": {
              "from": 0,
              "to": 10,
              "period": "Hours"
            },
            "sort": "_"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Salary Rules',
        case: 'Bot - Create - wrongSort'
    },
    {
        url: botSalaryRulesCreateUrl,
        token: 'token',
        payload: {
            "streamerType": "Official",
            "status": "Active",
            "salaryRuleIds": [
              "defaultBotRuleId"
            ],
            "streamsAmount": {
              "from": 0,
              "to": 100
            },
            "sort": "beginning"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Salary Rules',
        case: 'Bot - Create - missedTimeInStreams'
    },
    {
        url: botSalaryRulesCreateUrl,
        token: 'token',
        payload: {
            "streamerType": "Official",
            "status": "Active",
            "salaryRuleIds": [
              "defaultBotRuleId"
            ],
            "streamsAmount": {
              "from": 0,
              "to": 100
            },
            "timeInStreams": {
              "from": 0,
              "to": 10,
              "period": "Hours"
            }
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Salary Rules',
        case: 'Bot - Create - missedSort'
    }
]

export const botSalaryRulesUpdateTestCases = [
    {
        url: botSalaryRulesUpdateUrl,
        token: 'token',
        payload: {
            "_id": "_",
            "streamerType": "Official",
            "status": "Active",
            "salaryRuleIds": [
              "defaultBotRuleId"
            ],
            "streamsAmount": {
              "from": 0,
              "to": 1000
            },
            "timeInStreams": {
              "from": 0,
              "to": 1,
              "period": "Hours"
            },
            "sort": "beginning"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Salary Rules',
        case: 'Bot - Update - wrongId'
    },
    {
        url: botSalaryRulesUpdateUrl,
        token: 'token',
        payload: {
            "streamerType": "Official",
            "status": "Active",
            "salaryRuleIds": [
              "defaultBotRuleId"
            ],
            "streamsAmount": {
              "from": 0,
              "to": 1000
            },
            "timeInStreams": {
              "from": 0,
              "to": 1,
              "period": "Hours"
            },
            "sort": "beginning"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Salary Rules',
        case: 'Bot - Update - missedId'
    },
    {
        url: botSalaryRulesUpdateUrl,
        token: 'token',
        payload: {
            "_id": "defaultBotRuleId",
            "streamerType": "_",
            "status": "Active",
            "salaryRuleIds": [
              "defaultBotRuleId"
            ],
            "streamsAmount": {
              "from": 0,
              "to": 1000
            },
            "timeInStreams": {
              "from": 0,
              "to": 1,
              "period": "Hours"
            },
            "sort": "beginning"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Salary Rules',
        case: 'Bot - Update - wrongStreamerType'
    },
    {
        url: botSalaryRulesUpdateUrl,
        token: 'token',
        payload: {
            "_id": "defaultBotRuleId",
            "streamerType": "Official",
            "status": "_",
            "salaryRuleIds": [
              "defaultBotRuleId"
            ],
            "streamsAmount": {
              "from": 0,
              "to": 1000
            },
            "timeInStreams": {
              "from": 0,
              "to": 1,
              "period": "Hours"
            },
            "sort": "beginning"
        },
        expectedStatus: 400,
        errorMessage: 'Error while validating request',
        testSuite: 'Salary Rules',
        case: 'Bot - Update - wrongStatus'
    }
]
import { apiDataSet } from "../../utils/dataSet";

export class AdminPanelPayloads {
    
    static filterUsersList(searchBy: string, value) {
        const query = {
            "skip":0,
            "itemsPerPage":10,
            "sortDateDirection":1,
        }
        query[searchBy] = value;
        return query
    }

    static filterActionsList(searchBy1: string, value1, searchBy2: string, value2) {
        const query = {
            "skip":0,
            "itemsPerPage":10,
            "streamerType":"Individual",
            "streamType":"public",
            "reason":"closedCamera/emptyRoom",
            "sortDateDirection":1,
        }
        query[searchBy1] = value1;
        query[searchBy2] = value2;
        return query
    }

    static filterPayoutsList(searchBy1: string, value1) {
        const query = {
            "skip":0,
            "itemsPerPage":40,
            "streamerType":"Individual",
            "status":"pending",
            "sortDateDirection":1}
            query["fromRequestDate"] = apiDataSet.isoDate;
            query["toRequestDate"] = apiDataSet.isoDate;
            query[searchBy1] = value1;
        return query
    }

    static filterReportsList(searchBy1: string, value1) {
        const query = {
            "skip":0,
            "itemsPerPage":10,
            "reason":"spam",
            "reportType":"user",
            "reportedUserStatus":"Active",
            "sortDateDirection":1
        }
        query["startDate"] = apiDataSet.isoDate;
        query["endDate"] = apiDataSet.isoDate;
        query[searchBy1] = value1;
        return query
    }

    static filterStreamersList(searchBy1: string, value1, streamerType) {
        const query = {
            "filters":{
            "statsStartIncludingDate":"2023-01-01",
            "statsEndIncludingDate":"2030-01-01",
            },
            "pagination":{"itemsPerPage":40,"skip":0}}
            query.filters[searchBy1] = value1;
            query.filters["streamerType"] = streamerType;
        return query
    }

    static filterAgentsList(searchBy1: string, value1, dateStart, dateEnd,) {
        const query = {"filters": {
        },
            "pagination": {
                "itemsPerPage":10,
                "skip":0
            }}
            query.filters["statsStartIncludingDate"] = dateStart
            query.filters["statsEndIncludingDate"] = dateEnd
            query.filters[searchBy1] = value1;
        return query
    }
}

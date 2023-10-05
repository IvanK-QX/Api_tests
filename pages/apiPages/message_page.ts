import { APIRequestContext, request } from "@playwright/test";
import { Headers } from "../../utils/headers";

export class ApiMessage3003Page {
    apiContext: APIRequestContext

    constructor(apiContext:APIRequestContext){
        this.apiContext=apiContext
    }

    async message (url: string, userToken: string, userId: string){
        const apiContext = await request.newContext({ignoreHTTPSErrors:true})
        const data = {
            "text": "jksajfha",
            "toUserId": `${userId}`
        }
        const headers = Headers.userHeader(userToken)
       
        const apiRequest = await apiContext.post(`${url}:3003/message`,{data, headers: headers }) 


    }



   
}
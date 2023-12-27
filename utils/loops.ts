export class PrintedData {
    static negativeFlowLoop(actualStatusCode: number, ExpectedStatusCode: number, url: string, data: any, response: string) {
        if (actualStatusCode != ExpectedStatusCode) {
            console.log(`\n            TEST FAILED             \n
            TEST URL   >   ${url} \n
            TEST PAYLOAD  >   ${JSON.stringify(data)} \n
            TEST RESPONSE BODY   >   ${response}\n`)
        }
    }
}
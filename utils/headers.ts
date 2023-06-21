export class Headers {

    static userHeader(userToken: string) {
        const headers = {
            'authorization': `Bearer ${userToken}`,
            'packagename': 'com.plamfy',
            'content-type': 'application/json',
            'appversion': '1',
            'os': 'browser'
        }
        return headers 
    }
}
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { test, request } from '@playwright/test'
import { Api } from '../../pages/Api'
import { apiUrl } from '../../utils/apiUrl'
let user

test.describe.skip('Get data', () => {
    let userData = [0]
    for(let i = 1; i < 3000; i++) {
      userData.push(i)
    }
      for (const name of userData) {
        test(`CRUD Group Post number ${name}`, async () => {
          const apiContext = await request.newContext()
          const api = new Api(apiContext)
          const myUserId = '648b24260642b2b48c2295da',
          userId2 = '648c342c06fb71d9748d9f4e',
          userId3 = '64b10e49e98a305a269fb853',
          userId4 = '652f85e7fc12cde9d2e1cedd',
          giftId = '614c564a74faac3e988b2c98'
          user = await api.loginPage.createNewUser(apiUrl.qaEnvUrl)
          await api.followingPage.follow(apiUrl.qaEnvUrl, user.userToken, myUserId)
          await api.followingPage.follow(apiUrl.qaEnvUrl, user.userToken, userId2)
          await api.followingPage.follow(apiUrl.qaEnvUrl, user.userToken, userId3)
          await api.followingPage.follow(apiUrl.qaEnvUrl, user.userToken, userId4)
        //   await api.giftsPage.sendGiftShort(apiUrl.qaEnvUrl, user.userToken, giftId, myUserId)
          console.log(`Done test: ${name}`)
        })
      }
})

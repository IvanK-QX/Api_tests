/* eslint-disable prefer-const */
import { test, request} from '@playwright/test';
import { Api } from '../../pages/Api';
import { apiUrl } from '../../utils/apiUrl';
let user

test.describe.only('Get data', () => {
let userData = [0]

for(let i = 1; i < 4000; i++) {
  userData.push(i)
}
  for (const name of userData) {
    test(`CRUD Group Post number ${name}`, async () => {
      const apiContext = await request.newContext()
      const api = new Api(apiContext)
      const myUserId = '647dfa3d2eefd20d19cc32a6',
      giftId = '614c564a74faac3e988b2c98'
      user = await api.loginPage.createNewUser(apiUrl.prodEnvUrl)
      await api.followingPage.follow(apiUrl.prodEnvUrl, user.userToken, myUserId)
    //   await api.giftsPage.sendGiftShort(apiUrl.qaEnvUrl, user.userToken, giftId, myUserId)
      console.log(`Done test: ${name}`)

    })
  }
})
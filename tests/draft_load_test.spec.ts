/* eslint-disable prefer-const */
import { test, request} from '@playwright/test';
import { Api } from '../pages/Api';
import { apiUrl } from '../utils/apiUrl';
let user

test.describe.only('Get data', () => {
let userData = [0]

for(let i = 1; i < 2; i++) {
  userData.push(i)
}
  for (const name of userData) {
    test(`CRUD Group Post number ${name}`, async () => {
      const apiContext = await request.newContext()
      const api = new Api(apiContext)
      const myUserId = '64ad488391b2434cff1ab1e1',
      giftId = '614c564a74faac3e988b2c98',
      url = 'https://plamfyapi.com:3000'
      user = await api.loginPage.createNewUser(url)
      await api.followingPage.follow(url, user.userToken, myUserId)
      await api.giftsPage.sendGiftShort(url, user.userToken, giftId, myUserId)
      console.log(`Done test: ${name}`)

    })
  }
})
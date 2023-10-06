import { Page } from "@playwright/test"

export class AppPreStreamPage {
    page: Page

    constructor(page: Page) {
        this.page = page 
    }

    async changeStreamTitle() {
        await this.page.locator('[placeholder="Stream title"]').fill('lets go')
    }

    async clickStartStreamBtn() {
        await this.page.locator('.stream-main-action__button--public button').click()
    }

    async uploadAvatar() {
        this.page.on('filechooser', async (filechooser) => {
            await filechooser.setFiles('./utils/unnamed.jpg')
          })
          await this.page.locator('button.user-data-entris__button-upload').click()
          await this.page.waitForTimeout(1000)
          await this.page.getByText(' Save ').click()
          await this.page.waitForTimeout(2000)
          await this.page.waitForLoadState('networkidle')
    }

    async observeStream() {
        await this.page.locator('div.create-stream__actions').waitFor()
        await this.page.locator("//span[contains(text(),'Pause')]").waitFor()
    }


}
import { Page, expect } from "@playwright/test"
import { apiUrl } from "../../utils/apiUrl"

export class AppStreamPage {
    page: Page

    constructor(page: Page) {
        this.page = page 
    }

    async waitForStreamLoadingWatcher() {
        await this.page.locator('div.single-stream__actions').waitFor()
        await this.page.locator('div.gift-shop-box__header').waitFor()
        await this.page.locator('div.chat-system-message').waitFor()
    }

    async sendMessageInStreamChat(message: string) {
        await this.page.locator('[placeholder="Send a message…"]').fill(message)
        await this.page.keyboard.press('Enter')
    }

    async observeReceivedMessage(message: string) {
        await expect(this.page.getByText(message)).toBeVisible()
    }

    async closeStreamAsStreamer() {
        await this.page.locator('button svg.stream-button-close__icon').click()
        await this.page.locator('button.confirm-modal__buttons--second').click()
        await this.page.locator('.modal-close').click()
        await this.page.waitForURL(`${apiUrl.qaUiUrl}`)
    }


}
import { Page } from "@playwright/test"
import { apiUrl } from "../../utils/apiUrl"

export class AppEditProfilePage {
    page: Page

    constructor(page: Page) {
        this.page = page 
    }

    async open() {
        await this.page.goto(`${apiUrl.qaUiUrl}/edit`)
        await this.page.waitForLoadState('networkidle')
    }


}
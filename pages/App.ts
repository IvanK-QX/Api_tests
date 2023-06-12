import { Page } from "@playwright/test"

export class API {
    page: any

    constructor(page: Page) {
        this.page = page
    }
}
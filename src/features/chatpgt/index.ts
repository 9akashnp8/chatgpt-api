import playwright, { Browser as PWBrowser, Page as PWPage } from "playwright";

import { cookies } from "./cookies.js";

export class Browser {
    instance: PWBrowser
    page: PWPage

    async createBrowserInstance() {
        const browser = await playwright.chromium.launch({ headless: false });
        const context = await browser.newContext({
            userAgent: process.env["USER_AGENT"]
        });
        await context.addCookies(cookies)
        return browser;
    }
    
    async setup() {
        this.instance = await this.createBrowserInstance();
        this.page = await this.instance?.contexts()[0].newPage()
        await this.page?.goto("https://chat.openai.com/c/b803f5f8-f8b9-4bbf-8965-ac1a1f1075c0");
        await this.page?.getByText("Okay, let’s go").click()
        await this.page?.locator(".truncate").click()
    }

    async sendMessage(message: string) {
        await this.page?.locator("#prompt-textarea").fill(message)
        await this.page?.getByTestId("send-button").click()
        const response = await this.getAiResponse()
        return response
    }

    async getAiResponse() {
        await this.page?.waitForTimeout(5000)
        const aiResponse = await this.page
            .getByTestId("conversation-turn-3")
            .textContent()
        return aiResponse?.slice(12)
    }
}



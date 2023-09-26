import playwright from "playwright";

import { cookies } from "./cookies.js";

export default async function getAiResponse(prompt: string) {
    const browser = await playwright.chromium.launch({ headless: true });

    const context = await browser.newContext({
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36"
    });
    const page = await context.newPage();
    
    await context.addCookies(cookies)

    await page.goto("https://chat.openai.com/c/b803f5f8-f8b9-4bbf-8965-ac1a1f1075c0");

    await page.getByText("Okay, let’s go").click()

    await page.locator(".truncate").click()

    await page.locator("#prompt-textarea").fill("Hello there!")

    await page.getByTestId("send-button").click()
    
    await page.waitForTimeout(5000)

    const aiResponse = await page.getByTestId("conversation-turn-3").textContent()

    return aiResponse
}



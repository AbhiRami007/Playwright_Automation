import { test, expect, chromium } from '@playwright/test'

test('Slow motion Video recording demo', async () => {
    const browser = await chromium.launch({
        slowMo: 500,
        headless: false
    })
    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size:{width: 200, height: 200}
        }
    })
    const page = await context.newPage()
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').dblclick();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="inventory-sidebar-link"]').click();
    await context.close()
})
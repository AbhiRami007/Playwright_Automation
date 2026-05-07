import { test, expect } from '@playwright/test';

let context, page;

test.beforeAll(async({browser})=>{
    context =  await browser.newContext();
    context.tracing.start({screenshots: true, snapshots: true})
    page = await context.newPage()
})

test.afterAll(async()=>{
    await context.tracing.stop({path: 'test_trace.zip'})
})
test('test', async () => {
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
  await page.locator('[data-test="about-sidebar-link"]').click();
  await page.getByRole('link', { name: 'Sauce Labs Home' }).click();
});
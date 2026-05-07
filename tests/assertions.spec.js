import{test, expect} from '@playwright/test'

test("Assertion demo", async ({ page }) => {
    await page.goto("https://kitchen.applitools.com/");
    await page.pause();
    //Check elemet is present
    await expect(page.locator('text=API')).toHaveCount(1)
    if (page.$('text=API')) {
        page.locator('text=API').click() 
    }
    //Check elemet is hidden or visible
    await expect(page.locator('text=API')).toBeVisible()
    //await expect(page.locator('text=API')).toBeHidden()
    // at this point it will stop execution when it fails. To continue execution of next steps, use soft assertion

    // await expect.soft(page.locator('text=API')).toBeHidden()

    //Check elemet is Enabled or Disable
    await expect(page.locator('text=API')).toBeEnabled()
    // await expect.soft(page.locator('text=API')).toBeDisabled()

    //Check text
    await expect(page.locator('text=API')).toHaveText('API')
    // await expect.soft(page.locator('text=API')).not.toHaveText('API')

    //Check attribute value
    await expect(page.locator('text=API')).toHaveAttribute('class', /chakra-heading.*/)

    //Check for URL and title
    await expect(page).toHaveURL('https://kitchen.applitools.com/ingredients/api')
    await expect(page).toHaveTitle(/API*./)

    //Visual validation with screenshot
    await expect(page).toHaveScreenshot()


})

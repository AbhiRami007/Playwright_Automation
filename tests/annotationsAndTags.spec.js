import { test } from "@playwright/test";

test.skip("Skip this test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
});

test.only("Run this test only", async ({ page }) => {
  await page.goto("https://www.google.com/");
});

test("not yet ready", async ({ page }) => {
  test.fail();
});

test.fixme("test to be fixed", async ({ page }) => {});

test("slow test", async ({ page }) => {
  test.slow();
});

test("Skip this test on condition", async ({ page, browserName }) => {
  test.skip(browserName === "chromium", "Still working on it");
});

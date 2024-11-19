import { test, expect } from '@playwright/test';

test.describe('Visual regression tests', () => {
  test('playwright.dev visual test', async ({ page }) => {
    await page.goto('https://playwright.dev');
    await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });
  });
  
  test('reddit.com fitness visual test', async ({ page }) => {
    await page.goto('https://www.reddit.com/r/Fitness/');
    await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });
  });
})
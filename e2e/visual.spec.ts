import { test, expect } from '@playwright/test';

test.describe('Visual regression tests', () => {
  test('playwright.dev visual test', async ({ page }) => {
    await page.goto('https://playwright.dev');
    await expect(page).toHaveScreenshot('playwright.png', { maxDiffPixels: 100 });
  });

  test.only('reddit.com fitness visual test', async ({ page }) => {
    // maybe try this -> https://www.linkedin.com/pulse/dont-mask-dynamic-elements-playwright-before-you-read-eugene-truuts
    await page.goto('https://www.reddit.com/r/Fitness/');
    console.log(await page.locator('.main-container').count()); // Check if the locator matches any elements.
    console.log(await page.locator('main article').count());

    await expect(page).toHaveScreenshot({ mask: [page.locator('.main-container'), page.locator('main article')] });
  });
  test('hacker news visual test', async ({ page }) => {
    await page.goto('https://news.ycombinator.com/');
    
    await expect(page).toHaveScreenshot('hackernews.png',{ mask: [page.locator('.athing'), page.locator('.athing + tr')] });
  });
  test('youtube visual test', async ({ page }) => {
    await page.goto('https://www.youtube.com/channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ');
    
    await expect(page).toHaveScreenshot('youtube.png',{ mask: [page.locator('#content.ytd-rich-item-renderer')]});
  });
})
import { test, expect } from '@playwright/test';

test.describe("Google Search input box @flow=google", () => {
  test("should display YoutTube link on search", async ({ page }) => {
    await page.goto("https://www.google.com");
    const searchInput = await page.locator("textarea[title='Search']");
    await searchInput.fill("YouTube");
    await searchInput.press("Enter");
    await page.waitForNavigation();
    await expect(page).toHaveTitle("YouTube - Google Search");
    const matchedLink = page.getByText("https://www.youtube.com").first();
    await expect(matchedLink).toBeVisible();
  });
  test("should display Razorpay's dashboard on search", async ({ page }) => {
    await page.goto("https://www.google.com");
    const searchInput = await page.locator("textarea[title='Search']");
    await searchInput.fill("Razorpay");
    await searchInput.press("Enter");
    await page.waitForNavigation();
    await expect(page.getByRole('link', { name: 'Razorpay - Best Payment Solution' })).toBeVisible();
    await expect(page.getByRole('link', { name: new RegExp("Razorpay Dashboard") })).toBeVisible();
  });
});

test.describe("Google Search feeling lucky @flow=google", () => {
  test('should open doogles homepage on button click' , async ({ page }) => {
    await page.goto('https://www.google.com');
    const feelingLuckyButton = await page.locator(`input[value="I'm Feeling Lucky"]`).last();
    await feelingLuckyButton.click();
    await expect(page).toHaveURL('https://doodles.google');
  });
});
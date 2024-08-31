import { test, expect } from '@playwright/test';
import { BASE_URL, authFile } from './constants';

test.describe("Secure page", () => {
  test.use({ storageState: authFile });
  test("should allow visiting secure page without a login", async ({ page }) => {
    await page.goto(`${BASE_URL}/secure`, {waitUntil: 'domcontentloaded'});
    await expect(page.getByRole('heading', { name: 'Welcome to the Secure Area.' })).toBeVisible();
  });
});


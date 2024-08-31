import { test, expect } from '@playwright/test';
import { BASE_URL, authFile } from './constants';

test("Login", async ({ page }) => {
  await page.goto(`${BASE_URL}/login`, {waitUntil: 'domcontentloaded'});
  await page.getByLabel('Username').fill('practice');
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('You logged into a secure area!')).toBeVisible();
  await page.context().storageState({ path: authFile });
});

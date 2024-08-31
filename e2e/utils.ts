import { Page } from "@playwright/test";

export const searchForText = async (page: Page,searchText: string) => {
    const searchInput = page.locator("textarea[title='Search']");
    await searchInput.fill(searchText);
    await searchInput.press("Enter");
    await page.waitForNavigation();
}
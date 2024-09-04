import { test, expect } from '@playwright/test';

test.describe("Highest Level", () => {
  let x: number;
  x = 1;

  test.describe("Nesting One", () => {
    test("One", async ({ page }) => {
      expect(x).toBe(1);
      console.log("PASSED");
    });

    test("One v2", async ({ page }) => {
      expect(x).toBe(1);
      console.log("PASSED");
    });
  });

  test.describe("Nesting Two", () => {
    test("Two", async ({ page }) => {
      expect(x).toBe(1);
      console.log("PASSED");
    });

    test("Two v2", async ({ page }) => {
      expect(x).toBe(1);
      console.log("PASSED");
    });
  });
});

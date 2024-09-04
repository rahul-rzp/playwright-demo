import { test, expect } from '@playwright/test';

test.describe("Highest Level", () => {
  let x: number;
  x = 1;

  test.beforeAll(() => {
    console.log("--BEFORE all--");
  });

  test.beforeEach(() => {
    console.log("BEFORE each");
  });
  
  test.afterEach(() => {
    console.log("AFTER each");
  });

  test.afterAll(() => {
    console.log("--AFTER all--");
  });

  test("One", async ({ page }) => {
    expect(x).toBe(1);
  });

  test("One v2", async ({ page }) => {
    expect(x).toBe(1);
  });

  test("Two", async ({ page }) => {
    expect(x).toBe(1);
  });

  test("Two v2", async ({ page }) => {
    expect(x).toBe(1);
  });
});
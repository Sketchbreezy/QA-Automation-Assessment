import { test, expect } from '@playwright/test';

test('successful login', async ({ page }) => {
  // Open login page
  await page.goto('https://www.saucedemo.com/');

  // Enter username
  await page.locator('[data-test="username"]').fill('standard_user');

  // Enter password
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // Click login button
  await page.locator('[data-test="login-button"]').click();

  // Verify successful login
  await expect(page).toHaveURL(/inventory/);
});
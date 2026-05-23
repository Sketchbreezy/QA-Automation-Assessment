# Playwright Login Automation – SauceDemo

A simple end-to-end automation test for validating user login functionality on the SauceDemo application using Playwright.

---

## 🛠️ Prerequisites

Before running this project, ensure you have the following installed:

- Node.js (LTS version recommended)
- npm (comes with Node.js)

---

## 🚀 Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/Sketchbreezy/QA-Automation-Assessment.git
cd QA-Automation-Assessment
````

### 2. Install Playwright

```bash
npm init playwright@latest
```

> Select **JavaScript** when prompted

### 3. Install dependencies

```bash
npm install
```

---

## 🧪 Running Tests

### Run all tests (headless mode)

```bash
npx playwright test
```

### Run tests in headed mode (browser visible)

```bash
npx playwright test --headed
```

### Open Playwright UI mode

```bash
npx playwright test --ui
```

### View HTML test report

```bash
npx playwright show-report
```

---

## 🧠 Approach

For this test, I focused on keeping things simple and reliable by building a basic end-to-end login flow.

I started by navigating to the SauceDemo login page, then entered valid credentials and submitted the form. After that, I verified that the login was successful by checking that the user was redirected to the inventory page.

My main focus was clarity and stability, making sure the test is easy to read, easy to maintain, and reflects a real user journey from start to finish.

---

## 📌 Test File

The main test file is located inside the `tests/` folder and contains a single end-to-end login test written using Playwright’s test runner in JavaScript.

```javascript
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
```

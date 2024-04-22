import { browser } from 'k6/experimental/browser';
import { check } from 'k6';

export const options = {
  scenarios: {
    ui: {
      executor: 'shared-iterations',
      options: {
        browser: {
          type: 'chromium',
        },
      },
    },
  },
  thresholds: {
    checks: ['rate==1.0'],
  },
};

export default async function () {
  const context = browser.newContext();
  const page = context.newPage();

  try {
    page.goto('https://business60.capitecbank.co.za/');

    // Simulate user interactions with Playwright
    page.click('[aria-label="Username"]');
    page.type('[aria-label="Username"]', '12960489');
    page.press('[aria-label="Username"]', 'Tab');
    page.type('[aria-label="Password"]', 'Vodacom20!9');
    page.click('button[name="Sign In"]');
    page.click('button[name="Submit"]');
    page.type('[aria-label="Verification Code"]', '123456');
    page.click('button[type="submit"]');
    page.click('svg');
    page.click('button[name="Submit"]');
    page.click('button[name="Do This Later"]');
    page.click('div:has-text("Transact")');
    page.click('a[name="Payments"]');
    page.click('a:has-text("Saved beneficiary")');
    page.click('tr:has-text("A B Katane 1130992428 Rest") img');
    page.click('[aria-label="From account"]');
    page.click('capitec-label:has-text("0422 91")');
    page.click('omni-currency-field #inputField');
    page.click('button[name="Continue"]');
    page.click('button[name="Pay"]');
    page.click('button[name="Done"]');
    page.click('button[name="Sign Out"]');
  } finally {
    page.close();
  }
}
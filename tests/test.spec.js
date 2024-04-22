import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://business60.capitecbank.co.za/');
  await page.getByLabel('Username').click({
    button: 'right'
  });
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('12960489');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('Vodacom20!9');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('123456');
  await page.locator('svg').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Do This Later' }).click();
  await page.locator('div').filter({ hasText: 'Transact' }).first().click();
  await page.getByRole('link', { name: 'Payments' }).click();
  await page.getByText('Saved beneficiary').click();
  await page.getByRole('row', { name: 'A B Katane 1130992428 Rest' }).getByRole('img').click();
  await page.getByLabel('From account').click();
  await page.locator('capitec-label').filter({ hasText: '0422 91' }).click();
  await page.locator('omni-currency-field #inputField').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Pay' }).click();
  await page.getByRole('button', { name: 'Pay' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByRole('button', { name: 'Sign Out' }).click();
  await page.locator('button-group').getByRole('button', { name: 'Sign Out' }).click();
});
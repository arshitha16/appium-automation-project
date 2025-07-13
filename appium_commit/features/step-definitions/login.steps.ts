import { Given, When, Then } from "@wdio/cucumber-framework";
import loginPage from "../pageobjects/login.page";
import { strict as assert } from "assert";

Given(/^user is on the Dazn home page$/, async () => {
  await loginPage.btnLogin.waitForDisplayed({ timeout: 15000 });
});

When(/^user taps on the login button$/, async () => {
  await loginPage.btnLogin.click();
});

Then(/^user is redirected to the Dazn login screen$/, async () => {
  const loginPageVisiblity = await loginPage.loginScreen.isDisplayed();
  assert.equal(loginPageVisiblity, true, "Login page not displayed");
});

When(/^user enters valid credentials$/, async () => {
  await loginPage.daznLogin();
});

Then(/^user should be logged in successfully$/, async () => {
  await loginPage.footer.waitForDisplayed({ timeout: 15000 });
  assert.equal(
    await loginPage.footer.isDisplayed(),
    true,
    "Not able to see navigation footer after login"
  );
});

import { BeforeAll, AfterAll } from "@wdio/cucumber-framework";
import loginPage from "./pageobjects/login.page";
import logoutPage from "./pageobjects/logout.page";

BeforeAll(async () => {
  try {
    await loginPage.daznLogin();
    await loginPage.footer.waitForDisplayed({ timeout: 15000 });
  } catch (error) {
    console.log("BeforeAll hook: Login failed with error ", error);
  }
});

AfterAll(async () => {
  try {
    await logoutPage.exitFZ();
    await logoutPage.logout();
  } catch (error) {
    console.error("AfterAll hook: Logout failed with error ", error);
  }
});

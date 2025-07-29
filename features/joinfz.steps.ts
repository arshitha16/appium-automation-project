import { Given, When, Then } from "@wdio/cucumber-framework";
import joinfzPage from "../pageobjects/joinfz.page";
import * as assert from "assert";

Given(/^user is on the Home tab$/, async () => {
  await joinfzPage.tapIfExists(joinfzPage.btnPopup);
  await joinfzPage.homeTab.waitForDisplayed({ timeout: 10000 });
});

When(/^joins the event from search$/, async () => {
  await joinfzPage.btnSearch.waitForDisplayed({ timeout: 10000 });
  await joinfzPage.searchEvent();
});

Then(/^user should be able to see the Fanzone$/, async () => {
  await joinfzPage.fzHeader.waitForDisplayed({ timeout: 15000 });
  assert.equal(
    await joinfzPage.fzHeader.isDisplayed(),
    true,
    "Fanzone header is not displayed"
  );
});

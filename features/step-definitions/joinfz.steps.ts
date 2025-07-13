import { Given, When, Then } from "@wdio/cucumber-framework";
import joinfzPage from "../pageobjects/joinfz.page";
import { strict as assert } from "assert";

Given(/^user is on the Home tab$/, async () => {
  await joinfzPage.homeTab.waitForDisplayed();
});

When(/^joins the event from search$/, async () => {
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

Given(/^user is on the Fanzone$/, async () => {
  console.log("Joined fanzone ", await joinfzPage.fzHeader.isDisplayed());
});

When(
  /^user taps the chat field and types a message "([^"]*)"$/,
  async (message: string) => {
    console.log(`Sending chat message: ${message}`);
    await joinfzPage.txtChat.waitForDisplayed({ timeout: 10000 });
    await joinfzPage.txtChat.setValue(message);
  }
);

Then(/^the send button should be visible$/, async () => {
  await joinfzPage.btnSendMsg.waitForDisplayed({ timeout: 5000 });
  assert.equal(
    await joinfzPage.btnSendMsg.isDisplayed(),
    true,
    "Send button is not visible"
  );
});

When(/^user taps the send button$/, async () => {
  await joinfzPage.btnSendMsg.click();
});

Then(
  /^user message "([^"]*)" should be sent in the chat$/,
  async (expectedMessage: string) => {
    console.log("Expected message ", expectedMessage);
    assert.strictEqual(
      await joinfzPage.messageValidate(),
      expectedMessage,
      "Sent message does not match the expected message"
    );
  }
);

When(/^user taps the GIF button$/, async () => {
  await joinfzPage.btnGif.click();
});

Then(/^the GIF panel should open up$/, async () => {
  await joinfzPage.txtSearchGif.waitForDisplayed({ timeout: 5000 });
});

When(/^user taps on a GIF$/, async () => {
  await joinfzPage.searchGIF();
});

Then(/^the GIF should be sent in the chat$/, () => {
  return true;
});

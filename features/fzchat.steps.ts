import { Given, Then, When } from "@wdio/cucumber-framework";
import joinfzPage from "../pageobjects/joinfz.page";
import reactionsPage from "../pageobjects/reactions.page";
import * as assert from "assert";
import { swipe } from "../../utils/swipe";

Given(/^user is on the Fanzone$/, async () => {
  console.log("Joined fanzone ", await joinfzPage.fzHeader.isDisplayed());
});

When(/^sees gamification popups if joining for the first time$/, async () => {
  await joinfzPage.tapIfExists(joinfzPage.btnWelcomeBonus);
  await joinfzPage.tapIfExists(joinfzPage.btnChooseTeamClose);
});

When(
  /^user taps the chat field and types a message "([^"]*)"$/,
  async (message: string) => {
    console.log(`Sending chat message: ${message}`);
    await $(joinfzPage.txtChat).waitForDisplayed({ timeout: 10000 });
    await $(joinfzPage.txtChat).setValue(message);
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
  await joinfzPage.btnSendMsg.waitForDisplayed({ timeout: 10000 });
  await joinfzPage.btnSendMsg.click();
});

Then(
  /^user message "([^"]*)" should be sent in the chat$/,
  async (expectedMessage: string) => {
    assert.strictEqual(
      await joinfzPage.messageValidate(),
      expectedMessage,
      "Sent message does not match the expected message"
    );
  }
);

When(/^user taps the GIF button$/, async () => {
  await joinfzPage.btnGif.waitForDisplayed({ timeout: 5000 });
  await joinfzPage.btnGif.click();
});

Then(/^the GIF panel should open up$/, async () => {
  await $(joinfzPage.txtSearchGif).waitForDisplayed({ timeout: 5000 });
});

When(/^user taps on a GIF$/, async () => {
  await swipe(joinfzPage.txtSearchGif, "up");
});

Then(/^the GIF should be sent in the chat$/, async () => {
  const expectedDesc = await joinfzPage.sendGif();
  const actualDesc = await joinfzPage.gifValidate();
  assert.equal(
    actualDesc,
    expectedDesc,
    "GIF sent in the chat does not match the searched GIF"
  );
});

Given(/^the smiling reaction is visible$/, async () => {
  await reactionsPage.smiling.waitForDisplayed({ timeout: 3000 });
  console.log("Reactions available", await reactionsPage.smiling.isDisplayed());
});

When(
  /^the user drags the container, all 5 reactions are visible$/,
  async () => {
    await swipe(joinfzPage.txtChat, "left");
  }
);

Then(/^user should be able to send reactions in chat$/, async () => {
  for (const reaction of reactionsPage.reactions) {
    await reaction.button.waitForDisplayed({ timeout: 5000 });
    await reaction.button.click();
    console.log("Clicked reaction", reaction.name);
  }
});

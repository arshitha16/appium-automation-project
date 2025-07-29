import { $ } from "@wdio/globals";
import Config from "../../utils/config";

class JoinFanzone {
  public get homeTab() {
    return $(
      'android=new UiSelector().resourceId("com.dazn:id/bottom_nav_home")'
    );
  }
  public get btnPopup() {
    return 'android=new UiSelector().className("android.widget.Button")';
  }
  public get btnSearch() {
    return $(
      'android=new UiSelector().resourceId("com.dazn:id/toolbar_search")'
    );
  }
  public get txtEvent() {
    return $(
      'android=new UiSelector().resourceId("com.dazn:id/search_src_text")'
    );
  }
  public get eventTile() {
    return $('android=new UiSelector().resourceId("com.dazn:id/search_image")');
  }
  public get fzHeader() {
    return $(
      'android=new UiSelector().resourceId("com.dazn:id/header_background")'
    );
  }
  public get btnWelcomeBonus() {
    return 'android=new UiSelector().resourceId("com.dazn:id/welcome_bonus_collect_button")';
  }
  public get btnChooseTeamClose() {
    return 'android=new UiSelector().resourceId("com.dazn:id/choose_team_close_button")';
  }
  public get btnExpand() {
    return $(
      'android=new UiSelector().resourceId("com.dazn:id/watch_party_toggle")'
    );
  }
  public get txtChat() {
    return 'android=new UiSelector().resourceId("com.dazn:id/send_message")';
  }
  public get btnSendMsg() {
    return $('android=new UiSelector().resourceId("com.dazn:id/send_button")');
  }
  public get tglExpand() {
    return $(
      'android=new UiSelector().resourceId("com.dazn:id/watch_party_toggle")'
    );
  }
  public get allMessages() {
    return $$(
      'android=new UiSelector().resourceId("com.dazn:id/watch_party_message_item")'
    );
  }
  public get btnGif() {
    return $('android=new UiSelector().resourceId("com.dazn:id/giphy_button")');
  }
  public get txtSearchGif() {
    return 'android=new UiSelector().resourceId("com.dazn:id/searchInput")';
  }
  public get firstGIF() {
    return $(
      '//android.widget.ImageView[contains(@content-desc, "Football Sport GIF")]'
    );
  }

  public async tapIfExists(selector: string) {
    try {
      const element = await $(selector); // or any other element
      if ((await element.isExisting()) && (await element.isDisplayed())) {
        await browser.pause(3000);
        await element.click();
        console.log("Element found and clicked.", selector);
      } else {
        console.log("Element exists but not visible.", selector);
      }
    } catch (error) {
      console.log("Element not found, skipping.", selector);
    }
  }
  public async searchEvent() {
    try {
      await this.btnSearch.click();
      await this.txtEvent.setValue(Config.eventName);
      await this.eventTile.click();
    } catch (error) {
      console.log("Error while joining event ", error);
    }
  }
  public async messageValidate() {
    try {
      const msg = await this.allMessages;
      const lastContainer = msg[(await msg.length) - 1];
      const textViews = await lastContainer.$$(`android.widget.TextView`);
      const messageTextView = textViews[2];
      const actualText = await messageTextView.getText();
      return actualText;
    } catch (error) {
      console.log("Error while fetching sent message ", error);
    }
  }

  public async sendGif() {
    await $(this.txtSearchGif).setValue("football");
    await this.firstGIF.waitForDisplayed({ timeout: 5000 });
    const expectedDesc = this.firstGIF.getAttribute("content-desc");
    await this.firstGIF.click();
    return expectedDesc;
  }
  public async gifValidate() {
    try {
      const msg = await this.allMessages;
      const lastContainer = msg[(await msg.length) - 1];
      const imgView = await lastContainer.$(`android.widget.ImageView`);
      const gifDesc = await imgView.getAttribute("content-desc");
      return gifDesc;
    } catch (error) {
      console.log("Error while fetching GIF description ", error);
    }
  }
}
export default new JoinFanzone();

import { $ } from "@wdio/globals";

class JoinFanzone {
  public get homeTab() {
    return $(
      'android=new UiSelector().resourceId("com.dazn:id/bottom_nav_home")'
    );
  }
  public get btnPopup() {
    return $('android=new UiSelector().className("android.widget.Button")');
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
  public get btnExpand() {
    return $(
      'android=new UiSelector().resourceId("com.dazn:id/watch_party_toggle")'
    );
  }
  public get txtChat() {
    return $('android=new UiSelector().resourceId("com.dazn:id/send_message")');
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
    return $('android=new UiSelector().resourceId("com.dazn:id/searchInput")');
  }
  public get firstGIF() {
    return $(
      'android=new UiSelector().description("Media # 1 of 25 Football Sport GIF by ElevenSportsBE")'
    );
  }
  public async searchEvent() {
    try {
      await this.btnSearch.click();
      await this.txtEvent.setValue("ACL Cornhole");
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
      console.log("Actual message ", actualText);
      return actualText;
    } catch (error) {
      console.log("Error while fetching sent message ", error);
    }
  }
  public async searchGIF() {
    await browser.pause(4000);
    await this.txtSearchGif.waitForDisplayed({ timeout: 5000 });
    const { x, y } = await this.txtSearchGif.getLocation();
    const { height, width } = await this.txtSearchGif.getSize();

    // swipe from lower part to upper part
    await driver.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          {
            type: "pointerMove",
            duration: 0,
            x: x + width / 2,
            y: y + height * 0.8,
          },
          { type: "pointerDown", button: 0 },
          { type: "pause", duration: 200 },
          {
            type: "pointerMove",
            duration: 500,
            x: x + width / 2,
            y: y + height * 0.2,
          },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
    await this.txtSearchGif.setValue("football");
    await this.firstGIF.waitForDisplayed({ timeout: 5000 });
    await this.firstGIF.click();

    await browser.pause(5000);
  }
}
export default new JoinFanzone();

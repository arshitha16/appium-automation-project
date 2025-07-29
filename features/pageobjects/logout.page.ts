import { $ } from "@wdio/globals";
import loginPage from "./login.page";
import { swipe } from "../../utils/swipe";

class LogoutPage {
  public get player() {
    return $(
      'android=new UiSelector().resourceId("com.dazn:id/selection_border")'
    );
  }
  public get btnPlayerClose() {
    return $('//android.widget.ImageView[@resource-id="com.dazn:id/close"]');
  }
  public get btnBackSearch() {
    return $('android=new UiSelector().description("Navigate up")');
  }
  public get pageAccount() {
    return 'android=new UiSelector().resourceId("com.dazn:id/root")';
  }
  public get icnProfile() {
    return $(
      '//android.widget.FrameLayout[@resource-id="com.dazn:id/user_profile_avatar"]/android.view.View'
    );
  }
  public get icnUsername() {
    return $('android=new UiSelector().resourceId("com.dazn:id/user_name")');
  }
  public get btnLogout() {
    return $(
      'android=new UiSelector().resourceId("com.dazn:id/sign_out_layout")'
    );
  }
  public get popupLogout() {
    return $('android=new UiSelector().text("Log out?")');
  }
  public get btnLogoutPopup() {
    return $(
      'android=new UiSelector().className("android.widget.Button").instance(1)'
    );
  }
  public async exitFZ() {
    try {
      await this.player.waitForDisplayed();
      await this.player.click();
      console.log("clicked on player");
      console.log(
        "is close btn there",
        await this.btnPlayerClose.isDisplayed()
      );
      await this.btnPlayerClose.waitForDisplayed({ timeout: 5000 });

      await this.btnPlayerClose.click();
      await this.btnBackSearch.waitForDisplayed({ timeout: 5000 });
      await this.btnBackSearch.click();
    } catch (error) {
      console.log("Error while exiting FZ ", error);
    }
  }
  public async logout() {
    await this.icnProfile.click();
    await this.icnUsername.waitForDisplayed({ timeout: 5000 });
    await swipe(this.pageAccount, "up");
    await this.btnLogout.waitForDisplayed({ timeout: 5000 });
    await this.btnLogout.click();
    console.log("Logout option clicked");
    await this.popupLogout.waitForDisplayed({ timeout: 5000 });
    await this.btnLogoutPopup.click();
    console.log("Confirmed logout");
    await loginPage.btnLogin.waitForDisplayed({ timeout: 10000 });
  }
}
export default new LogoutPage();

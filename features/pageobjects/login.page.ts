import { $ } from "@wdio/globals";
import Config from "../../utils/config";
class LoginPage {
  public get btnLogin() {
    return $(
      'android=new UiSelector().className("android.widget.Button").instance(2)'
    );
  }
  public get loginScreen() {
    return $('android=new UiSelector().text("Log in or sign up")');
  }
  public get emailInput() {
    return $('android=new UiSelector().resourceId("EmailAddressField")');
  }
  public get btnNext() {
    return $('android=new UiSelector().text("Get started")');
  }
  public get passwordInput() {
    return $('android=new UiSelector().resourceId("PasswordField")');
  }
  public get login() {
    return $('android=new UiSelector().text("Log in")');
  }
  public get btnCookies() {
    return $(
      'android=new UiSelector().resourceId("com.dazn:id/btn_accept_cookies")'
    );
  }
  public get footer() {
    return $(
      'android=new UiSelector().resourceId("com.dazn:id/bottom_navigation_app_bar")'
    );
  }
  public async daznLogin() {
    try {
      await this.btnLogin.waitForDisplayed({ timeout: 10000 });
      await this.btnLogin.click();
      await this.emailInput.waitForDisplayed({ timeout: 5000 });
      await this.emailInput.setValue(Config.email);
      await this.btnNext.click();
      await this.passwordInput.setValue(Config.password);
      await this.login.click();
    } catch (error) {
      console.log("Error while logging in ", error);
    }
  }
}
export default new LoginPage();

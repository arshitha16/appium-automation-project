import { $ } from "@wdio/globals";

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
      await this.emailInput.setValue("arshitha.thallapally@dazn.com");
      await this.btnNext.click();
      await this.passwordInput.setValue("DAZNash2023");
      await this.login.click();
    } catch (error) {
      console.log("Error while logging in ", error);
    }
  }

  // public async acceptCookies() {
  //   try {
  //     const btnAccept = await this.btnCookies;
  //     const isVisible = await btnAccept.isDisplayed();
  //     if (isVisible) {
  //       btnAccept.click();
  //       console.log("Cookies accepted");
  //     } else {
  //       console.log("Button not visible, skipping...");
  //     }
  //   } catch (error) {
  //     console.log("Error occurred with cookies popup");
  //   }
  // }
}
export default new LoginPage();

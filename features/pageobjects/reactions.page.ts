class Reactions {
  reaction: any;
  public get smiling() {
    return $(
      'android=new UiSelector().resourceId("com.dazn:id/smiling_face_button")'
    );
  }
  public get clapping() {
    return $(
      'android=new UiSelector().resourceId("com.dazn:id/clapping_hands_button")'
    );
  }
  public get fingersCrossed() {
    return $(
      'android=new UiSelector().resourceId("com.dazn:id/fingers_crossed_button")'
    );
  }
  public get crying() {
    return $(
      'android=new UiSelector().resourceId("com.dazn:id/crying_face_button")'
    );
  }
  public get thumbsDown() {
    return $(
      'android=new UiSelector().resourceId("com.dazn:id/thumbs_down_button")'
    );
  }
  reactions = [
    { button: this.smiling, name: "smiling" },
    { button: this.clapping, name: "clapping" },
    { button: this.fingersCrossed, name: "fingersCrossed" },
    { button: this.crying, name: "crying" },
    { button: this.thumbsDown, name: "thumbsDown" },
  ];
}

export default new Reactions();

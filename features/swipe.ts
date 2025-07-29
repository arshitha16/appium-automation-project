export async function swipe(locator: string, direction: "up" | "left") {
  let x: number, y: number, height: number, width: number;
  await browser.pause(4000);
  await $(locator).waitForDisplayed({ timeout: 5000 });
  const element = await $(locator);
  ({ x, y } = await element.getLocation());
  ({ height, width } = await element.getSize());

  if (direction === "up") {
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
            y: y + height * 0.9,
          },
          { type: "pointerDown", button: 0 },
          { type: "pause", duration: 200 },
          {
            type: "pointerMove",
            duration: 500,
            x: x + width / 2,
            y: y + height * 0.1,
          },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
  }

  if (direction === "left") {
    await driver.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          {
            type: "pointerMove",
            duration: 0,
            x: x + width * 0.9,
            y: y + height / 2,
          },
          { type: "pointerDown", button: 0 },
          { type: "pause", duration: 200 },
          {
            type: "pointerMove",
            duration: 500,
            x: x + width * 0.1,
            y: y + height / 2,
          },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
  }
}

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (
    msg.formSetting &&
    msg.formSetting.formItems &&
    msg.formSetting.formItems.length > 0
  ) {
    sendResponse(msg.formSetting.formItems);
  }
});

type FormItem = {
  id: string;
  name: string;
  url: string;
  inputItems: InputItem[];
};

type InputItem = {
  type: string;
  selector: string;
  value: string;
};

const fillForm = (inputItem: InputItem) => {
  if (inputItem.type === "text") {
    const element = document.querySelector(
      inputItem.selector
    ) as HTMLInputElement;
    if (element) {
      element.value = inputItem.value;
    }
  } else if (inputItem.type === "radio") {
    const element = document.querySelector(
      inputItem.selector
    ) as HTMLInputElement;
    if (element) {
      element.checked = Boolean(inputItem.value);
    }
  } else if (inputItem.type === "checkbox") {
    const element = document.querySelector(
      inputItem.selector
    ) as HTMLInputElement;
    if (element) {
      element.checked = Boolean(inputItem.value);
    }
  } else if (inputItem.type === "select") {
    const element = document.querySelector(
      inputItem.selector
    ) as HTMLOptionElement;
    if (element) {
      element.selected = Boolean(inputItem.value);
    }
  }
};

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.formSetting) {
    const formSetting = JSON.parse(msg.formSetting);
    const formItems = formSetting.formItems as FormItem[];
    if (formItems && formItems.length > 0) {
      for (let i = 0; i < formItems.length; i++) {
        const formItem = formItems[i];
        const inputItems = formItem.inputItems;
        for (let j = 0; j < inputItems.length; j++) {
          const inputItem = inputItems[j];
          fillForm(inputItem);
        }
      }
    }
    sendResponse(`true`);
  } else {
    sendResponse("false");
  }
});

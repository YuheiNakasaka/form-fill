import { InputItem } from "./models/form";

// Trigger event to pass the validation of the general forms.
function triggerEvent(element: HTMLInputElement | HTMLSelectElement): void {
  const changeEvent = new Event("change");
  const blurEvent = new Event("blur");
  const clickEvent = new Event("click");
  element.dispatchEvent(blurEvent);
  element.dispatchEvent(clickEvent);
  element.dispatchEvent(changeEvent);
}

function getElement<T extends HTMLInputElement | HTMLOptionElement>(
  inputItem: InputItem
): T {
  return document.querySelector(inputItem.selector) as T;
}

const fillForm = (inputItem: InputItem) => {
  if (inputItem.type === "text") {
    const element = getElement<HTMLInputElement>(inputItem);
    if (element) {
      element.value = inputItem.value;
      triggerEvent(element);
    }
  } else if (inputItem.type === "select") {
    const element = getElement<HTMLOptionElement>(inputItem);
    if (element) {
      element.selected = Boolean(inputItem.value);
      const selectElement = element.closest("select");
      if (selectElement) {
        triggerEvent(selectElement);
      }
    }
  } else if (inputItem.type === "radio") {
    const element = getElement<HTMLInputElement>(inputItem);
    if (element) {
      element.click();
      triggerEvent(element);
    }
  } else if (inputItem.type === "checkbox") {
    const element = getElement<HTMLInputElement>(inputItem);
    if (element) {
      element.click();
      triggerEvent(element);
    }
  } else {
    const element = getElement<HTMLInputElement>(inputItem);
    if (element) {
      element.click();
      triggerEvent(element);
    }
  }
};

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  try {
    if (msg.type === "fillForm") {
      if (msg.inputItems) {
        const inputItems = msg.inputItems as InputItem[];
        for (let j = 0; j < inputItems.length; j++) {
          const inputItem = inputItems[j];
          fillForm(inputItem);
        }
        sendResponse(`true`);
      }
    }
  } catch (e) {
    sendResponse(`${e}`);
  }
});

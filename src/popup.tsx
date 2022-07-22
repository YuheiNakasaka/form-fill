import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { jsonExample } from "./data/example";
import { FormItem } from "./models/form";

const ListItem = ({ formItem }: { formItem: FormItem }) => {
  const [isFilled, setIsFilled] = useState(false);
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const fillForm = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];
      if (tab.id) {
        chrome.tabs.sendMessage(
          tab.id,
          {
            type: "fillForm",
            inputItems: formItem.inputItems,
          },
          (msg) => {
            setIsFilled(true);
          }
        );
      }
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "1rem",
          borderBottom: "1px solid #eee",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: isMouseEnter ? "#eee" : "#fff",
        }}
        onMouseEnter={() => setIsMouseEnter(true)}
        onMouseLeave={() => setIsMouseEnter(false)}
        onClick={fillForm}
      >
        <p>{formItem.name}</p>
        {isFilled && <p style={{ color: "green" }}>✓</p>}
      </div>
    </>
  );
};

const Popup = () => {
  const [formItems, setFormItems] = useState<FormItem[]>([]);

  useEffect(() => {
    chrome.storage.local.get(
      {
        formSetting: jsonExample,
      },
      (items) => {
        const formSetting = JSON.parse(items.formSetting);
        const formItems = formSetting.formItems as FormItem[];
        setFormItems(formItems);
      }
    );
  }, []);

  return (
    <>
      <div
        style={{
          minWidth: "350px",
          height: "500px",
        }}
      >
        <section
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
            backgroundColor: "#f5f5f5",
            borderBottom: "1px solid #eee",
          }}
        >
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            FormFill
          </p>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => {
              chrome.runtime.openOptionsPage();
            }}
          >
            Edit
          </p>
        </section>
        <section
          style={{
            width: "100%",
          }}
        >
          {formItems.length > 0 &&
            formItems.map((formItem) => (
              <ListItem key={formItem.id} formItem={formItem} />
            ))}
          {formItems.length === 0 && (
            <p
              style={{
                display: "flex",
                height: "450px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              No form items found.
            </p>
          )}
        </section>
      </div>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Popup = () => {
  const [status, setStatus] = useState(""); // debug用
  const [formSetting, setFormSetting] = useState("");

  useEffect(() => {
    chrome.storage.sync.get(
      {
        formSetting: "{}",
      },
      (items) => {
        setFormSetting(items.formSetting);
      }
    );
  }, []);

  const fillForm = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];
      if (tab.id) {
        chrome.tabs.sendMessage(
          tab.id,
          {
            formSetting: formSetting,
          },
          (msg) => {
            console.log("result message:", msg);
            setStatus(msg);
          }
        );
      }
    });
  };

  return (
    <>
      <div
        style={{
          minWidth: "100px",
          height: "100px",
        }}
      >
        <section>
          <button onClick={fillForm}>テスト</button>
        </section>
        <section>
          <p>{status}</p>
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

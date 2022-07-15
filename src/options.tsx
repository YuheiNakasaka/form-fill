import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Options = () => {
  const [status, setStatus] = useState("");
  const [formSettingText, setFormSettingText] = useState("{}");

  useEffect(() => {
    chrome.storage.sync.get(
      {
        formSetting: "{}",
      },
      (items) => {
        setStatus(`init: ${JSON.stringify(items)}`);
        setFormSettingText(items.formSetting);
      }
    );
  }, []);

  const setSettingText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormSettingText(e.target.value);
  };

  const saveOptions = () => {
    chrome.storage.sync.set(
      {
        formSetting: formSettingText,
      },
      () => {
        setStatus(`Saved: ${formSettingText}`);
        setFormSettingText(formSettingText);
      }
    );
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <section>
          <h2>Edit Form Setting</h2>
          <textarea
            placeholder="Input valid json"
            value={formSettingText}
            onChange={setSettingText}
          />
        </section>
        <section>{status}</section>
        <section>
          <button onClick={saveOptions}>Save</button>
        </section>
      </div>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>,
  document.getElementById("root")
);

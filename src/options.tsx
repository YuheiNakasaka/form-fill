import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

/*
  input type memo
  - text
    - value
  - radio
    - checked
  - select option
    - selected
  - checkbox
    - checked
*/

const Options = () => {
  const [status, setStatus] = useState("");
  const [formSettingText, setFormSettingText] = useState("{}");

  useEffect(() => {
    chrome.storage.sync.get(
      {
        formSetting: "{}",
      },
      (items) => {
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
        setFormSettingText(formSettingText);
        setStatus("Saved!");
        setTimeout(() => setStatus(""), 1000);
      }
    );
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "400px",
        }}
      >
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h2>Edit Form Setting</h2>
          <section
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <textarea
              placeholder="Input valid json"
              value={formSettingText}
              onChange={setSettingText}
              style={{ width: "95%", height: "300px" }}
            />
          </section>
          <section>
            <p style={{ color: "green" }}>{status}</p>
          </section>
          <section
            style={{
              margin: "1rem",
            }}
          >
            <button onClick={saveOptions}>Save</button>
          </section>
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

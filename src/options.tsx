import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { jsonExample } from "./data/example";

type StatusObject = {
  type: string;
  message: string;
};

const Options = () => {
  const [status, setStatus] = useState<StatusObject | null>(null);
  const [formSettingText, setFormSettingText] = useState("{}");

  useEffect(() => {
    chrome.storage.local.get(
      {
        formSetting: jsonExample,
      },
      (items) => {
        setFormSettingText(items.formSetting);
      }
    );
  }, []);

  const setSettingText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormSettingText(e.target.value);
  };

  const isValidJson = (text: string): boolean => {
    try {
      const object = JSON.parse(text);
      return object.formItems && Array.isArray(object.formItems);
    } catch (e) {
      return false;
    }
  };

  const saveOptions = () => {
    if (isValidJson(formSettingText)) {
      chrome.storage.local.set(
        {
          formSetting: formSettingText,
        },
        () => {
          if (chrome.extension.lastError !== undefined) {
            setStatus({
              type: "fail",
              message: `Error: ${chrome.extension.lastError}`,
            });
          } else {
            setStatus({
              type: "success",
              message: "Saved!",
            });
            setFormSettingText(formSettingText);
          }
          setTimeout(() => setStatus(null), 1000);
        }
      );
    } else {
      setStatus({
        type: "fail",
        message: "Invalid JSON!",
      });
      setTimeout(() => setStatus(null), 1000);
    }
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "400px",
          padding: "0 1rem",
        }}
      >
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <h2>Edit Form Data</h2>
          <section
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              margin: "1rem 0",
            }}
          >
            <textarea
              placeholder="Input valid json"
              value={formSettingText}
              onChange={setSettingText}
              style={{ width: "100%", height: "300px", padding: "0.5rem" }}
            />
          </section>
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "1rem",
            }}
          >
            {status &&
              (status.type === "success" ? (
                <p style={{ margin: "1rem 0", color: "green" }}>
                  {status.message}
                </p>
              ) : (
                <p style={{ margin: "1rem 0", color: "red" }}>
                  {status.message}
                </p>
              ))}
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

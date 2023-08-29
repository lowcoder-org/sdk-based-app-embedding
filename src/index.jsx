import React from "react";
import ReactDOM from "react-dom";
import { LowcoderAppView } from "lowcoder-sdk";

// for (
//   var i = 0;
//   i < document.querySelectorAll(".lowcoder-module-display").length;
//   i++
// ) {
// const App = () => (
//   <OpenblocksAppView
//     appId={document.getElementById("module-id").value}
//     baseUrl={
//       document.getElementById("locoder-backend-url")?.value ||
//       "https://api-prod.lowcoder.cloud"
//     }
//   />
// );
const opChangeDefault = (op) => {};
const onModuleEventTriggeredDefault = (op) => {};
for (
  var i = 0;
  i < document.querySelectorAll(".lowcoder-module-container").length;
  i++
) {
  const App = () => (
    <LowcoderAppView
      appId={
        document
          .querySelectorAll(".lowcoder-module-container")
          [i]?.querySelector(".module-id")?.value
      }
      onModuleOutputChange={
        typeof opChange !== "undefined" ? opChange : opChangeDefault
      }
      onModuleEventTriggered={
        typeof onModuleEventTriggered !== "undefined"
          ? onModuleEventTriggered
          : onModuleEventTriggeredDefault
      }
      moduleInputs={JSON.parse(
        document
          .querySelectorAll(".lowcoder-module-container")
          [i]?.querySelector(".module-input")?.value || "{}"
      )}
      baseUrl={
        document
          .querySelectorAll(".lowcoder-module-container")
          [i]?.querySelector(".locoder-backend-url")?.value ||
        "https://api-prod.lowcoder.cloud"
      }
    />
  );

  ReactDOM.render(
    React.createElement(App, {}, null),
    document
      .querySelectorAll(".lowcoder-module-container")
      [i]?.querySelector(".lowcoder-module-display")
  );
}
// }

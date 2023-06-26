import React from "react";
import ReactDOM from "react-dom/client";
import { registerServiceWorker } from "./utils/serviceWorker.ts";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

registerServiceWorker();
// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker.register("/service-worker.js");
// }

// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker.register("/sw.js", { scope: "/" });
//   });
// }

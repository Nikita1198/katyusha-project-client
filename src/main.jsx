import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { YMInitializer } from "react-yandex-metrika";
import YOUR_COUNTER_ID from "../config";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <YMInitializer accounts={[YOUR_COUNTER_ID]} options={{ webvisor: true }} />
    <App />
    <SpeedInsights />
    <Analytics />
  </React.StrictMode>,
);

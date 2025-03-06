import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root"); // 🔍 Ensure this exists in index.html

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

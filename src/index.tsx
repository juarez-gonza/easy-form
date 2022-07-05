import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App";

const domRoot = document.getElementById("root");
if (domRoot === null)
    throw new Error("React's root element not found");
const reactRoot = createRoot(domRoot);
reactRoot.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

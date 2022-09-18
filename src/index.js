import React from "react";
import { BrowserRouter } from "react-router-dom";

import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    // BrowserRouter is important to activate the router feature
    <BrowserRouter> 
        <App />
    </BrowserRouter>
    );
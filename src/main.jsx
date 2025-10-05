import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { RankingProvider } from "./context/RankingContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <RankingProvider>
                <App />
            </RankingProvider>
        </BrowserRouter>
    </React.StrictMode>
);

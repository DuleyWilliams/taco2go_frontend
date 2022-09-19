import React from "react"
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Taco2Go } from "./components/Taco2Go.js";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Taco2Go />
    </React.StrictMode>
);

reportWebVitals();


{/* <React.StrictMode>
<Router>
    <Taco2Go />
</Router>
</React.StrictMode>, */}
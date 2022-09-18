import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Taco2Go } from "./components/Taco2Go.js"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Taco2Go />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)




// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import {Taco2Go} from './components/Taco2Go';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Taco2Go />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

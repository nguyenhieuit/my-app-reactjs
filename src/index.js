import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./component/page/Home";
import About from "./component/page/About";
import Login from "./component/page/Login";
import Animal from "./component/page/Animal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <App>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/animal" element={<Animal />} />
            </Routes>
        </App>
    </Router>
    // <React.StrictMode>
    //     <App />
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

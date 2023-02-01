//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import SecondsCounter from "./component/SecondsCounter.jsx";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let counter = 0;




setInterval(() => {
    ReactDOM.render(<SecondsCounter number={counter}/>, document.querySelector("#app")), counter ++}, 1000);


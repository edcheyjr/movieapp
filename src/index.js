import React from "react";
import Reactdom from "react-dom";
import App from "./App";
import {AppProvider} from "./context";

// style
import "./index.css";


// import {BrowserRouter as Router} from 'react-router-dom';

Reactdom.render(
    <React.StrictMode>
    <AppProvider>
        <App/>   
    </AppProvider>
   
  </React.StrictMode>
, document.getElementById("root"));  
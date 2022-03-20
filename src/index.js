import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "./styles/themes";
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      
        <App />
     
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();



const firebaseConfig = {
  apiKey: "AIzaSyBWwsbVzwf2xVg_4c9G1m6Qd057lGXQsh0",
  authDomain: "personal-website-676d8.firebaseapp.com",
  projectId: "personal-website-676d8",
  storageBucket: "personal-website-676d8.appspot.com",
  messagingSenderId: "931419566873",
  appId: "1:931419566873:web:933afe3fcba4c188218b88",
  measurementId: "G-0GVWTLXSP9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics();
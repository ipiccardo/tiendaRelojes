import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from './CartContext/CartContext';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcqFykNvBwCfxgb4UcWsfgCp9yt50xwL8",
  authDomain: "watchshop-10095.firebaseapp.com",
  projectId: "watchshop-10095",
  storageBucket: "watchshop-10095.appspot.com",
  messagingSenderId: "256131105809",
  appId: "1:256131105809:web:1aa7f07291390bccb25db0"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
  <CartProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </CartProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

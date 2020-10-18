import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase'
import 'firebase/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyAHaN5-9CPI4cfnZFw6ylqiUFjWNZM_E-8",
  authDomain: "cart-978d6.firebaseapp.com",
  databaseURL: "https://cart-978d6.firebaseio.com",
  projectId: "cart-978d6",
  storageBucket: "cart-978d6.appspot.com",
  messagingSenderId: "854414615466",
  appId: "1:854414615466:web:993392b8f2fd082ee5c1d3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



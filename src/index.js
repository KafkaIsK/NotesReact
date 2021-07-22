import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDy9v6AW0ByBATcjcL1H_f0mSKjXE2LMk8",
    authDomain: "react-notes-app-36426.firebaseapp.com",
    databaseURL: "https://react-notes-app-36426-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-notes-app-36426",
    storageBucket: "react-notes-app-36426.appspot.com",
    messagingSenderId: "605969298847",
    appId: "1:605969298847:web:f416223de32c06998c39aa",
    measurementId: "G-MJ8HLZDX5E"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
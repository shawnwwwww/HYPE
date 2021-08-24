import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import { auth, firebaseFirestore } from './firebase'
import exports from '@google-cloud/firestore'

const functions = require('firebase-functions');

const db = firebaseFirestore;

exports.updateUser = functions.firestore
    .document('counters/{game_id}/shards/{shard_id}')
    .onUpdate((change, context) => {
      console.log("it's working")
      return db.collection('counters').doc(context.params.game_id).collection('shards').get().then((snapshot) => {
        let total_count = 0;
        snapshot.forEach((doc) => {
            total_count += doc.data().count;
        });
        
        return db.collection(context.params.game_id).doc('hype').update({
          hype: total_count
        })
      });
    });


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

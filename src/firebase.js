import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import exports from '@google-cloud/firestore'
const functions = require('firebase-functions');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const firebaseStorage = firebase.storage();
  const firebaseFirestore = firebase.firestore();
  const auth = firebaseApp.auth()

  exports.updateUser = functions.firestore
  .document('counters/{game_id}/shards/{shard_id}')
  .onUpdate((change, context) => {
    console.log("it's working")
    return firebaseFirestore.collection('counters').doc(context.params.game_id).collection('shards').get().then((snapshot) => {
      let total_count = 0;
      snapshot.forEach((doc) => {
          total_count += doc.data().count;
      });
      
      return firebaseFirestore.collection(context.params.game_id).doc('hype').update({
        hype: total_count
      })
    });
  });

  export {firebaseStorage, firebaseFirestore, auth};
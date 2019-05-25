import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyA8kL5boXnHTTH5daAtUEX3huCA-g9GbCo",
    authDomain: "mc-fan.firebaseapp.com",
    databaseURL: "https://mc-fan.firebaseio.com",
    projectId: "mc-fan",
    storageBucket: "mc-fan.appspot.com",
    messagingSenderId: "720260177717",
    appId: "1:720260177717:web:96d511cd769f6cee"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const firebaseDB = firebase.database();
  firebaseDB.ref('matches').once('value').then((snapshot)=>{ console.log('snapshot',snapshot.val()) })
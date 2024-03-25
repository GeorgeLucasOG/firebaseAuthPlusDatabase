import firebase from 'firebase/app';

import 'firebase/database';
import 'firebase/auth';


  let firebaseConfig = {
    apiKey: "AIzaSyDY2dzo5L33vwGPRQ3at2JJwNNNBCqUpRo",
    authDomain: "meuapp-6e67a.firebaseapp.com",
    databaseURL: "https://meuapp-6e67a-default-rtdb.firebaseio.com",
    projectId: "meuapp-6e67a",
    storageBucket: "meuapp-6e67a.appspot.com",
    messagingSenderId: "690806246919",
    appId: "1:690806246919:web:615f43ae823a2fa399a4a2",
    measurementId: "G-ZV2V2J8P9F"
  };

  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
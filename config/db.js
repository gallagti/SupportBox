import * as firebase from 'firebase';

// Initialize Firebase
//TODO change configs
const firebaseConfig = {
  apiKey: "AIzaSyDcEeWJw_U7T_Nm7uto-J5GCz9jHeEPJd0",
  authDomain: "supportbox-dd807.firebaseapp.com",
  databaseURL: "https://supportbox-dd807.firebaseio.com",
  projectId: "supportbox-dd807",
  storageBucket: "supportbox-dd807.appspot.com",
};

firebase.initializeApp(firebaseConfig);

firebase.auth().signInAnonymously().catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

export const db = firebase.database();

/*
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

//firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

/*
onAuthStateChanged = user => {
  if (!user) {
    try {
      firebase.auth().signInAnonymously();
    } catch ({ message }) {
      alert(message);
    }
  }
};
*/

//export const db = firebase;

/*

get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get ref(path) {
    return firebase.database().ref(path);
  }

  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    const message = {
      _id,
      timestamp,
      text,
      user,
    };
    return message;
  };

  on = callback =>
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }
  // send the message to the Backend
  send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        timestamp: this.timestamp,
      };
      this.append(message);
    }
  };

  append = message => this.ref.push(message);

  // close the connection to the Backend
  off() {
    this.ref.off();
  }
}

//export const db = firebase.database();
db.shared = new db();
export default db;
*/

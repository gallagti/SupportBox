import firebase from 'firebase'; // 4.8.1

class Fire {
  constructor() {
    this.init();
    this.observeAuth();
  }

  init = () =>
    firebase.initializeApp({
      apiKey: "AIzaSyDcEeWJw_U7T_Nm7uto-J5GCz9jHeEPJd0",
      authDomain: "supportbox-dd807.firebaseapp.com",
      databaseURL: "https://supportbox-dd807.firebaseio.com",
      projectId: "supportbox-dd807",
      storageBucket: "supportbox-dd807.appspot.com",
    });

  observeAuth = () =>
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

  onAuthStateChanged = user => {
    if (!user) {
      try {
        firebase.auth().signInAnonymously();
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get messagesref() {
    return firebase.database().ref('\Messages');
  }

  get groupsref() {
    return firebase.database().ref('\Groups');
  }

/*
  get groupmessage(groupKey){
    return firebase.database().ref('\Messages').orderByKey().equalTo(groupKey);
  }
  */

  groupmessage = groupKey => {
    return firebase.database().ref('\Messages').orderByKey().equalTo(groupKey);
  }

  get group1ref() {
    return firebase.database().ref('\Messages').orderByKey().equalTo("1");
  }

  get rootdatabase(){
    return firebase;
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
    //groupMessageRef
    this.messagesref.child("1")
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

  append = (message) => this.messagesref.child("1").push(message);

  // close the connection to the Backend
  off() {
    this.messagesref.child("1").off();
  }
}

Fire.shared = new Fire();
export default Fire;

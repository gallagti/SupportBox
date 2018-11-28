import firebase from 'firebase'; // 4.8.1
import {
  AsyncStorage
} from 'react-native';

class Fire {
  constructor() {
    this.init();
    this.observeAuth();
  }

  init = () =>
    firebase.initializeApp({
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
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


  get_group_key = async() => {
    try {
      const value = await AsyncStorage.getItem('group_key');
      if(value !== null){
        //return value;
          alert('value from groupScreen = ' + value);
      }
      else alert('value is null');
    }
    catch (error){
      alert('error retrieving the group messages, please contact the developers')
    }
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

  addGroup = groupName =>
    this.groupsref.push({
      Name: groupName
    })


  on = async callback => {
    //groupMessageRef
    var group_key = await AsyncStorage.getItem('group_key');
    this.messagesref.child(group_key)
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));
}
/*
async on(callback){
  try{
    var group_key = await AsyncStorage.getItem('group_key');
  }
  catch (error){
    alert('error retrieving the group messages, please contact the developers')
  }
  finally{
    this.messagesref.child(group_key)
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));
  }
}
*/

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }
  // send the message to the Backend
  send = async messages => {
    var group_key = await AsyncStorage.getItem('group_key');

    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        timestamp: this.timestamp,
      };
      this.append(message, group_key);
    }
  };

  append = (message, group_key) => this.messagesref.child(group_key).push(message);

  // close the connection to the Backend
  off = group_key => {
    this.messagesref.child(group_key).off();
  }
}

Fire.shared = new Fire();
export default Fire;

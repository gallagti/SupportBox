import React, { Component } from 'react';
//import Icon from 'react-native-vector-icons/FontAwesome';
import {StackNavigator} from "react-navigation";
import GroupScreen from "./GroupScreen.js";

import {
  View,
  Text,
  StyleSheet,
  Alert,
  ListView,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import {
  Content,
  Header,
  Left,
  Right,
  Body,
  Button,
  Icon,
  Title
} from 'native-base';
import GroupComponent from '../components/GroupComponent';
import { GiftedChat, Actions, Bubble } from 'react-native-gifted-chat';

//import {db} from '../config/db';
import Fire from "../config/newdb";

export default class MyGroupsScreen extends React.Component<Props> {
  constructor(props){
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      messages: [],
      groupKey: '',
      loadEarlier: true,
      typingText: null,
      isLoadingEarlier: false,
      //groups: [],
      //dataSource: ds,
    //  group: "",
      //currentUser: null
    }

    //group: this.props.navigation.state.params.group

    //this.groupsRef = this.getRef();
    this.pressRow = this.pressRow.bind(this);
    this.renderRow = this.renderRow.bind(this);
    //this.getGroups = this.getGroups.bind(this);
  }
/*
  componentDidMount() {
    db.auth().onAuthStateChanged(user => {
      if (!user) {
        try {
          db.auth().signInAnonymously();
        } catch ({ message }) {
          alert(message);
        }
      }
    })

     this.setState({
      // currentUser: this.props.navigation.state.params.name
     });
  }
  */

  static navigationOptions = ({navigation}) => ({
    header: (
      <Header>
        <Left style={styles.header}>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body style={styles.headercenter}>
        <Title>Welcome </Title>
        </Body>
        <Right style={styles.headerright}/>
      </Header>
    )
    //headerTransparent: true
  });

  getRef(){
    return db.database().ref('/Groups');
  }



    getGroupMessages(groupsRef){
      var groupKey = this.props.navigation.state.params.group;
    // listen for changes to the tasks reference, when it updates we'll get a
    // dataSnapshot from firebase
    db.database().ref('\Messages').orderByKey().equalTo(groupKey).on('value', (dataSnapshot) => {
      // transform the children to an array
      var messages = [];
      dataSnapshot.forEach((child) => {
        alert("pushing message");
        messages.push({
          author: child.val().author,
          message: child.val().message,
          _key: child.key
        });
      });
       // Update the state with the new tasks
       messages.push({
         author: "manual entry",
         message: "if this is the only entry then no messages were added",
       });
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(messages)
      });
    });

  }

/*
  getGroupMessages(groupsRef){
    var groupKey = this.props.navigation.state.params.group;
  // listen for changes to the tasks reference, when it updates we'll get a
  // dataSnapshot from firebase
  db.ref('\Messages').orderByKey().equalTo(groupKey).on('value', (dataSnapshot) => {
    // transform the children to an array
    var messages = [];
    dataSnapshot.forEach((child) => {
      //should only return one, but need to loop again to go through
      //all the subchildren
      child.forEach((subchild) => {
        //alert("pushing message");
        messages.push({
          _id: subchild.key
          timestamp:
          text:
          user:
        //  author: subchild.val().author,
        //  message: subchild.val().message,
        //  _key: child.key
        });
      });
    });
     // Update the state with the new tasks
     messages.push({
       author: "manual entry",
       message: "if this is the only entry then no messages were added in this group",
     });
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(messages)
    });
  });

}
*/

    pressRow(){
      //console.log(group)
    }

    renderRow(message){
      return(
          <Text>
            Author: {message.author}
            {"\n"}
            Message: {message.message}
            {"\n"}
            {"\n"}
          </Text>
      );
    }

    get user() {
    return {
      name: "you",
      _id: Fire.shared.uid,
    };
  }

    render(){
      var groupMessageRef = Fire.shared.groupmessage("1");
      return(
        <GiftedChat
          messages = {this.state.messages}
          onSend={Fire.shared.send}
          user= {this.user}
          />
        /*
        <ScrollView style={styles.container}>
          <View>
            <Content>
              <ListView
                dataSource={this.state.dataSource}
                enableEmptySections={true}
                renderRow={this.renderRow}
                style={styles.listView}
              />
            </Content>
          </View>
        </ScrollView>
        */
      );
    }

    componentDidMount() {
      //var groupMessageRef = Fire.shared.groupmessage("1");
      Fire.shared.on(message =>
            this.setState(previousState => ({
              messages: GiftedChat.append(previousState.messages, message),
            }))
          );
    }
    componentWillUnmount(){
      Fire.shared.off();
      //this.getGroupMessages(this.groupsRef)
    }
}
const styles = StyleSheet.create({
  listView: {
    flex: 1,
  },
  JoinAGroupButton: {
       marginBottom: 15,
       height: 70,
     },
  text:{
    color: 'white',
  },
  item: {
    marginBottom: 15,
    height: 70,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  container: {
    flex: 1,
    backgroundColor: '#57caff',
  },
  header: {
    flex: 1,
  },
  headercenter: {
    flex: 2,
  },
  headerright: {
    flex: 0,
  }
  })

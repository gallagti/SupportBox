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
  AsyncStorage,
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



/*
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
          text: child.val().message,
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
*/
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


    render(){
      var groupMessageRef = this.get_group_key;
      //alert(groupKey);
      return(
        <GiftedChat
          messages = {this.state.messages}
          onSend={Fire.shared.send}
          user= {this.user}
          />
      );
    }

    async componentDidMount() {
      var AsyncVal = await AsyncStorage.getItem('group_key');
      await this.setState({
        groupKey: AsyncVal,
      })
      //alert('group key in groupscreen = ' + this.state.groupKey)
      //var groupMessageRef = Fire.shared.groupmessage("1");
      //Fire.shared.messagesref.child("-LRPm6qpHonvge63oMKl").remove();
      Fire.shared.on(message =>
            this.setState(previousState => ({
              messages: GiftedChat.append(previousState.messages, message),
            }))
          );
/*
      Fire.shared.on(message =>
            this.setState(previousState => ({
              messages: GiftedChat.append(previousState.messages, message),
            })), this.state.groupKey
          );

          */
    }


    componentWillUnmount(){
      Fire.shared.off(this.state.groupKey);
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

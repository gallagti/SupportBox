import React, { Component } from 'react';
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
    }

    this.renderRow = this.renderRow.bind(this);
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
  });

  getRef(){
    return db.database().ref('/Groups');
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
      Fire.shared.on(message =>
            this.setState(previousState => ({
              messages: GiftedChat.append(previousState.messages, message),
            }))
          );
    }

    componentWillUnmount(){
      Fire.shared.off(this.state.groupKey);
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
    flex: 0,
    paddingLeft: 6,
    width: 62
  },
  headercenter: {
    flex: 1,
  },
  headerright: {
    flex: 0,
  }
  })

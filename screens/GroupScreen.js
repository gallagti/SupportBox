import React, { Component } from 'react';
import {StackNavigator} from "react-navigation";
import GroupScreen from "./GroupScreen.js";
import {
  Platform
} from 'react-native';

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
import { GiftedChat, Actions, Bubble} from 'react-native-gifted-chat';
import KeyboardSpacer from 'react-native-keyboard-spacer';


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
      <View style={{paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
      <Header>
        <Left style={styles.header}>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body style={styles.headercenter}>
        <Title>{navigation.getParam('groupName', 'No Name')} </Title>
        </Body>
        <Right style={styles.headerright}/>
      </Header>
      </View>
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
      return(
        <View style={{flex:1}}>
        <GiftedChat
          messages = {this.state.messages}
          onSend={Fire.shared.send}
          user= {this.user}
          />
          <KeyboardSpacer/>
        </View>

      );
    }
    //var groupMessageRef = this.get_group_key;

    async componentDidMount() {
      var AsyncVal = await AsyncStorage.getItem('group_key');
      var AsyncGroupName = await AsyncStorage.getItem('group_name');


      await this.setState({
        groupKey: AsyncVal,
      })

      this.props.navigation.setParams({
        groupName: AsyncGroupName
      })

      Fire.shared.on(message =>
            this.setState(previousState => ({
              messages: GiftedChat.append(previousState.messages, message),
            }))
          );
    }

    async changeGroupName(){
      var AsyncGroupName = await AsyncStorage.getItem('group_name');
      await this.setState({
        groupName: AsyncGroupName
      })
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
    flex: 1,
  },
  headercenter: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerright: {
    flex: 1,
  }
  })

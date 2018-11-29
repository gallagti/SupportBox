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

import Fire from "../config/newdb";

export default class MyGroupsScreen extends React.Component {
  constructor(){
    super();
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      groups: [],
      dataSource: ds,
      group: "",
      currentUser: ""
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
          <Title>Available Groups</Title>
        </Body>
        <Right style={styles.headerright}/>
      </Header>
      </View>
    )
  });

  componentWillMount(){
    this.getGroups(Fire.shared.groupsref)
  }

  componentDidMount(){
    this.getGroups(Fire.shared.groupsref)
  }

    getGroups(groupsRef){
    groupsRef.on('value', (dataSnapshot) => {
      // transform the children to an array
      var tasks = [];
      dataSnapshot.forEach((child) => {
        tasks.push({
          name: child.val().Name,
          _key: child.key
        });
      });
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(tasks)
      });
    });
  }

    store_group_key = async groupKey => {
      await AsyncStorage.setItem('group_key', groupKey);
      const value = await AsyncStorage.getItem('group_key');
      if(value === null){
        alert('value is null');
      }
    }
    store_group_name = async groupName => {
      await AsyncStorage.setItem('group_name', groupName);
      const value = await AsyncStorage.getItem('group_name');
      if(value === null){
        alert('value is null');
      }
    }

    renderRow(group){
      return(
        <Button
        block style = {styles.JoinAGroupButton}
        onPress={() => {
          try{
            this.store_group_key(group._key)
          }
          catch(error){
            alert('error retrieving the group messages, please contact the developers')
          }
          try{
            this.store_group_name(group.name);
          }
          catch(error){
            alert('error retrieving the group name, please contact the developers')
          }
          finally{
            this.props.navigation.navigate('GroupScreen')
          }
        }}
        >
          <Text>
            {group.name}
          </Text>
        </Button>
      );
    }

    render(){
      return(
        <ScrollView style={styles.container}>

        <View style={styles.anotherstyle}>
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
      );
    }
}

const styles = StyleSheet.create({
  listView: {
    flex: 1,
  },
  anotherstyle:{
    marginTop: 15,
  },
  headerTitleStyle:{
      flex:0.6,
      textAlign: 'center',
      alignSelf: 'center',
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

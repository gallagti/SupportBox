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

import Fire from "../config/newdb";

export default class BoxRegisterScreen extends React.Component {
  constructor(){
    super();
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      groups: [],
      dataSource: ds,
      group: "",
      currentUser: "",
      box_num: null
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
          <Title>Tap Group To Register!</Title>
        </Body>
        <Right style={styles.headerright}/>
      </Header>
    )
  });

  async componentWillMount(){
    var AsyncVal = await AsyncStorage.getItem('box_key');
    await this.setState({
      box_num: AsyncVal
    })
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

    renderRow(group){
      return(
        <Button
        block style = {styles.JoinAGroupButton}
        onPress={() => {
          try{
            Fire.shared.box_groupid_update(group._key)
          }
          catch(error){
            alert('error Registering your box, please contact the developers')
          }
          finally{
            alert('Box ' + this.state.box_num
              +' successfully registered to ' + group.name)
            this.props.navigation.goBack()
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
      );
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

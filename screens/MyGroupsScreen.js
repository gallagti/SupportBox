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

import {db} from '../config/db';

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

export default class MyGroupsScreen extends React.Component {
  constructor(){
    super();
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      groups: [],
      dataSource: ds,
      group: ""
    }


    this.groupsRef = this.getRef();
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
          <Title>Available Groups</Title>
        </Body>
        <Right style={styles.headerright}/>
      </Header>
    )
    //headerTransparent: true
  });

  getRef(){
    return db.ref('/Groups');
  }

  componentWillMount(){
    this.getGroups(this.groupsRef)
  }

  componentDidMount() {

    this.getGroups(this.groupsRef)
  }

    getGroups(groupsRef){
    // listen for changes to the tasks reference, when it updates we'll get a
    // dataSnapshot from firebase
    db.ref('\Groups').on('value', (dataSnapshot) => {
      // transform the children to an array
      var tasks = [];
      dataSnapshot.forEach((child) => {
        tasks.push({
          name: child.val().Name,
          _key: child.key
        });
      });
       // Update the state with the new tasks
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(tasks)
      });
    });
  }

    pressRow(){
      //console.log(group)
    }

    renderRow(group){
      return(
        <Button
        block style = {styles.JoinAGroupButton}
        onPress={() =>
        //  alert("pressed")}
          this.props.navigation.navigate('GroupScreen', {group: group._key})}
        >

          <Text>
            {group.name}
          </Text>
        </Button>
      );
    }
    //alert("you pressed me")}
    //this.props.navigation.navigate('GroupScreen', {group: group})}

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

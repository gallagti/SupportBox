import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ListView,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import GroupComponent from '../components/GroupComponent';

import {db} from '../config/db';
//import * as firebase from 'firebase';

//let groupsRef = db.ref('/Groups')

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#57caff',
    }
  })

export default class MyGroupsScreen extends React.Component {
  constructor(){
    super();
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      groups: [],
      GroupDataSource: ds
    }


    //this.groupsRef = this.getRef().child('Groups')
    this.groupsRef = this.getRef();
    this.renderRow = this.renderRow.bind(this);
    this.pressRow = this.pressRow.bind(this);

  }

  getRef(){
    return db.ref('/Groups');
  }

  componentWillMount(){
    this.getGroups(this.groupsRef)
  }

  componentDidMount() {

    //this.getGroups(this.groupsRef)
    this.getGroups(this.groupsRef)
    }

    getGroups(groupsRef){
      /*
      Alert.alert(
        'getGroups called'
      );

      db.ref('/Groups').on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          this.state.groups.push({
              name: childSnapshot.val().Name,
              _key: childSnapshot.key
          });
        });
        this.setState({
          GroupDataSource: this.state.GroupDataSource.cloneWithRows(groups)
      });
      });

*/
      db.ref('/Groups').on('value', (snap) => {
        //let groups = [];
        snap.forEach((child) => {
          this.state.groups.push({
            name: child.val().Name,
            _key: child.key
          });
        });
        this.setState({
          groups: this.state.groups
        });
      });

    }

    pressRow(){
      //console.log(group)
    }

    renderRow(group){
      return(
          <View>
            <Text>
              {group.name}
            </Text>
          </View>
      );
    }

    render() {
        return (
            <View style={styles.container}>
              <GroupComponent groups={this.state.groups} />
            </View>
        )
    }
}

/*
              this.state.GroupDataSource.length > 0
              ? <GroupComponent groups={this.state.groups} />
              : <Text>No groups</Text>

                  <ListView
                    dataSource={this.state.GroupDataSource}
                    renderRow={this.renderRow}
                  />
                  */
                //  <GroupComponent groups={this.state.groups} />

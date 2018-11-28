import React, { Component } from 'react';
import {  View, Text, StyleSheet, ScrollView} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#57caff' ,
  },
    groupsList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
  groupstext: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

//export default class GroupComponent extends Component {
class GroupComponent extends Component {


  constructor(props){
    //super(props);
    super(props);
    let ds = [...(new Set(this.props.groups.map(({group}) => group)))];
    this.state = {
      unikeys: ds
    }
    this.setState({
      unikeys: this.state.unikeys
    })
  }


  static propTypes = {
      groups: PropTypes.array.isRequired
  };

//this still doesnt work!
  arrayUnique (arr) {
  	return arr.filter(function(item, index){
  		return arr.indexOf(item) >= index;
  	});
  };


  render() {
    //failed attemp at removing duplicates...
    //const uniq = Array.from(new Set(this.props.groups))

    return (
      <ScrollView style={styles.container}>
        {

        //  this.arrayUnique(this.props.groups).map((group, index) => {
        //this.props.groups.forEach(function(group) {
        this.arrayUnique(this.props.groups).forEach(function(group) {
            return (
                //<View key={index}>
                <View>
                    <Text style={styles.groupstext}>
                    {group.name}
                    </Text>
                </View>
            )
        })
        }
      </ScrollView>
    );
  }
}

/*
this.props.groups.filter((group, index) => {
  if(group.indexOf(index) > (this.props.groups.Length/2)){
    return false;
  }
}).map((group, index) => {
  return (
      <View key={index}>
          <Text style={styles.groupstext}>
          {group.name}
          </Text>
      </View>
  )
})}

  this.props.groups.map((group, index) => {
    return (
        <View key={index}>
            <Text style={styles.groupstext}>
            {group.name}
            </Text>
        </View>
    )
})}


*/
export default GroupComponent;

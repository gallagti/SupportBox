import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
//import * as firebase from 'firebase';
import { Container, Content, Header, Form, Input, Item, Button, Label, List, ListItem } from 'native-base'

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  Text,
  View,
  Alert,
} from 'react-native';
// Import statements go here, this includes pictures or tile pics from a file

import { WebBrowser } from 'expo';
//import { MonoText } from '../components/StyledText';
import settingIcon from '../assets/images/settingIcon.png';
import boxIcon from '../assets/images/SupportBoxMainLogoTranUpdated.png';
import groupPic from '../assets/images/hands.png'
//import HomeScreen from "./HomeScreen.js";

import { addGroup } from '../services/addGroup';

export default class MyGroupsScreen extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        name: 'null',
        //error: false
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
      this.setState({
        name: e.nativeEvent.text
      });
    }
    handleSubmit() {
      //console.log(this.state.name)
      addGroup(this.state.name);
      Alert.alert(
        'new group created'
      );
    }

    render() {
    return (
      <ScrollView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Add Group</Text>
        <TextInput
              style={styles.itemInput}
              placeholder="Type group name here"
              onChange={this.handleChange}
            />
        <TouchableHighlight
                style = {styles.MyGroupsButton}
                underlayColor= "white"
                onPress = {this.handleSubmit}
              >
              <Text
                  style={styles.buttonText}>
                  Add
              </Text>
            </TouchableHighlight>
      </View>

      </ScrollView>


    )
  }
};

   const styles = StyleSheet.create({
     main: {
         flex: 1,
         padding: 30,
         flexDirection: 'column',
         justifyContent: 'center',
         backgroundColor: '#2a8ab7'
       },
       title: {
         marginBottom: 20,
         fontSize: 25,
         textAlign: 'center'
       },
       itemInput: {
         height: 50,
         padding: 4,
         marginRight: 5,
         fontSize: 23,
         borderWidth: 1,
         borderColor: 'white',
         borderRadius: 8,
         color: 'white'
       },
       buttonText: {
         fontSize: 18,
         color: '#111',
         alignSelf: 'center'
       },
       button: {
         height: 45,
         flexDirection: 'row',
         backgroundColor:'white',
         borderColor: 'white',
         borderWidth: 1,
         borderRadius: 8,
         marginBottom: 10,
         marginTop: 10,
         alignSelf: 'stretch',
         justifyContent: 'center'
       },

     JoinAGroupButton: {
       marginBottom: 15,
       height: 70,
     },
     SearchAGroupButton: {
       marginBottom: 15,
       height: 70,
     },

     MyGroupsText: {
       fontSize: 42,
       color: 'rgba(252, 249, 233, 1)',
       lineHeight: 40,
       textAlign: 'center',
       fontWeight: 'bold',
       marginBottom: 10,
     },
     BoxIcon: {
       resizeMode: 'contain',
       width: 200,
       height: 200,
       marginTop: 20,
       marginBottom: 20,
       alignSelf: 'center',
     },
     navigationFilename: {
       marginTop: 5,
     },
     tabBarInfoContainer: {
       position: 'relative',
       bottom: 0,
       left: 0,
       right: 0,
       top: 10,
       ...Platform.select({
         ios: {
           shadowColor: 'black',
           shadowOffset: { height: -3 },
           shadowOpacity: 0.1,
           shadowRadius: 3,
         },
         android: {
           elevation: 20,
         },
       }),
       alignItems: 'center',
       backgroundColor: '#0f5870', // Good secondary color
       paddingVertical: 20,
     },
     tabBarInfoText: {
       fontSize: 17,
       color: 'rgba(252, 249, 233, 1)',
       textAlign: 'center',
     },

   });

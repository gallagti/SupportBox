import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
//import * as firebase from 'firebase';
import { Container, Header, Content, Button, Text, Left, Body, Title, Right} from 'native-base';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
// Import statements go here, this includes pictures or tile pics from a file

import { WebBrowser } from 'expo';
//import { MonoText } from '../components/StyledText';
import settingIcon from '../assets/images/settingIcon.png';
import boxIcon from '../assets/images/SupportBoxMainLogoTranUpdated.png';
import groupPic from '../assets/images/hands.png'





export default class SearchGroupScreen extends React.Component {
  static navigationOptions = {
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Search Group</Title>
        </Body>
        <Right />
      </Header>
    )
    //headerTransparent: true
  };

  render() {
      const {navigate} = this.props.navigation;
       return (
         <View style={styles.BoxIcon}>
         <Text>
         Search for groups here
         </Text>
         </View>



/*
          <ScrollView style={styles.container}>
                   <View style={styles.BoxIcon}>

                       <Image
                           style={styles.BoxIcon}
                           source={require('../assets/images/SupportBoxMainLogoTranUpdated.png')}
                       />

                       <Text>
                       Here are your Groups
                       </Text>

                   </View>
           </ScrollView>
           */
       );
   }
 }


   const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: '#57caff' ,
     },
     MyGroupsButton: {
       marginTop: 50,
       marginBottom: 15,
       height: 70,
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

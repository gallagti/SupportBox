import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Content, Button, Text } from 'native-base';
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
import { MonoText } from '../components/StyledText';
import settingIcon from '../assets/images/settingIcon.png';
import boxIcon from '../assets/images/SupportBoxMainLogoTranUpdated.png';
import groupPic from '../assets/images/hands.png'

export default class MyGroupsScreen extends React.Component {
  static navigationOptions = {
    headerTransparent: true
  };

  render() {
       return (
          <ScrollView style={styles.container}>
                   <View style={styles.BoxIcon}>

                       <Image
                           style={styles.BoxIcon}
                           source={require('../assets/images/SupportBoxMainLogoTranUpdated.png')}
                       />

                   </View>

                   <View>
                      
                      <Content>
                        <Button block style = {styles.MyGroupsButton}>
                          <Text>My Groups</Text>
                        </Button>
                        <Button block style = {styles.JoinAGroupButton}>
                          <Text>Join a Group</Text>
                        </Button>
                        <Button block style = {styles.SearchAGroupButton}>
                          <Text>Search for a Group</Text>
                        </Button>
                      </Content>
                   </View>
                   <View>

               </View>

           </ScrollView>

       )
   };
 }



   const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: '#57caff',
     },
     MyGroupsButton: {
       marginBottom: 15,
     },
     JoinAGroupButton: {
       marginBottom: 15,
     },
     SearchAGroupButton: {
       marginBottom: 15,
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

   });

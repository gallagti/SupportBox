import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
//import * as firebase from 'firebase';
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
import boxIcon from '../assets/images/SupportBoxMainLogoTranUpdated.png';



export default class LoginScreen extends React.Component {
  static navigationOptions = {
    headerTransparent: false
  };

  render() {
    const firebaseConfig = {
      apiKey: "AIzaSyAQepzHZYF1NSnJ_K5NmhsULtGzDF5S1gI",
    authDomain: "supportbox-c1a53.firebaseapp.com",
    databaseURL: "https://supportbox-c1a53.firebaseio.com",
    storageBucket: "supportbox-c1a53.appspot.com",
    };

    firebase.initializeApp(firebaseConfig);
    return(
      <View style={styles.container}>
            <View style={styles.BoxIcon}>

          <Image
              style={styles.BoxIcon}
              source={require('../assets/images/SupportBoxMainLogoTranUpdated.png')}
          />

      </View>
      </View>



    );
  }




}


const styles = .create){
  container:{
    flex: 1,
    backgroundColor: '#57caff',
  },
  BoxIcon: {
    resizeMode: 'contain',
    width: 200,
    height: 200,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
  },
}

import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Content, Button, Text } from 'native-base';
import {
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  View,
} from 'react-native';
// Import statements go here, this includes pictures or tile pics from a file

import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import boxIcon from '../assets/images/SupportBoxMainLogoTranUpdated.png';

import LoginScreen from "./LoginScreen.js";
//import { db } from '../config/db.js';
import * as firebase from 'firebase';


export default class HomeScreen extends React.Component {

  constructor(props){
    super(props)
    this.state = ({
      email: '',
      password: ''
    })
  }

  async loginWithFacebook() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      '807211646276739',
      { permissions: ['public_profile'] }
    );

    if (type === 'success') {
      // Build Firebase credential with the Facebook access token.
      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      // Sign in with credential from the Facebook user.
      firebase.auth().signInWithCredential(credential).catch((error) => {
        console.error("Loading user failed with error: " , error.message);
        //can handle other error codes here if wanted
        //see https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithCredential
      });
    }
  }

  componentDidMount() {

      firebase.auth().onAuthStateChanged((user) => {
        if (user != null) {
          console.log(user);
        }
      })
    }

  static navigationOptions = {
    headerTransparent: true
  };

  render() {
    return (
    //  <View style={styles.container}>
    <ScrollView style={styles.container}>
        <View style={styles.BoxIcon}>
            <Image
                style={styles.BoxIcon}
                source={require('../assets/images/SupportBoxMainLogoTranUpdated.png')}
            />
        </View>
        <View>
          <Content>
            <Button
              block style = {styles.MyGroupsButton}
              //onPress={() => this.props.navigation.navigate('MyGroupsScreen')}
              onPress={() => this.loginWithFacebook()}
              >
                <Text>Login With Facebook</Text>
                </Button>
                <Button
                  block style = {styles.MyGroupsButton}
                  onPress={() =>
                    Alert.alert(
                      'this is not handled yet'
                    )
                  }
                  >
                  <Text>Logout</Text>

                </Button>
          </Content>
        </View>
  </ScrollView>
)}};

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };

/*
  _onLoadUserCompleted(user){

  }

  _onLogout(){
    this.props.navigation
  }
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#57caff',
  },
  MyGroupsButton: {
    marginTop: 50,
    marginBottom: 15,
    height: 70,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  BoxIcon: {
    resizeMode: 'contain',
    width: 200,
    height: 200,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

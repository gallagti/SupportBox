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
  TextInput,
  View,
} from 'react-native';
// Import statements go here, this includes pictures or tile pics from a file

import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import boxIcon from '../assets/images/SupportBoxMainLogoTranUpdated.png';

//import LoginScreen from "./LoginScreen.js";
import GroupBaseScreen from "./GroupBaseScreen.js";
//import {db} from '../config/db';
//import { db } from '../config/db.js';
//import * as firebase from 'firebase';

export default class HomeScreen extends React.Component {

  constructor(props){
    super(props)
    this.state = ({
      currentUser: null,
    })
  }



/*
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
*/
  static navigationOptions = {
    headerTransparent: true
  };

/*
  onPress = () =>
      this.props.navigation.navigate('GroupBaseScreen', { name: this.state.name });
*/
onPress = () =>
    this.props.navigation.navigate('GroupBaseScreen');
  //onChangeText = name => this.setState({ name });

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
          <Text style={styles.title}>Enter Your Name:</Text>
      <TextInput
        style={styles.nameInput}
        placeHolder="Enter a username"
        onChangeText={this.onChangeText}
        value={this.state.name}
      />

      <Button
      block style = {styles.MyGroupsButton}
      onPress={() =>
      //  alert("pressed")}
      //  this.props.navigation.navigate('GroupScreen')}
        this.props.navigation.navigate('MyGroupScreen', {groupKey: group._key})}
        //{group: group._key, name: name})}
      >
/*
        <Text>
          {styles.buttonText}>Next
        </Text>
      </Button>
*/



      <TouchableOpacity onPress={this.onPress}>
        //<Text style={styles.buttonText}>Next</Text>
        <Text style={styles.btnText}>Next</Text>
      </TouchableOpacity>
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
const offset = 24;
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
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  nameInput: {
    height: offset * 2,

    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 2,
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
  },
  /*button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor:'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 20,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },*/

  btnText:{
    //backgroundColor: 'white',
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 25,
    marginTop: 25,
    textAlign: 'center'
  },

  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

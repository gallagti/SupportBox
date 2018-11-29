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
  AsyncStorage,
  TouchableHighlight,
  View,
} from 'react-native';

import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import boxIcon from '../assets/images/SupportBoxMainLogoTranUpdated.png';
import GroupBaseScreen from "./GroupBaseScreen.js";
import BoxRegisterScreen from "./BoxRegisterScreen.js";

export default class HomeScreen extends React.Component {

  constructor(props){
    super(props)
    this.state = ({
      box_num: '',
    })

  this.handleChange = this.handleChange.bind(this);
  this.store_box_key = this.store_box_key.bind(this);
  }

  static navigationOptions = {
    headerTransparent: true
  };

onPress = () =>
    this.props.navigation.navigate('GroupStack');

onPressRegister = () =>
    this.props.navigation.navigate('BoxRegisterScreen');

handleChange(e) {
     this.setState({
       box_num: e.nativeEvent.text
     });
   }

async store_box_key() {
  if(this.state.box_num !== null){
      await AsyncStorage.setItem('box_key', this.state.box_num);
      const value = await AsyncStorage.getItem('box_key');
      if(value === null){
      //  alert('value is ' + value);
      }
      if(this.state.box_num === null){
        //alert('box_num is ' + value);
      }
  }
}

  render() {
    return (
    <ScrollView
    scrollEnabled={false}
    style={styles.container}>

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
      onPress={this.onPress}
      >
        <Text>Continue Anonymously</Text>
      </Button>


      <View style={styles.main}>

      <Text style={styles.title}>
      Register Your SupportBox
      </Text>

      <TextInput
        style={styles.itemInput}
        placeholder="Enter Your SupportBox Number"
        onChange={this.handleChange}
      />
        <Button
          block style={styles.JoinAGroupButton}
          onPress={() => {
            try{
              this.store_box_key()
            }
            catch(error){
              alert('could not store box key')
            }
            finally{
              if(this.state.box_num === ''){
                alert('You need to enter your SupportBox ID above')
              }
              else{
                this.props.navigation.navigate('BoxRegisterScreen')
              }
            }
          }
        }
        >
          <Text >
            Register
          </Text>
        </Button>

        </View>
          </Content>
        </View>
  </ScrollView>
);
}
}

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };

const offset = 24;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#57caff',
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
  MyGroupsButton: {
    marginTop: 50,
    marginBottom: 15,
    height: 70,
  },
  MyInputButton: {
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
    height: 20,
    color: 'white'
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
    borderWidth: 1,
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

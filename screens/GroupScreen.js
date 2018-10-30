import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// Import statements go here, this includes pictures or tile pics from a file

import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import settingIcon from '../assets/images/settingIcon.png';
import boxIcon from '../assets/images/transparentBox.png';

export default class MyGroupsScreen extends React.Component {
  static navigationOptions = {
    headerTransparent: true
  };

  render() {
       return (
           <ScrollView style={styles.container}>
               <View>
                   <View style={styles.BoxIcon}>
                       <Image
                           style={styles.BoxIcon}
                           source={require('../assets/images/transparentBox.png')}
                       />
                   </View>
                   <View>
                      <Text style={styles.MyGroupsText}>SupportBox</Text>
                   </View>
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
     MyGroupsText: {
       fontSize: 42,
       color: 'rgba(252, 249, 233, 1)',
       lineHeight: 40,
       textAlign: 'center',
       fontWeight: 'bold',
     },
     BoxIcon: {
       width: 200,
       height: 200,
       resizeMode: 'contain',
       marginTop: 5,
       marginLeft: 5,
     },

   });

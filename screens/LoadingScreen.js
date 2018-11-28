'use strict';
import React, {
ActivityIndicatorIOS,
PropTypes,
StyleSheet,
Text,
View
} from 'react-native';

export default class LoadingScreen extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <ActivityIndicatorIOS/>
        <Text style={styles.MyGroupsText}>{this.props.children}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#57caff' ,
  },
  MyGroupsText: {
    fontSize: 42,
    color: 'rgba(252, 249, 233, 1)',
    lineHeight: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

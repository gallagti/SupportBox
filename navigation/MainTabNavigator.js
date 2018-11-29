import React from 'react';
import {
  Platform
} from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  lazy
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import GroupBaseScreen from '../screens/GroupBaseScreen';
import MyGroupsScreen from '../screens/MyGroupsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import JoinGroupScreen from '../screens/JoinGroupScreen';
import SearchGroupScreen from '../screens/SearchGroupScreen';
import CreateGroupScreen from "../screens/CreateGroupScreen";
import GroupScreen from "../screens/GroupScreen";
import BoxRegisterScreen from "../screens/BoxRegisterScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  //GroupBaseScreen: GroupBaseScreen,
  BoxRegisterScreen: BoxRegisterScreen,
});
//is a test
HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({
    focused
  }) => ( <
    TabBarIcon focused = {
      focused
    }
    name = {
      Platform.OS === 'ios' ?
      `ios-information-circle${focused ? '' : '-outline'}` :
        'md-information-circle'
    }
    />
  ),
};

const GroupStack = createStackNavigator({
  Groups: GroupBaseScreen,
  MyGroupsScreen: MyGroupsScreen,
  JoinGroupScreen: JoinGroupScreen,
  SearchGroupScreen: SearchGroupScreen,
  CreateGroupScreen: CreateGroupScreen,
  GroupScreen: GroupScreen,
});

GroupStack.navigationOptions = {
  tabBarLabel: 'My Groups',
  tabBarIcon: ({
    focused
  }) => ( <
    TabBarIcon focused = {
      focused
    }
    name = {
      Platform.OS === 'ios' ?
      `ios-information-circle${focused ? '' : '-outline'}` :
        'md-information-circle'
    }
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({
    focused
  }) => ( <
    TabBarIcon focused = {
      focused
    }
    name = {
      Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'
    }
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  GroupStack,
  SettingsStack,
}, {lazy: true});

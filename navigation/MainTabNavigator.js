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
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
//import LoginScreen from '../screens/LoginScreen';
import JoinGroupScreen from '../screens/JoinGroupScreen';
import SearchGroupScreen from '../screens/SearchGroupScreen';
import CreateGroupScreen from "../screens/CreateGroupScreen";
import GroupScreen from "../screens/GroupScreen";

//import SearchGroupScreen from '../screens/SearchGroupScreen';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
  GroupBaseScreen: GroupBaseScreen,
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

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({
    focused
  }) => ( <
    TabBarIcon focused = {
      focused
    }
    name = {
      Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'
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
  LinksStack,
  SettingsStack,
}, {lazy: true});

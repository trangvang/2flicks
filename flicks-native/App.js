import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation';

import NowPlaying from './NowPlaying';
import TopRated from './TopRated';

const Tabs = createBottomTabNavigator(
  {
    NowPlaying: {
      screen: NowPlaying
    },
    TopRated: {
      screen: TopRated
    }
  },
  {
    initialRouteName: 'NowPlaying',
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: 'rgba(54,61, 68, 0.5)',
      inactiveTintColor: '#363d44',
      inactiveBackgroundColor: '#bdc6cf',
      labelStyle: {
        fontSize: 12,
        padding: 5,
        fontWeight: 'bold'
      }
    }
  }
);


const App = () => (<Tabs />);

export default App;

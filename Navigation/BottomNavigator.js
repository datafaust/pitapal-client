import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home, { Details } from '../Home/Home';
import Profile from '../Profile/Profile';
import Orders from '../Orders/Orders';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeStackScreen } from '../Navigation/HomeStackNavigator';


export const Tabs = createBottomTabNavigator();
export const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    <Tabs.Screen name="Orders" component={Orders} />
    <Tabs.Screen name="Profile" component={Profile} />
  </Tabs.Navigator>
);
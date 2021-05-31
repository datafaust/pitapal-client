import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile, { Help } from '../Profile/Profile';

import { createStackNavigator } from "@react-navigation/stack";


/**ProfileSTACK NAVIGATOR */
export const ProfileStack = createStackNavigator();
export const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
    <ProfileStack.Screen
      name="Help"
      component={Help}
    />
  </ProfileStack.Navigator>
);
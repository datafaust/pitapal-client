import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Account, { Help } from '../Account/Account';

import { createStackNavigator } from "@react-navigation/stack";


/**AccountSTACK NAVIGATOR */
export const AccountStack = createStackNavigator();
export const AccountStackScreen = () => (
  <AccountStack.Navigator>
    <AccountStack.Screen 
      name="Account" 
      component={Account}
      />
    <AccountStack.Screen
      name="Help"
      component={Help}
    />
  </AccountStack.Navigator>
);
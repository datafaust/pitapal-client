import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Orders, { Help } from '../Orders/Orders';

import { createStackNavigator } from "@react-navigation/stack";


/**OrdersSTACK NAVIGATOR */
export const OrdersStack = createStackNavigator();
export const OrdersStackScreen = () => (
  <OrdersStack.Navigator>
    <OrdersStack.Screen name="Orders" component={Orders} />
    <OrdersStack.Screen
      name="Help"
      component={Help}
    />
  </OrdersStack.Navigator>
);
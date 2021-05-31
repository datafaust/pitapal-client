import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';


import Home, { Details } from '../Home/Home';
import Map from '../Map/Map';
import { AuthContext } from "../context";

import { createStackNavigator } from "@react-navigation/stack";


/**HOMESTACK NAVIGATOR */
export const HomeStack = createStackNavigator();
export const HomeStackScreen = () => {
  
  const { signOut } = React.useContext(AuthContext);

  return (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        //headerTitle: props => <LogoTitle {...props} />,
        headerRight: () => (
          <Button
            style={{ margin: 10 }}
            full
            rounded
            primary
            onPress={() => signOut()}

          >
            <Text>Sign Out</Text>
          </Button>
        ),
      }}
    />
    <HomeStack.Screen
      name="Map"
      component={Map}
    />
  </HomeStack.Navigator>
  )
};
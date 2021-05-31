import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AuthContext } from "./context";

import Splash from './Splash/Splash.js';
import Signup from './Signup/Signup';
import Profile from './Profile/Profile';
import Home, { Details } from './Home/Home';
import Landing from './Landing/Landing';
import Login from './Login/Login';
import ForgotPassword from './Login/ForgotPassword';

/**IMPORT NAVIGATION */
import { TabsScreen } from './Navigation/BottomNavigator'

/**REDUX */
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import ourReducer from './store/reducer';
const store = createStore(ourReducer);


const firebaseConfig = {
  apiKey: "AIzaSyAtqETfy0VP6mnm-UaPOJohRIs62sKYvbg",
  authDomain: "platescanner-835aa.firebaseapp.com",
  databaseURL: "https://platescanner-835aa.firebaseio.com",
  projectId: "platescanner-835aa",
  storageBucket: "platescanner-835aa.appspot.com",
  messagingSenderId: "853976785702",
  appId: "1:853976785702:web:8f9390dfb9313aa2c357e7",
  measurementId: "G-982XDXL04B"
}

firebase.initializeApp(firebaseConfig)


/**AUTH NAVIGATOR */
const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="Landing"
      component={Landing}
      options={{ title: "Landing" }}
    />
    <AuthStack.Screen
      name="Login"
      component={Login}
      options={{ title: "Login" }}
    />
    <AuthStack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
      options={{ title: "ForgotPassword" }}
    />
    <AuthStack.Screen
      name="CreateAccount"
      component={Signup}
      options={{ title: "Create Account" }}
    />
  </AuthStack.Navigator>
);




const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={TabsScreen}
        options={{
          animationEnabled: false
        }}
      />
    ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: false
          }}
        />
      )}
  </RootStack.Navigator>
);

export default function App() {

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        // firebase
        // .auth()
        // .signOut()
        // .catch((error) => console.log(error))
        setUserToken(null);
      },
      handleLogin: (email, password) => {
        console.log(email, password)
        setIsLoading(false)
        firebase.auth()
        .signInWithEmailAndPassword(email.trim(), password)
        .then(() => {firebase.auth().currentUser.emailVerified ? setUserToken("asdf") : setUserToken(null)})
        .catch(error => console.log(error))
      }
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Provider store={ store }>
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Container, Form, Input, Item, Label } from "native-base";

import { AuthContext } from "../context";

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
  );

export const Landing = ({ navigation }) => {
    const { signIn } = React.useContext(AuthContext);

    useEffect(()=>{
      navigation.push("CreateAccount")
    })
  
    return (
      <ScreenContainer>
        <Text>Authentication Screen</Text>
        <Button title="Sign In" onPress={() => signIn()} />

        <Button
          title="Login"
          onPress={() => navigation.push("Login")}
        />
        <Button
          title="Create Account"
          onPress={() => navigation.push("CreateAccount")}
        />
      </ScreenContainer>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  });

export default Landing;
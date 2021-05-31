import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Form, Input, Item, Button, Label } from "native-base";
import { useNavigation } from '@react-navigation/native';

import SignupForm from './SignupForm'

const Signup = () => {

  const navigation = useNavigation();

  return (
    <Container style={styles.container}>
      <SignupForm />
      <Button
        style={{ margin: 10 }}
        full
        rounded
        primary
        onPress={()=>navigation.goBack()}

      >
        <Text style={{ color: "white" }}>Go Back</Text>
      </Button>
      <Button
        style={{ margin: 10 }}
        full
        rounded
        primary
        onPress={()=>navigation.navigate("Login")}

      >
        <Text style={{ color: "white" }}>Already Have Account - Sign In</Text>
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 40,
  },
});



export default Signup;

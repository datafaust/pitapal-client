import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Form, Input, Item, Label, Button } from "native-base";

import { AuthContext } from "../context";
import LoginForm from './LoginForm';
import ForgotPassword from './ForgotPassword';

export const Login = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

  return (
    <Container style={styles.container}>
      <LoginForm />
      <Button
        style={{ margin: 10, backgroundColor: 'red' }}
        full
        rounded
        primary
        onPress={() => navigation.push('ForgotPassword')}

      >
        <Text style={{ color: "white" }}>Forgot Password</Text>
      </Button>
      <Button
        style={{ margin: 10 }}
        full
        rounded
        primary
        onPress={() => navigation.goBack()}

      >
        <Text style={{ color: "white" }}>Go Back</Text>
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


export default Login;
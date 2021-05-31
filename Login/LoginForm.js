import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Form, Input, Item, Button, Label } from "native-base";

import { AuthContext } from "../context";



import * as firebase from "firebase";

const LoginForm = () => {

    const { signIn, handleLogin } = React.useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const addEmail = (email) => {
      setEmail(email)
    }
  
    const addPassword = (password) => {
      setPassword(password)
    }

    return (
        <Form>
            <Item floatingLabel>
                <Label>Email</Label>
                <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={(email)=>addEmail(email)}
                />
            </Item>
            <Item floatingLabel>
                <Label>Password</Label>
                <Input
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={(password)=>addPassword(password)}
                />
            </Item>
            <Button style={{ margin: 10 }}
                full
                rounded
                success
                onPress={()=>handleLogin(email, password)}
                //onPress={()=>signIn()}
            >
                <Text style={{ color: 'white' }}>Login</Text>
            </Button>
        </Form>
    );
};

export default LoginForm;






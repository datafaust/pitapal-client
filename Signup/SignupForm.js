import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Container, Form, Input, Item, Button, Label } from "native-base";
import { useNavigation } from '@react-navigation/native';

import { handleSignUp } from './SignupFunctions'




const SignupForm = (props) => {

    const navigation = useNavigation();

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const addFname = (name) => {
        setFname(name)
    }
    const addLname = (name) => {
        setLname(name)
    }

    const addEmail = (email)=>{
        setEmail(email)
    } 

    const addPassword = (password) =>{
        setPassword(password)
    }

    const navigateLogin = () => {
        navigation.navigate('Login');
        Alert.alert("Please check your email to verify your address then login.")
    }


    return (
        <Form>
            <Item floatingLabel>
                <Label>First Name</Label>
                <Input
                    autoCorrect={false}
                    onChangeText={(fname) => addFname(fname)}
                />
            </Item>
            <Item floatingLabel>
                <Label>Last Name</Label>
                <Input
                    secureTextEntry={false}
                    autoCorrect={false}
                    onChangeText={(lname) => addLname(lname)}
                />
            </Item>
            <Item floatingLabel>
                <Label>Email</Label>
                <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={(email) => addEmail(email)}
                />
            </Item>
            <Item floatingLabel>
                <Label>Password</Label>
                <Input
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={(password) => addPassword(password)}
                />
            </Item>
            <Button
                style={{ margin: 10, marginTop: 40 }}
                full
                rounded
                success
                onPress={() => { 
                    handleSignUp(fname, lname, email, password);
                    navigateLogin();
                }
                }
            >
                <Text style={{ color: "white" }}>Register</Text>
            </Button>
        </Form>
    );
};

export default SignupForm;
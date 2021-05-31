import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Form, Input, Item, Button, Label } from "native-base";

const Splash = ({ navigation }) => {
    return (
        <Container style={styles.container}>
            <Text>LANDING PAGE</Text>
            <Button
                style={{ margin: 10 }}
                full
                rounded
                primary
                onPress={() => console.log('do something')}

            >
                <Text style={{ color: "white" }}>Signup</Text>
            </Button>

            <Button
                style={{ margin: 10 }}
                full
                rounded
                primary
                onPress={() => console.log('do something')}

            >
                <Text style={{ color: "white" }}>Login</Text>
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



export default Splash;
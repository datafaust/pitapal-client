import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Form, Input, Item, Label, Button } from "native-base";


export const ForgotPassword = () => {

    return (
        <View style={styles.container}>
            <Form>
                <Item floatingLabel>
                    <Label>Email</Label>
                    <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={() => console.log('forgot email')}
                    />
                </Item>
            </Form>
            <Button style={{ margin: 10 }}
                full
                rounded
                success
                onPress={() => console.log('send')}
            >
                <Text>Change Password</Text>
            </Button>
        </View>
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


export default ForgotPassword;
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Orders = () => {
    return (
        <View Style = {styles.container}>
            <Text>ORDERS</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Orders;
import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Container, Form, Input, Item, Button, Label } from "native-base";

import { createStore } from 'redux';
import ourReducer from '../store/reducer';
const store = createStore(ourReducer);

export default function Map() {
  return (
    <View style={styles.container}>
      <Button
        style={{ margin: 10 }}
        full
        rounded
        primary
        onPress={() => navigation.goBack()}
      >
        <Text style={{ color: "white" }}>Go Back</Text>
      </Button>
      <MapView style={styles.map}>
        {store.getState().reducer.mockItems.map((marker, index) => (
          <Marker
            key={index}
            coordinate={[marker.lat,marker.lon]}
            title={marker.restaurant}
            description={marker.meal}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, ScrollView } from 'react-native';
//import * as firebase from "firebase";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { AuthContext } from "../context";
// import Map from '../Map/Map';
import Search from './Search';
import Card from './Card';

import { createStore } from 'redux';
import ourReducer from '../store/reducer';
const store = createStore(ourReducer);

// const ScreenContainer = ({ children }) => (
//   <View style={styles.container}>{children}</View>
// );

// const items = {
//   mockItems: [
//     {
//       meal: 'Chicken Bryani',
//       restaurant: 'Adels Halal',
//       address: '33 Beaver Street 10004',
//       status: 'open',
//       distance: .5,
//       rating: 4.6
//     },

//     {
//       restaurant: 'Albaiks Emporium',
//       address: '27 John Street 10005',
//       status: 'open',
//       distance: .7,
//       rating: 3.9
//     },
//     {
//       restaurant: 'Salims Halal',
//       address: '27 John Street 10005',
//       status: 'open',
//       distnace: 1.1,
//       rating: 4.9
//     },
//     {
//       restaurant: 'Masouds Place',
//       address: '27 John Street 10005',
//       status: 'closed',
//       distance: 1.4,
//       rating: 4.7
//     },
//     {
//       restaurant: 'Abdullahs Chow',
//       address: '27 John Street 10005',
//       status: 'open',
//       distance: 1.9,
//       rating: 3.7
//     },
//     {
//       restaurant: 'Abdullahs Chow',
//       address: '27 John Street 10005',
//       status: 'open',
//       distance: 1.9,
//       rating: 3.7
//     }
//   ]
// }



const Home = ({ navigation }) => {

  const { signOut } = React.useContext(AuthContext);

  let cards = null;
  if (store.getState().reducer.mockItems) {
    cards = (
      <View>
        {
          store.getState().reducer.mockItems.map((card, i) => {
            return <View style={styles.card} key={i}>

              <Card key={i}
                image={require("../assets/chicken.jpeg")}
                restaurant={card.restaurant}
                address={card.address}
                status={card.status}
                distance={`${card.distance} miles`}
                rating={card.rating}
              />
            </View>
          })
        }
      </View>
    )
  }






  return (
    <React.Fragment>
      {/* { map ?
        <Map /> : */}
        <View>
          <Button title="Sign Out" onPress={() => signOut()} />
          <Button title="Map" onPress={() => navigation.push("Map")} />
          <Text>Search Bar</Text>


          {/**RESTAURANTS */}
          <ScrollView>
            {cards}
          </ScrollView>


        </View>

      {/* } */}

    </React.Fragment>
  );
};


export const Details = ({ route }) => (
  <ScreenContainer>
    <Text>Details Screen</Text>
    {route.params.name && <Text>{route.params.name}</Text>}
  </ScreenContainer>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a83244',
    alignSelf: 'stretch',
    width: '100%',
    height: '12%',
    justifyContent: 'flex-end'
  },
  card: {
    padding: 5,
    alignItems: 'center'
  },
});

const logout = () => {
  firebase
    .auth()
    .signOut()
    .catch((error) => console.log(error));

  navigation.navigate("StartScreen");
};

export default Home;


/**
 *  <Button
        title="React Native by Example"
        onPress={() =>
          navigation.push("Details", { name: "React Native by Example " })
        }
      />
 */
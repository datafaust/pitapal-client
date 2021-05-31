import React, { Component, useEffect } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
import { StyleSheet, View } from 'react-native';
import { Font } from 'expo';

const Search = () => {



    return (
        <Container style ={styles.container}>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>
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

export default Search;
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DetailsScreen from './components/DetailsScreen';
import ListScreen from './components/ListScreen';




const App= () => {
  

  return (
    <>
    <DetailsScreen/>
    <ListScreen/>

   <Text>hello world</Text>
   </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;

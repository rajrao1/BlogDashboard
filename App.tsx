/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import APICall from './src/components/APICall';
import { NavigationContainer } from '@react-navigation/native';


function App(): JSX.Element {
  return(
    <NavigationContainer>
    <View style={{flex: 1}}>
      {/* <APICall /> */}
      <Text>Hello World</Text>
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});

export default App;

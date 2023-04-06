/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import APICall from './src/components/APICall';

function App(): JSX.Element {
  return(
    <View style={{flex: 1}}>
      <APICall />
    </View>
  );
}

const styles = StyleSheet.create({
});

export default App;

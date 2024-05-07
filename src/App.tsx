/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Text
} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App() {


  return (
    <View>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'black'}
      />

      <Text> Hola Mundo </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

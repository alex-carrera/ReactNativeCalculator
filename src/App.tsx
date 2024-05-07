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
  View
} from 'react-native';
import { CalculatorScreen } from './presentation/screen/CalculatorScreen';
import { styles } from './config/theme/app-theme';

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App() {


  return (
    <View style={styles.background}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'black'}
      />

      <CalculatorScreen/>

    </View>
  );
}


export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  NativeModules
} from 'react-native';

import UKDatePicker from './components/UKDatePicker';

const DatePicker = NativeModules.DatePicker;
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{width: 640, height: 1136}}>
          <Text>Click Me </Text>
          <UKDatePicker style={{width: 400, height: 200}} 
            mode={DatePicker.datePickerModeCountDownTimer}
            didValueChanged = {(event) => {
              console.log('>>>>>> 获取Event');
              console.log(event.nativeEvent);
            }}
            ></UKDatePicker>
      </SafeAreaView>
    </>
  );
};

export default App;

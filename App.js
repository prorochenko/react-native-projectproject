import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import RegistrationScreen from './screens/auth/RegistrationScree';
import LoginForm from './screens/auth/LoginScreen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_Regular: require('./assets/fonts/Roboto-Regular.ttf'),
    Roboto_Medium: require('./assets/fonts/Roboto-Medium.ttf'),
    Roboto_Bold: require('./assets/fonts/Roboto-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onLayout={onLayoutRootView}>
      <RegistrationScreen />
    </TouchableWithoutFeedback>
  );
}

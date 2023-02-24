import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './redux/store';
import { Provider, useSelector } from 'react-redux';
import { useRoute } from './router';
import Home from './screens/main/Home';

SplashScreen.preventAutoHideAsync();

export default function App() {
  // const isAuth = useSelector(state => state.isAuth);

  const routing = useRoute();

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
    <Provider store={store}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Home />
      </View>
    </Provider>
  );
}

import React, { useState, useCallback, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';

import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

const initialState = {
  login: '',
  email: '',
  password: '',
};

export default function LoginForm() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  // const [dimentions, setDimentions] = useState(Dimensions.get('window').width - 16 * 2);

  // useEffect(() => {
  //   const onChange = () => {
  //     const windowWidth = Dimensions.get('window').width;
  //     console.log(windowWidth);
  //     setDimentions(windowWidth);
  //   };
  //   dimensionsHandler = Dimensions.addEventListener('change', onChange);
  //   return () => {
  //     () => dimensionsHandler.remove();
  //   };
  // }, []);

  const onFocus = () => setIsShowKeyboard(true);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const submitData = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={require('../../assets/PhotoBG.png')}>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View
              style={{
                ...styles.formReg,
                marginBottom: isShowKeyboard ? -97 : 78,
              }}
            >
              <Text style={styles.title}>Registration</Text>
              <View style={styles.form}>
                <TextInput
                  placeholder="Login"
                  style={styles.input}
                  value={state.login}
                  onFocus={onFocus}
                  onChangeText={value => setState(presState => ({ ...presState, login: value }))}
                  onSubmitEditing={keyboardHide}
                />
                <TextInput
                  placeholder="Email"
                  style={styles.input}
                  value={state.email}
                  onFocus={onFocus}
                  onChangeText={value => setState(presState => ({ ...presState, email: value }))}
                  onSubmitEditing={keyboardHide}
                />
                <TextInput
                  placeholder="Password"
                  style={styles.input}
                  secureTextEntry={true}
                  value={state.password}
                  onFocus={onFocus}
                  onChangeText={value => setState(presState => ({ ...presState, password: value }))}
                  onSubmitEditing={keyboardHide}
                />
                <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={submitData}>
                  <Text style={styles.btnText}>Зареєструватися</Text>
                </TouchableOpacity>
                <Text style={styles.textAlready}>Вже є аккаунт? Увійти</Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
        {/* <StatusBar style="auto" /> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    // alignItems: 'center',
  },

  input: {
    borderWidth: 1,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderStyle: 'solid',
    height: 50,
    borderRadius: 8,
    // minWidth: 343,
    color: '#212121',
    paddingLeft: 16,
    marginTop: 16,
  },
  formReg: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    color: '#212121',
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: '0.01em',
    marginBottom: 16,
    // justifyContent: 'center',
    textAlign: 'center',
  },

  form: {
    marginHorizontal: 16,
  },
  btn: {
    height: 51,
    justifyContent: 'center',
    borderRadius: 100,
    marginTop: 43,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        backgroundColor: '#FF6C00',
      },
      android: {
        backgroundColor: '#FF6C00',
      },
    }),
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 19,
  },
  textAlready: {
    marginTop: 16,
  },
});

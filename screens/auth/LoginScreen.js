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
  Button,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { changeAuth } from '../../redux/store';

import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { authSignInUser } from '../../redux/auth/authOperations';
SplashScreen.preventAutoHideAsync();

const initialState = {
  email: '',
  password: '',
};

export default function LoginScreen({ navigation }) {
  // console.log('navigation', navigation);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [emailBorderOnFocus, setEmailBorderOnFocus] = useState('#E8E8E8');
  const [passwordBorderOnFocus, setPasswordBorderOnFocus] = useState('#E8E8E8');
  const [showPassword, setShowPassword] = useState(true);

  const dispatch = useDispatch();

  const changePasswordVisible = () => {
    setShowPassword(!showPassword);
  };
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const submitData = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    // console.log(state);
    setState(initialState);
    // dispatch(changeAuth(true));
    dispatch(authSignInUser(state));
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={require('../../assets/PhotoBG.png')}>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.bottomForm}>
              <View
                style={{
                  ...styles.loginForm,
                  marginBottom: isShowKeyboard ? -97 : 78,
                }}
              >
                <Text style={styles.title}>Login</Text>
                <View style={styles.inputForm}>
                  <TextInput
                    placeholder="Email"
                    style={{
                      ...styles.input,
                      borderColor: emailBorderOnFocus,
                      backgroundColor: emailBorderOnFocus === '#FF6C00' ? '#FFFFFF' : '#F6F6F6',
                    }}
                    value={state.email}
                    onFocus={() => {
                      setIsShowKeyboard(true);
                      setEmailBorderOnFocus('#FF6C00');
                    }}
                    onBlur={() => setEmailBorderOnFocus('#E8E8E8')}
                    onChangeText={value => setState(presState => ({ ...presState, email: value }))}
                    onSubmitEditing={keyboardHide}
                  />
                  <View style={styles.inputPasswordBox}>
                    <TextInput
                      placeholder="Password"
                      style={{
                        ...styles.input,
                        borderColor: passwordBorderOnFocus,
                        backgroundColor:
                          passwordBorderOnFocus === '#FF6C00' ? '#FFFFFF' : '#F6F6F6',
                      }}
                      secureTextEntry={showPassword}
                      value={state.password}
                      onFocus={() => {
                        setIsShowKeyboard(true);
                        setPasswordBorderOnFocus('#FF6C00');
                      }}
                      onBlur={() => setPasswordBorderOnFocus('#E8E8E8')}
                      onChangeText={value =>
                        setState(presState => ({ ...presState, password: value }))
                      }
                      onSubmitEditing={keyboardHide}
                    />
                    <TouchableOpacity style={styles.showPassword} activeOpacity={0.8}>
                      <Text style={styles.passwordVisible} onPress={changePasswordVisible}>
                        {showPassword ? 'Show Pass' : 'Hide'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={submitData}>
                    <Text style={styles.btnText}>Sign in</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Register')}
                  >
                    <Text style={styles.bottomText}>
                      Don't have an account?
                      <Text style={styles.btnNavigate}>&nbsp;Register</Text>
                    </Text>
                  </TouchableOpacity>
                </View>
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
  bottomForm: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  loginForm: {},
  input: {
    borderWidth: 1,
    // backgroundColor: '#F6F6F6',
    fontFamily: 'Roboto_Regular',
    fontSize: 16,
    lineHeight: 19,
    borderColor: '#E8E8E8',
    borderStyle: 'solid',
    height: 50,
    borderRadius: 8,
    // minWidth: 343,
    color: '#212121',
    paddingLeft: 16,
    marginTop: 16,
    placeholderTextColor: '#BDBDBD',
  },

  title: {
    color: '#212121',
    fontFamily: 'Roboto_Bold',
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: '0.01em',
    marginBottom: 16,
    marginTop: 32,
    // justifyContent: 'center',
    textAlign: 'center',
  },

  inputForm: {
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
    fontFamily: 'Roboto_Regular',
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 19,
  },
  bottomText: {
    marginTop: 16,
    textAlign: 'center',
    fontFamily: 'Roboto_Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
  btnNavigate: {
    fontFamily: 'Roboto_Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
  inputPasswordBox: {
    position: 'relative',
  },
  showPassword: {
    position: 'absolute',
    top: 33,
    right: 16,
  },
  passwordVisible: { color: '#1B4371' },
});

import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={require('../../assets/PhotoBG.png')}>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.bottomForm}>
              <View
                style={{
                  ...styles.registrationForm,
                }}
              >
                <View style={styles.avatar}>
                  <TouchableOpacity activeOpacity={0.8}>
                    <AntDesign
                      style={styles.avatarBtn}
                      name="pluscircleo"
                      size={25}
                      color="#FF6C00"
                    />
                  </TouchableOpacity>
                </View>
                <Text style={styles.title}>Registration</Text>
                <View style={styles.inputForm}>
                  <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
                    <Text style={styles.btnText}>Register</Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.8}>
                    <Text style={styles.bottomText}>
                      Already have an account?
                      <Text style={styles.btnNavigate}>&nbsp;Sign In</Text>
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

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
  avatar: {
    position: 'relative',
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginTop: -60,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
  avatarBtn: {
    position: 'absolute',
    top: 81,
    left: 107.5,
  },
  bottomForm: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  registrationForm: {},
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
export default ProfileScreen;

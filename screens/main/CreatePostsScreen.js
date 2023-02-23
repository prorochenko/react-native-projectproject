import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const CreateScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.addImage}>
        <View style={styles.photoCircle}>
          <MaterialIcons name="photo-camera" size={24} color="#E8E8E8" />
        </View>
      </View>
      <Text style={styles.text}>Upload photo</Text>
      <TextInput placeholder="Name..." style={styles.input} placeholderTextColor={'#BDBDBD'} />
      <View>
        <EvilIcons
          style={{ position: 'absolute', zIndex: 1, left: 11, top: 15 }}
          name="location"
          size={24}
          color="#BDBDBD"
        />
        <TextInput
          placeholder="Location"
          style={{ ...styles.input, paddingLeft: 20 }}
          placeholderTextColor={'#BDBDBD'}
        />
      </View>
      <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
        <Text style={styles.btnText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // alignItems: 'center',
  },
  addImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    // minWidth: 343,
    height: 240,
    marginHorizontal: 16,
    backgroundColor: '#E8E8E8',
    borderRadius: 8,
  },
  photoCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'white',
  },
  text: {
    fontFamily: 'Roboto_Regular',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
    marginTop: 8,
    marginLeft: 16,
    marginBottom: 32,
  },
  input: {
    height: 50,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    marginBottom: 16,
    color: '#212121',
    fontFamily: 'Roboto_Regular',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
  btn: {
    height: 51,
    justifyContent: 'center',
    borderRadius: 100,
    marginHorizontal: 16,
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
});
export default CreateScreen;

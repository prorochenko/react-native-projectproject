import React, { useState, useEffect, useRef } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';
import { app } from '../../firebase/config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import uuid from 'react-uuid';
import { storage } from '../../firebase/config';

const initialState = {
  Name: '',
  Location: '',
};

const CreateScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState('');
  const [location, setLocation] = useState(null);
  const [state, setState] = useState(initialState);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log('location', location);
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePhoto = async () => {
    if (cameraRef && location) {
      const { uri } = await cameraRef.takePictureAsync();

      console.log({ uri });
      setPhoto(uri);
      const asset = await MediaLibrary.createAssetAsync(uri);
    }
  };
  async function uploadPhotoToServer() {
    try {
      const response = await fetch(photo);
      const file = await response.blob();

      const uniquePhotoId = uuid();
      const storageRef = ref(storage, `photos/photo_${uniquePhotoId}`);
      console.log('storageRef', storageRef);
      console.log('file', file);
      await uploadBytes(storageRef, file);

      const photoUrl = await getDownloadURL(storageRef);
      return photoUrl;
    } catch (error) {
      console.log(error.message);
    }
  }

  const sendPhoto = () => {
    // console.log(navigation);
    navigation.navigate('DefaultScreen', { photo, location, state });
    uploadPhotoToServer();
  };

  return (
    <View style={styles.container}>
      {photo === '' ? (
        <>
          <Camera
            style={styles.addImage}
            type={Camera.Constants.Type.back}
            ref={ref => {
              setCameraRef(ref);
            }}
          >
            <TouchableOpacity style={styles.photoCircle} activeOpacity={0.8} onPress={takePhoto}>
              <MaterialIcons name="photo-camera" size={24} color="#E8E8E8" />
            </TouchableOpacity>
          </Camera>
          <TouchableOpacity activeOpacity={0.8} onPress={takePhoto}>
            <Text style={styles.text}>Upload photo</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <View
            style={{
              ...styles.addImage,
              backgroundColor: 'transparent',
            }}
          >
            <ImageBackground
              source={{ uri: photo }}
              // resizeMode="cover"
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              imageStyle={{ borderRadius: 8 }}
            >
              <TouchableOpacity
                style={{
                  ...styles.photoCircle,
                }}
                activeOpacity={0.8}
                onPress={() => setPhoto('')}
              >
                <MaterialIcons name="photo-camera" size={24} color="#E8E8E8" />
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <TouchableOpacity activeOpacity={0.8} onPress={() => setPhoto('')}>
            <Text style={styles.text}>Edit photo</Text>
          </TouchableOpacity>
        </>
      )}

      <TextInput
        placeholder="Name..."
        style={styles.input}
        onChangeText={value => setState(presState => ({ ...presState, Name: value }))}
        placeholderTextColor={'#BDBDBD'}
      />
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
          onChangeText={value => setState(presState => ({ ...presState, Location: value }))}
        />
      </View>
      <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={sendPhoto}>
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
    borderRadius: 10,
    overflow: 'hidden',
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

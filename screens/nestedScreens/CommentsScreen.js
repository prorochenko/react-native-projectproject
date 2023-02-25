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

import MapView from 'react-native-maps';

const CommentsScreen = ({ route }) => {
  const imageUrl = route.params.photo;
  console.log('commentssection', imageUrl);
  return (
    <View style={styles.container}>
      <View style={styles.postBox}>
        <Image source={{ uri: imageUrl }} style={styles.postBox__photo} />
      </View>
      <Text>Future Comments</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // alignItems: 'center',
  },
  postBox: {
    marginBottom: 32,
    marginHorizontal: 16,
  },
  postBox__photo: {
    height: 240,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});
export default CommentsScreen;

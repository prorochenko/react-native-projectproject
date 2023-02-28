import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity, Button } from 'react-native';
import uuid from 'react-uuid';
import { useSelector } from 'react-redux';
import { onSnapshot, collection } from 'firebase/firestore';

import { db } from '../../firebase/config';

//icons
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const DefaultScreenPosts = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  // const { login, email } = useSelector(state => state.auth);

  const getAllPost = async () => {
    await onSnapshot(collection(db, 'posts'), data => {
      setPosts(
        data.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });
  };

  useEffect(() => {
    getAllPost();
  }, []);

  // useEffect(() => {
  //   if (route.params) {
  //     setPosts(prevState => [...prevState, route.params]);
  //   }
  // }, [route.params]);

  // const goToComments = () => {
  //   navigation.navigate('Comments', { location: item.location });
  // };

  // const sendCoordinates = () => {
  //   navigation.navigate('Map', { location: item.location });
  // };
  return (
    <View style={styles.container}>
      <View style={styles.userBox}>
        <Image source={require('../../assets/ava.png')} style={styles.Ava} />
        <View style={styles.userData}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item, index) => (index.toString = uuid())}
        renderItem={({ item }) => (
          <View style={styles.postBox}>
            <Image source={{ uri: item.photo }} style={styles.postBox__photo} />
            <Text style={styles.postBox__text}>{item.name}</Text>
            <View style={styles.postBox__data}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate('Comments', {
                    photo: item.photo,
                    postId: item.id,
                    userId: item.userId,
                  })
                }
                style={{ flexDirection: 'row' }}
              >
                <FontAwesome name="comment" size={18} color="#FF6C00" style={{ marginRight: 9 }} />
                <Text style={styles.postBox__comments}>8</Text>
              </TouchableOpacity>
              <Feather name="thumbs-up" size={18} color="#FF6C00" style={{ marginRight: 10 }} />
              <Text style={styles.postBox__likes}>153</Text>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{ flexDirection: 'row' }}
                onPress={() => navigation.navigate('Map', { location: item.location })}
              >
                <View style={styles.postBox__locationBox}>
                  <EvilIcons name="location" size={24} color="#BDBDBD" />
                  <Text style={styles.postBox__location}>{item.locationName}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  userBox: {
    marginTop: 32,
    marginLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  Ava: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  userData: {
    marginLeft: 8,
  },
  userName: {
    fontFamily: 'Roboto_Bold',
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
    color: '#212121',
  },
  userEmail: {
    fontFamily: 'Roboto_Regular',
    fontWeight: 400,
    fontSize: 11,
    lineHeight: 13,
    color: 'rgba(33, 33, 33, 0.8);',
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
  postBox__data: {
    flexDirection: 'row',
    height: 24,
  },
  postBox__text: {
    marginTop: 8,
    color: '#212121',
    fontFamily: 'Roboto_Medium',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 8,
  },
  postBox__comments: {
    marginRight: 24,
    color: '#212121',
    fontFamily: 'Roboto_Regular',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
  postBox__likes: {
    marginRight: 24,
    color: '#212121',
    fontFamily: 'Roboto_Regular',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
  postBox__locationBox: {
    marginLeft: 'auto',
    flexDirection: 'row',
  },
  postBox__location: {
    color: '#212121',
    fontFamily: 'Roboto_Regular',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
});
export default DefaultScreenPosts;

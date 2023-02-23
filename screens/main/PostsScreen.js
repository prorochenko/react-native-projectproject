import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userBox}>
        <Image source={require('../../assets/ava.png')} style={styles.Ava} />
        <View style={styles.userData}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
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
});
export default PostsScreen;

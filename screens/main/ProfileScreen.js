import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
//icons
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require('../../assets/PhotoBG.png')}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.bottomForm}>
            <View style={styles.avatarBox}>
              <Image source={require('../../assets/avaBig.png')} style={styles.ava} />
              <TouchableOpacity activeOpacity={0.8}>
                <AntDesign name="closecircleo" style={styles.avatarBtn} size={24} color="#E8E8E8" />
                {/* <AntDesign
                      style={styles.avatarBtn}
                      name="pluscircleo"
                      size={25}
                      color="#FF6C00"
                    /> */}
              </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.iconExit}>
              <Ionicons name="exit-outline" size={26} color="#BDBDBD" />
            </TouchableOpacity>

            <Text style={styles.title}>Natali Romanova</Text>
            <SafeAreaView style={{ flex: 1 }}>
              <ScrollView
                contentContainerStyle={{
                  flexGrow: 1,
                  justifyContent: 'space-between',
                }}
              >
                <View style={styles.postBox}>
                  <Image source={require('../../assets/pic1.png')} style={styles.pictures} />
                  <Text style={styles.postBox__text}>Forest</Text>
                  <View style={styles.postBox__data}>
                    <FontAwesome
                      name="comment"
                      size={18}
                      color="#FF6C00"
                      style={{ marginRight: 9 }}
                    />
                    <Text style={styles.postBox__comments}>8</Text>
                    <Feather
                      name="thumbs-up"
                      size={18}
                      color="#FF6C00"
                      style={{ marginRight: 10 }}
                    />
                    <Text style={styles.postBox__likes}>153</Text>
                    <View style={styles.postBox__locationBox}>
                      <EvilIcons name="location" size={24} color="#BDBDBD" />
                      <Text style={styles.postBox__location}>Ukraine</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.postBox}>
                  <Image source={require('../../assets/pic2.png')} style={styles.pictures} />
                  <Text style={styles.postBox__text}>Forest</Text>
                  <View style={styles.postBox__data}>
                    <FontAwesome
                      name="comment"
                      size={18}
                      color="#FF6C00"
                      style={{ marginRight: 9 }}
                    />
                    <Text style={styles.postBox__comments}>8</Text>
                    <Feather
                      name="thumbs-up"
                      size={18}
                      color="#FF6C00"
                      style={{ marginRight: 10 }}
                    />
                    <Text style={styles.postBox__likes}>153</Text>
                    <View style={styles.postBox__locationBox}>
                      <EvilIcons name="location" size={24} color="#BDBDBD" />
                      <Text style={styles.postBox__location}>Ukraine</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.postBox}>
                  <Image source={require('../../assets/pic3.png')} style={styles.pictures} />
                  <Text style={styles.postBox__text}>Forest</Text>
                  <View style={styles.postBox__data}>
                    <FontAwesome
                      name="comment"
                      size={18}
                      color="#FF6C00"
                      style={{ marginRight: 9 }}
                    />
                    <Text style={styles.postBox__comments}>8</Text>
                    <Feather
                      name="thumbs-up"
                      size={18}
                      color="#FF6C00"
                      style={{ marginRight: 10 }}
                    />
                    <Text style={styles.postBox__likes}>153</Text>
                    <View style={styles.postBox__locationBox}>
                      <EvilIcons name="location" size={24} color="#BDBDBD" />
                      <Text style={styles.postBox__location}>Ukraine</Text>
                    </View>
                  </View>
                </View>
                <View style={{ height: 299 }} />
              </ScrollView>
            </SafeAreaView>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    // justifyContent: 'flex-end',
  },
  avatarBox: {
    position: 'relative',
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginTop: -60,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },
  ava: { position: 'absolute', width: 120, height: 120, borderRadius: 16 },
  postBox: {
    marginHorizontal: 16,
    marginBottom: 32,
  },
  pictures: {
    height: 240,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
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
  postBox__data: {
    flexDirection: 'row',
    height: 24,
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
  avatarBtn: {
    position: 'absolute',
    top: 81,
    left: 107.5,
    backgroundColor: 'white',
    overflow: 'hidden',
    borderRadius: 24 / 2,
  },
  iconExit: {
    position: 'absolute',
    // alignItems: 'flex-end',
    // marginRight: 16,
    right: 16,
    top: 16,
  },
  bottomForm: {
    // flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 147,
    width: '100%',
    height: '100%',
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

  btnNavigate: {
    fontFamily: 'Roboto_Regular',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
});
export default ProfileScreen;

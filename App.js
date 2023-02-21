import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity,Platform} from 'react-native';

export default function App() {
  console.log(Platform.OS);
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require('./assets/PhotoBG.png')}>
        <Text style={styles.title}>Реєстрація</Text>
         <View style={styles.form} >
          <TextInput placeholder="Логін" style={styles.input} />
          <TextInput placeholder="Адрес електронної пошти" style={styles.input} />
          <TextInput placeholder="Пароль" style={styles.input} secureTextEntry={true} />
          <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
            <Text style={styles.btnText}>Зареєструватися</Text>
          </TouchableOpacity>
          <Text style={styles.textAlready}>Вже є аккаунт? Увійти</Text>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
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
    justifyContent: 'center',
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
  title: {
    color: '#212121',
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: "0.01em",
    marginBottom: 16,
    justifyContent: 'center',
    alignItems:'center',
  },
    
  form: {
    marginHorizontal: 16,
  },
  btn: {
    backgroundColor: '#FF6C00',
    height: 51,
    borderRadius:100,
    marginTop: 43,
    justifyContent: 'center',
    alignItems:'center',
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight:19,
  },
  textAlready: {
    marginTop:16,
  }
});

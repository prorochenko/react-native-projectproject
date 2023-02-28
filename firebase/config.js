// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth/react-native';

import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBU6B96j_dD_ox_Ol1HXMWWBC1fSl8rrNc',
  authDomain: 'react-native-pr-2.firebaseapp.com',
  projectId: 'react-native-pr-2',
  storageBucket: 'react-native-pr-2.appspot.com',
  messagingSenderId: '331448940021',
  appId: '1:331448940021:web:e07525d8ab6cd80e559cbc',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const storage = getStorage(app);
export const db = getFirestore(app);

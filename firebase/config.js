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
  apiKey: 'AIzaSyCZr6XCzXVBg0oOYWfxm79DtkHUu616gdM',
  authDomain: 'react-native-3-fa754.firebaseapp.com',
  projectId: 'react-native-3-fa754',
  storageBucket: 'react-native-3-fa754.appspot.com',
  messagingSenderId: '558530722690',
  appId: '1:558530722690:web:12b370d2ac0fbde19c2d9b',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const storage = getStorage(app);
export const db = getFirestore(app);

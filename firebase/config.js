// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAcGiQDfAN2UJa0jfKhNlTuuEHa25rHTBw',
  authDomain: 'react-native-goit-project.firebaseapp.com',
  projectId: 'react-native-goit-project',
  storageBucket: 'react-native-goit-project.appspot.com',
  messagingSenderId: '452605277138',
  appId: '1:452605277138:web:450f934b1eb34995d58e0b',
  measurementId: 'G-XKQYL0CHRJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;

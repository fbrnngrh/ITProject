// Import the functions you need from the SDKs you need
// import {initializeApp} from 'firebase/app';
// import {getAnalytics} from 'firebase/analytics';
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyCnmeA7dYXsOxkA-TyM33Reo40PFtcPTfc',
  authDomain: 'klinik-politala.firebaseapp.com',
  projectId: 'klinik-politala',
  storageBucket: 'klinik-politala.appspot.com',
  messagingSenderId: '431382136368',
  appId: '1:431382136368:web:1a7fcd7007881a58284ff5',
  measurementId: 'G-3CD9LLZ29S',
});

// Initialize Firebase
const Fire = firebase;
// const analytics = getAnalytics(Fire);
export default Fire;

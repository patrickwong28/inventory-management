// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAlPvWJ13HwO5dM7XpvK_SxLOnwvrYCaRg',
  authDomain: 'inventory-management-93098.firebaseapp.com',
  projectId: 'inventory-management-93098',
  storageBucket: 'inventory-management-93098.appspot.com',
  messagingSenderId: '871182359169',
  appId: '1:871182359169:web:b194204c4879f44ef18b80',
  measurementId: 'G-0EDXB12R9C',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };

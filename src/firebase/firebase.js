import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBUQ5qTsjVn1PMMfWKznj8FHa14qep4tgs",
  authDomain: "learnlingo-664f7.firebaseapp.com",
  databaseURL:
    "https://learnlingo-664f7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "learnlingo-664f7",
  storageBucket: "learnlingo-664f7.appspot.com",
  messagingSenderId: "894772900230",
  appId: "1:894772900230:web:f797aa06dbab8dde9d3c07",
};

export const appFireBase = initializeApp(firebaseConfig);

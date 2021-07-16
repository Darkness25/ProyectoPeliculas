
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCZM-oF89gb8IVRdTZmdajMXy4JxyLvl-0",
  authDomain: "peliculasproyectosofka.firebaseapp.com",
  projectId: "peliculasproyectosofka",
  storageBucket: "peliculasproyectosofka.appspot.com",
  messagingSenderId: "641979960083",
  appId: "1:641979960083:web:11abf158152c410f1a28e6"
};

firebase.initializeApp(config);
export const auth = firebase.auth;

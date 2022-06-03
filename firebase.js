import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBPOW2I5N6vfri1XDyZVl6pd6QT-e7E1CA",

  authDomain: "uber-eats-clone-352116.firebaseapp.com",

  projectId: "uber-eats-clone-352116",

  storageBucket: "uber-eats-clone-352116.appspot.com",

  messagingSenderId: "170363478859",

  appId: "1:170363478859:web:cb30b16851ac6dc9a3bece",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;

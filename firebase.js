import firebase from "firebase";
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBR-uC1Ks8CynQNp17fbjuNCbGGZcm8mH8",
  authDomain: "facebook-clone-f9f27.firebaseapp.com",
  projectId: "facebook-clone-f9f27",
  storageBucket: "facebook-clone-f9f27.appspot.com",
  messagingSenderId: "1015570168334",
  appId: "1:1015570168334:web:26c8470e059f5a682ada5f"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage};
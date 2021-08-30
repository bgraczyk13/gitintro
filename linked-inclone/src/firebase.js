import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCSAAwbqt5zAtaoNp-nQ7j8Vn_O9NQywig",
  authDomain: "linkedin-2-2c7c8.firebaseapp.com",
  projectId: "linkedin-2-2c7c8",
  storageBucket: "linkedin-2-2c7c8.appspot.com",
  messagingSenderId: "360452212137",
  appId: "1:360452212137:web:2686e0f7a35fc3d837f0b8",
  measurementId: "G-VJWLB7PPB9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

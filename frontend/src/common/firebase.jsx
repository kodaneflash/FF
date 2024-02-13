import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGqI4U1De3r1zX6-KskD4I9ZbaDadeDnc",
    authDomain: "founders-forge.firebaseapp.com",
    projectId: "founders-forge",
    storageBucket: "founders-forge.appspot.com",
    messagingSenderId: "432269979121",
    appId: "1:432269979121:web:7cb388920973badf072850"
  };

// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err)
    })

    return user;
}
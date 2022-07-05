import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDj2KRHKeur8jlg2FEtd5gJ7WdE7I2mexU",
    authDomain: "myblog-bcfa7.firebaseapp.com",
    projectId: "myblog-bcfa7",
    storageBucket: "myblog-bcfa7.appspot.com",
    messagingSenderId: "982396413499",
    appId: "1:982396413499:web:4e1cdc605383ee37ca5e1e",
    measurementId: "G-3M3D7T9BE8"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export const ath = getAuth(firebaseApp);
const provider = new GoogleAuthProvider()
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        console.log(result);
    })
        .catch((error) => {
            console.log(error);
        })
};
const fprovider = new FacebookAuthProvider()
export const sigInWithFacebook = () => {
    signInWithPopup(auth, fprovider).then((result) => {
        console.log(result);
    })
        .catch((error) => {
            console.log(error);
        })
};
export function useAuth() {
    const [currentUser, setcurrentUser] = useState();
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => setcurrentUser(user))
        return unsub
    }, []);
    return currentUser;
}

export { firebaseApp };
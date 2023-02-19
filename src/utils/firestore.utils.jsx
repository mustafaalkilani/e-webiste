import {initializeApp} from 'firebase/app';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDzIfwTotjaJFjzNs43dOTFil2luNN7INk",
    authDomain: "moh-e-website.firebaseapp.com",
    projectId: "moh-e-website",
    storageBucket: "moh-e-website.appspot.com",
    messagingSenderId: "130118332184",
    appId: "1:130118332184:web:2429db3f5fe9cb4238f86d"
  };
  
initializeApp(firebaseConfig);

export const auth = getAuth();

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}
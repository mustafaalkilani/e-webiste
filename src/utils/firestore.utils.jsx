import { initializeApp } from 'firebase/app';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

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

export const db = getFirestore();
export const storage = getStorage();

export const uploadImageAndGetDownloadUrl = async (imageFile) => {
  const storageRef = ref(storage, 'images/' + imageFile.name);
  const snapshot = await uploadBytes(storageRef, imageFile);
  const downloadUrl = await getDownloadURL(snapshot.ref);

  return downloadUrl;
};


export const uploadFormToFirestore = async (homeTitle, proImage, propertyTitle, propertyExplanation, downloadUrl, subTitle, subMessage, downloadUrlTwo) => {
  try {
    const docRef = await addDoc(collection(db, "properties"), {
      homeTitle: homeTitle,
      proImage: proImage,
      title: propertyTitle,
      explanation: propertyExplanation,
      image: downloadUrl,
      imageTwo: downloadUrlTwo,
      titleTwo: subTitle,
      messageTwo: subMessage,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getAllDocs = async () => {
  const querySnapshot = await getDocs(collection(db, 'properties'));
  const docs = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return docs;
};

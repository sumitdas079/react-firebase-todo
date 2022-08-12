// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_M6KeO9n_pQg7GoiAsIKQrhaow9RTodA",
  authDomain: "react-blog-bbd22.firebaseapp.com",
  projectId: "react-blog-bbd22",
  storageBucket: "react-blog-bbd22.appspot.com",
  messagingSenderId: "548427318656",
  appId: "1:548427318656:web:d7241a3909c85488fead65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
  signInWithPopup(auth,provider).then((res)=>{console.log(res);}).catch((err)=>{console.log(err);})
}
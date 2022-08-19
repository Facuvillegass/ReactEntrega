// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqtgUftFC_K8ydU7_N9UMiaOOFvCIRmSU",
  authDomain: "desafioreactcoder.firebaseapp.com",
  projectId: "desafioreactcoder",
  storageBucket: "desafioreactcoder.appspot.com",
  messagingSenderId: "630505042544",
  appId: "1:630505042544:web:115bfbf472d58986537ab5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db
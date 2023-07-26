import { getFirestore } from "firebase-admin/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJy82AQXJVtOQdBIaX5SQ1CIuSXPc2T00",
  authDomain: "maptodo-c73d4.firebaseapp.com",
  projectId: "maptodo-c73d4",
  storageBucket: "maptodo-c73d4.appspot.com",
  messagingSenderId: "501916825217",
  appId: "1:501916825217:web:3783e1cb6c7a178acd7f80"
};

export const getDocuments = async() => {
    const collRef = collection(db, "locations")
    getDocs(collRef)
        .then((snapshot) => {
            console.log(snapshot.docs)
        })

}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
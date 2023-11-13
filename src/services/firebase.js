 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore"
 import { getAuth } from "firebase/auth"
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyB53haJ4SJlIxixcvkg3YMkH74SLI2PJkg",
   authDomain: "alvarez-edmundo-cwm-tp1.firebaseapp.com",
   projectId: "alvarez-edmundo-cwm-tp1",
   storageBucket: "alvarez-edmundo-cwm-tp1.appspot.com",
   messagingSenderId: "995074858121",
   appId: "1:995074858121:web:24d8667580da3c957d7a58"
 };

 // Initialize Firebase
 export const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app);
 
 export const auth = getAuth(app);
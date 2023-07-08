// import * as firebase from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,signOut} from "firebase/auth";
import{ initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA3AG6wtx4hrmFUlkBMKzdBD0btQuFiG2Y",
    authDomain: "netflix-clone-45674.firebaseapp.com",
    projectId: "netflix-clone-45674",
    storageBucket: "netflix-clone-45674.appspot.com",
    messagingSenderId: "1070784463348",
    appId: "1:1070784463348:web:3ac3059516e95ecb7e79a1"
  };

   const app = initializeApp(firebaseConfig);
  const db =  getFirestore(app);
  const auth = getAuth();



  export {auth,createUserWithEmailAndPassword as createUser,signInWithEmailAndPassword as signinUser,signOut}
  export default db;
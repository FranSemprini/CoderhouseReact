// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOakJjYawglKHyastG9LQrusSYpSeGxac",
  authDomain: "rj-ideasemprini.firebaseapp.com",
  projectId: "rj-ideasemprini",
  storageBucket: "rj-ideasemprini.appspot.com",
  messagingSenderId: "520609265292",
  appId: "1:520609265292:web:31bbae1cf70200d400ada9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
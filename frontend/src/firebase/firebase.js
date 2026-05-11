import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGCG2rZP7-ael9lladzfxuiA6gYcA2moQ",
  authDomain: "e-seva-app.firebaseapp.com",
  projectId: "e-seva-app",
  storageBucket: "e-seva-app.firebasestorage.app",
  messagingSenderId: "852510112741",
  appId: "1:852510112741:web:c12fdf84324772e9f14d0c",
  measurementId: "G-R129XD5N9C"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
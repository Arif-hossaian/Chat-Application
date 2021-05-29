import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyAvlfUUhM5cL9ph0LBaoCwfE-ibbnIYvYM",
  authDomain: "unichat-12a8d.firebaseapp.com",
  projectId: "unichat-12a8d",
  storageBucket: "unichat-12a8d.appspot.com",
  messagingSenderId: "352974416219",
  appId: "1:352974416219:web:b7801fc0ef27b15c84127e",
}).auth();

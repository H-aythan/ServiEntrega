// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection,addDoc,onSnapshot,query,deleteDoc,doc,updateDoc,setDoc}from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDac0f5VqY10gwDY8l94-ROYZFvr-Sxbgk",
    authDomain: "servientregagp.firebaseapp.com",
    projectId: "servientregagp",
    storageBucket: "servientregagp.appspot.com",
    messagingSenderId: "1047762018798",
    appId: "1:1047762018798:web:e738e28989cc76f0d7aeff"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
export {db,collection,addDoc,onSnapshot,query,deleteDoc,doc,updateDoc,setDoc};
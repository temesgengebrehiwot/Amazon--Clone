// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBruBcAk-IZyWXAab3I8kPFTCG4MHNv1nU",
	authDomain: "clone-ae907.firebaseapp.com",
	projectId: "clone-ae907",
	storageBucket: "clone-ae907.firebasestorage.app",
	messagingSenderId: "28680904798",
	appId: "1:28680904798:web:aa287240977e27eb3154cf",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore(); // for firestore

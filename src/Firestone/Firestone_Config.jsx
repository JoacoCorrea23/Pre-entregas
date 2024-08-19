import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAso-wjQ1SyKHsoZrJd_clIQlXln6Tqcdk",
	authDomain: "coderapp23.firebaseapp.com",
	projectId: "coderapp23",
	storageBucket: "coderapp23.appspot.com",
	messagingSenderId: "965314228032",
	appId: "1:965314228032:web:0cb34615c9ad584f2d14a5",
};

initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore();

export { db };

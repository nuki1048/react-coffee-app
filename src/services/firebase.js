// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
	apiKey: "AIzaSyBZoMwLzq-VmJMaIqP9jToLUb8F1Qc0oYM",
	authDomain: "coffe-react-app.firebaseapp.com",
	projectId: "coffe-react-app",
	storageBucket: "coffe-react-app.appspot.com",
	messagingSenderId: "771380316006",
	appId: "1:771380316006:web:3ccf01ebfd18d2f5102aa7",
	measurementId: "G-PZDP9WB60K",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
// export { app, storage, db };

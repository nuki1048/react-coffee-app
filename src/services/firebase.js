// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { useState } from "react";

const useFirebase = () => {
	const firebaseConfig = {
		apiKey: "AIzaSyBZoMwLzq-VmJMaIqP9jToLUb8F1Qc0oYM",
		authDomain: "coffe-react-app.firebaseapp.com",
		projectId: "coffe-react-app",
		storageBucket: "coffe-react-app.appspot.com",
		messagingSenderId: "771380316006",
		appId: "1:771380316006:web:3ccf01ebfd18d2f5102aa7",
		measurementId: "G-PZDP9WB60K",
	};

	const app = initializeApp(firebaseConfig);
	const storage = getStorage(app);
	const db = getFirestore(app);
	const dataCollectionStore = collection(db, "store");
	const dataCollectionBest = collection(db, "best");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const getData = async (collection = dataCollectionStore) => {
		setLoading(true);
		try {
			const data = await getDocs(collection);
			setLoading((loading) => false);
			const filteredItem = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
			return filteredItem;
		} catch (error) {
			console.error(error);
			setError(true);
			setLoading(false);
		}
	};
	const getDataId = async (id, collection = "store") => {
		setLoading(true);
		try {
			const docRef = doc(db, collection, id);
			setLoading((loading) => false);
			return await getDoc(docRef);
		} catch (error) {
			setLoading(false);
			setError(true);
			throw error;
		}
	};

	return { app, db, storage, dataCollectionStore, dataCollectionBest, getData, loading, error, getDataId };
};

export default useFirebase;

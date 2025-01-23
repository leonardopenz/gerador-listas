import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCm86qhiMIjbYBYiSwvrzUGm9IXX53gVGo",
  authDomain: "geradorlistas.firebaseapp.com",
  projectId: "geradorlistas",
  storageBucket: "geradorlistas.firebasestorage.app",
  messagingSenderId: "926687008960",
  appId: "1:926687008960:web:eaec249bf10e3db4bbb525",
  measurementId: "G-05GN7ZGFDE",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Inicializa o Firestore
const db = getFirestore(app);

export { db };

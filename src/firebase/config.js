import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBPIVAobvsyI-YsEBp2G3pVQ339B3joaBk",
  authDomain: "ecommerce-react-effe4.firebaseapp.com",
  projectId: "ecommerce-react-effe4",
  storageBucket: "ecommerce-react-effe4.appspot.com",
  messagingSenderId: "703227684136",
  appId: "1:703227684136:web:828e0ee1fa80e1302e9c1d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
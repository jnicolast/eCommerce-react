import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc } from "firebase/firestore"
import { app } from "./config"

const db = getFirestore(app);

export const getItems = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));
    const items = [];
    querySnapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id });
    })
    return items;
}

export const getItemsFromCategory = async (category) => {
    const q = query(collection(db, "items"), where("category", "==", category))
    const querySnapshot = await getDocs(q);
    const items = [];

    querySnapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id });
    })
    return items;
}

export const getItem = async (id) => {
    const docRef = doc(db, "items", id);
    const docSnap = await getDoc(docRef)
    let item = null;

    if (docSnap.exists()) {
        item = { ...docSnap.data(), id: docSnap.id };
    } else {
        console.log("No such document!");
    }
    return item;

}

export const createOrder = async (order) => {
    try {
        const docRef = await addDoc(collection(db, "orders"), order)
        return docRef.id;
    }
    catch (e) {
        console.error("Error adding document", e.message)
    }
}
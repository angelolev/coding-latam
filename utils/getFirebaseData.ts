import {
  getDocs,
  collection,
  query,
  orderBy,
  getDoc,
  doc,
} from "firebase/firestore";
import { database } from "../firebase/client";

export async function getFirebaseData(col: string) {
  const querySnapshot = await getDocs(collection(database, col));

  const response = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return response;
}

export async function getFirebaseDataOrdered(col: string, type: string) {
  const colRef = collection(database, col);
  const querySnapshot = await getDocs(query(colRef, orderBy(type)));

  const response = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return response;
}

export async function getFirebaseDoc(col: string, ref: string) {
  const docRef = doc(database, col, ref);
  const docSnapshot = await getDoc(docRef);

  return docSnapshot.data();
}

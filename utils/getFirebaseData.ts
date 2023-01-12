import {
  getDocs,
  collection,
  query,
  orderBy,
  getDoc,
  doc,
  where,
} from "firebase/firestore";
import { database } from "../firebase/client";
import { setLessons } from "../store/slices/lessons";

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

export async function getFirebaseDataWithQuery(
  col: string,
  q: string,
  qVal: string
) {
  console.log(qVal, "qval");
  const colRef = collection(database, col);
  const querySnapshot = await getDocs(query(colRef, where(q, "==", qVal)));

  const response = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return response;
}

export async function getFirebaseCollectionDataWithQueryAndOrder(
  col: string,
  type: string,
  order: string
) {
  const colRef = collection(database, col);
  const querySnapshot = await getDocs(
    query(colRef, where("type", "==", type), orderBy(order))
  );

  const response = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return response;
}

export const getLessonsFiltered = (type: string) => {
  return async (dispatch) => {
    const response = await getFirebaseCollectionDataWithQueryAndOrder(
      "lessons",
      type,
      "title"
    );
    dispatch(setLessons(response));
  };
};

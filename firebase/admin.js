const admin = require("firebase-admin");

// const serviceAccount = require("./firebase-keys");
import { secrets } from "./firebase-keys";

admin.initializeApp({
  credential: admin.credential.cert(secrets),
  databaseURL: "https://coding-latam.firebaseio.com",
});

export const firestore = admin.firestore();

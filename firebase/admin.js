const admin = require("firebase-admin");

const serviceAccount = require("./firebase-keys.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://coding-latam.firebaseio.com"
});

export const firestore = admin.firestore()
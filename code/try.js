const fs = require('fs');
const { Console } = require('console');
const admin = require('firebase-admin');
const serviceAccount = require("./final-project-13bb1-firebase-adminsdk-br5ei-05a6bd821a.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://final-project-13bb1.firebaseio.com"
});
const firestore = admin.firestore();
firestore.collection("User").get().then(snapshot => {
  snapshot.forEach(doc =>{
      console.log(doc.id, "=>", doc.data());
  });
});
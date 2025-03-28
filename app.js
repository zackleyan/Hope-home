
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyCNtYvHhYRAWJbwCEz2JGzrsdr-eOEXM",
  authDomain: "hope-core.firebaseapp.com",
  projectId: "hope-core",
  storageBucket: "hope-core.appspot.com",
  messagingSenderId: "871997368346",
  appId: "1:871997368346:web:1f1e6864878b07ce9c9a3"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadMessage() {
  const docRef = doc(db, "messages", "001");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    document.getElementById("message").innerText = docSnap.data().text;
  } else {
    document.getElementById("message").innerText = "No message found.";
  }
}

window.onload = loadMessage;

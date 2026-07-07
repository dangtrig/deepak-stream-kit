import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB4SyT0iDr1qKGIQxh0pLThNk48OyRDCn4",
  authDomain: "deepakstreamkit.firebaseapp.com",
  projectId: "deepakstreamkit",
  storageBucket: "deepakstreamkit.firebasestorage.app",
  messagingSenderId: "749545035008",
  appId: "1:749545035008:web:5355e8a44091529ab50fe5",
  measurementId: "G-SGPWN84EDS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const email = document.getElementById("email");
const password = document.getElementById("password");
const status = document.getElementById("status");

document.getElementById("signupBtn").onclick = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    status.innerText = "✅ Account Created";
  } catch (e) {
    status.innerText = e.message;
  }
};

document.getElementById("loginBtn").onclick = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    status.innerText = "✅ Login Successful";
  } catch (e) {
    status.innerText = e.message;
  }
};

document.getElementById("logoutBtn").onclick = async () => {
  await signOut(auth);
  status.innerText = "👋 Logged Out";
};

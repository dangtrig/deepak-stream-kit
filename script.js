import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged
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

const loginPage = document.getElementById("loginPage");
const dashboard = document.getElementById("dashboard");

document.getElementById("signupBtn").onclick = async () => {
  try {
    await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    status.innerText = "✅ Account Created";
  } catch (e) {
    status.innerText = e.message;
  }
};

document.getElementById("loginBtn").onclick = async () => {
  try {
    await signInWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    status.innerText = "✅ Login Successful";
  } catch (e) {
    status.innerText = e.message;
  }
};

document.getElementById("logoutBtn").onclick = async () => {
  try {
    await signOut(auth);
    status.innerText = "👋 Logged Out";
  } catch (e) {
    status.innerText = e.message;
  }
};

document.getElementById("resetBtn").onclick = async () => {
  if (email.value === "") {
    status.innerText = "Enter your email first.";
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email.value);
    status.innerText = "📧 Password reset email sent.";
  } catch (e) {
    status.innerText = e.message;
  }
};

if (document.getElementById("logoutBtn2")) {
  document.getElementById("logoutBtn2").onclick = async () => {
    await signOut(auth);
  };
}

onAuthStateChanged(auth, (user) => {
  if (loginPage && dashboard) {
    if (user) {
      loginPage.style.display = "none";
      dashboard.style.display = "block";
    } else {
      loginPage.style.display = "block";
      dashboard.style.display = "none";
    }
  }
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNZyh38UBQitifrjkaTQnYV0bi5mEzbj4",
  authDomain: "auth-54b5a.firebaseapp.com",
  projectId: "auth-54b5a",
  storageBucket: "auth-54b5a.appspot.com",
  messagingSenderId: "474274408575",
  appId: "1:474274408575:web:29ba30106042de7c0d774a",
  measurementId: "G-RRCZYL9FSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', () => {
  // DOM elements
  const submitButton = document.getElementById('signupButton');

  // Event listener for the submit button
  submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    // Inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Account created successfully!");

        // Store authentication state in local storage
        localStorage.setItem('isAuthenticated', 'true');

        // Redirect to the main website
        window.location.href = "http://127.0.0.1:5500/hack4B/index.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  });
});

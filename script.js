import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAzuZfOdDjztQvgEbtDoO-DQJO_1Hqnsf4",
  authDomain: "noorul-ilm-management.firebaseapp.com",
  projectId: "noorul-ilm-management",
  storageBucket: "noorul-ilm-management.firebasestorage.app",
  messagingSenderId: "1091358323396",
  appId: "1:1091358323396:web:65a0fed12ecb5c749f4f91",
  measurementId: "G-0ER6H616VF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
document.addEventListener("DOMContentLoaded", function () {
  console.log("Noorul Ilm System Ready");

  const buttons = document.querySelectorAll(".menu-btn");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      alert("Noorul Ilm - স্বাগতম!");
    });
  });
});

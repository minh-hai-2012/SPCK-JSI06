import { initializeApp } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


import { getAuth } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



const firebaseConfig = {
  apiKey: "AIzaSyB4pQCj8O9Fhla5gnuo4RoLduxF-Qx3Vh0",
  authDomain: "spck-jsi06-ae79b.firebaseapp.com",
  projectId: "spck-jsi06-ae79b",
  storageBucket: "spck-jsi06-ae79b.firebasestorage.app",
  messagingSenderId: "732053274559",
  appId: "1:732053274559:web:22707443a2eb209f0c6b0a"
};
  



const app = initializeApp(firebaseConfig);
console.log(app);




export const auth = getAuth(app);
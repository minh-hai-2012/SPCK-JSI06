import { auth } from "../firebase.js";


import {
    signInWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



const loginBtn = document.querySelector("#loginBtn");



loginBtn.addEventListener("click", function(){


    const email =
    document.querySelector("#email").value;


    const password =
    document.querySelector("#password").value;



    if(email === "" || password === ""){

        alert("Vui lòng nhập đầy đủ thông tin");

        return;

    }



    signInWithEmailAndPassword(
        auth,
        email,
        password
    )


    .then((userCredential)=>{


        alert("Đăng nhập thành công");


        window.location.href =
        "../home.html";


    })


    .catch((error)=>{


        alert("Sai email hoặc mật khẩu");


        console.log(error.message);


    });


});
const firebaseConfig = {
    apiKey: "AIzaSyByxRp27D7vCtqSOv6arz8iOngQr20IeQ4",
    authDomain: "hai-s-project.firebaseapp.com",
    projectId: "hai-s-project",
    storageBucket: "hai-s-project.firebasestorage.app",
    messagingSenderId: "883858975739",
    appId: "1:883858975739:web:907964be5a8c218fbd395e",
    measurementId: "G-NBS721D6W0"
  };
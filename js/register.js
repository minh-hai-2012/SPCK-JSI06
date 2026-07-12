import { auth } from "../firebase.js";


import {
    createUserWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



const registerBtn =
document.querySelector("#registerBtn");



registerBtn.addEventListener("click", function(){


    const email =
    document.querySelector("#email").value;


    const password =
    document.querySelector("#password").value;



    if(email === "" || password === ""){

        alert("Vui lòng nhập đầy đủ thông tin");

        return;

    }



    createUserWithEmailAndPassword(
        auth,
        email,
        password
    )


    .then((userCredential)=>{


        alert("Đăng ký thành công");


        window.location.href =
        "../login/login.html";


    })


    .catch((error)=>{


        alert(error.message);


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

import { auth } from "./firebase.js";

import {
    signInWithEmailAndPassword
} 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const loginBtn = document.querySelector("#loginBtn");


loginBtn.onclick = function(){


    const email =
    document.querySelector("#email").value;


    const password =
    document.querySelector("#password").value;



    signInWithEmailAndPassword(
        auth,
        email,
        password
    )


    .then(()=>{

        alert("Đăng nhập thành công");

        window.location.href="home.html";

    })


    .catch((error)=>{

        document.querySelector("#message").innerHTML =
        error.message;

    });


}
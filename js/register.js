import { auth } from "./firebase.js";


import {
    createUserWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



const registerBtn =
document.querySelector("#registerBtn");



registerBtn.onclick = function(){


    const email =
    document.querySelector("#email").value;


    const password =
    document.querySelector("#password").value;



    if(email === "" || password === ""){

        document.querySelector("#message").innerHTML =
        "Vui lòng nhập đầy đủ thông tin";

        return;

    }



    createUserWithEmailAndPassword(
        auth,
        email,
        password
    )


    .then(()=>{


        alert("Đăng ký thành công");


        window.location.href =
        "login.html";


    })


    .catch((error)=>{

        console.log(error.code);
    
        console.log(error.message);
    
        alert(error.code);
    
    });



}
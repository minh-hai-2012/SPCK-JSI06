import { auth } from "./firebase.js";

import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const loginBtn = document.querySelector("#loginBtn");
const googleLoginBtn =
document.querySelector("#googleLoginBtn");

const provider =
new GoogleAuthProvider();


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
        console.log(error);
        

    });


}
googleLoginBtn.onclick = function(){

    signInWithPopup(auth, provider)

    .then((result)=>{

        alert("Đăng nhập Google thành công");

        window.location.href = "home.html";

    })

    .catch((error)=>{

        alert(error.message);

    });

}
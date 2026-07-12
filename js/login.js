let btn = document.getElementById("loginBtn");

btn.addEventListener("click", function(){

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let message = document.getElementById("message");

    if(username === "" || password === ""){
        message.textContent = "Vui lòng nhập đầy đủ!";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(u => u.name === username && u.pw === password);

    if(user){
        message.textContent = "Đăng nhập thành công!";

        localStorage.setItem("currentUser", JSON.stringify(user));

        setTimeout(()=>{
            window.location.href = "home.html";
        },1000);

    }else{
        message.textContent = "Sai tài khoản hoặc mật khẩu!";
    }

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
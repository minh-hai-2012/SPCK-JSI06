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

    // 🔥 SỬA Ở ĐÂY (name + pw)
    let user = users.find(u => u.name === username && u.pw === password);

    if(user){
        message.textContent = "Đăng nhập thành công!";

        // lưu user hiện tại
        localStorage.setItem("currentUser", JSON.stringify(user));

        setTimeout(()=>{
            window.location.href = "home/home.html";
        },1000);

    }else{
        message.textContent = "Sai tài khoản hoặc mật khẩu!";
    }

});
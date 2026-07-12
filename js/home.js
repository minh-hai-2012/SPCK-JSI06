import { auth } from "./firebase.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



// =====================
// CHUYỂN TRANG
// =====================

const homeBtn = document.querySelector('#homeBtn');
const registerBtn = document.querySelector('#registerBtn');
const loginBtn = document.querySelector('#loginBtn');
const playlistBtn = document.querySelector('#playlistBtn');
const chartsBtn = document.querySelector('#chartsBtn');
const videoBtn = document.querySelector('#videoBtn');



if(homeBtn){
    homeBtn.onclick = () => {
        window.location.href = "home.html";
    };
}


if(registerBtn){
    registerBtn.onclick = () => {
        window.location.href = "register/register.html";
    };
}


if(loginBtn){
    loginBtn.onclick = () => {
        window.location.href = "login/login.html";
    };
}


if(playlistBtn){
    playlistBtn.onclick = () => {
        window.location.href = "playlist/playlist.html";
    };
}


if(chartsBtn){
    chartsBtn.onclick = () => {
        window.location.href = "BXH.html";
    };
}


if(videoBtn){
    videoBtn.onclick = () => {
        window.location.href = "Video.html";
    };
}





// =====================
// FIREBASE ĐĂNG NHẬP
// =====================


const accountArea =
document.querySelector("#accountArea");



if(accountArea){


onAuthStateChanged(auth,(user)=>{


    if(user){


        accountArea.innerHTML = `

            <span>
                ${user.email}
            </span>


            <button id="logoutBtn">
                Đăng xuất
            </button>

        `;



        const logoutBtn =
        document.querySelector("#logoutBtn");



        logoutBtn.onclick = () => {


            signOut(auth)

            .then(()=>{

                alert("Đã đăng xuất");

                location.reload();

            })

            .catch((error)=>{

                console.log(error);

            });


        };


    }

    else{


        accountArea.innerHTML = `


            <button id="registerBtn">
                Đăng ký
            </button>


            <button id="loginBtn">
                Đăng nhập
            </button>


        `;



        document
        .querySelector("#registerBtn")
        .onclick = () => {

            window.location.href =
            "register/register.html";

        };



        document
        .querySelector("#loginBtn")
        .onclick = () => {

            window.location.href =
            "login/login.html";

        };


    }


});


}





// =====================
// SLIDER
// =====================


let index = 0;


const slides =
document.querySelector(".slides");



if(slides){


const total =
slides.children.length;



function showSlide(i){


    index = i;


    if(index >= total){

        index = 0;

    }


    if(index < 0){

        index = total - 1;

    }


    slides.style.transform =
    `translateX(-${index * 100}%)`;

}



const next =
document.querySelector(".next");


const prev =
document.querySelector(".prev");



if(next){

next.onclick = () => {

    showSlide(index + 1);

};

}



if(prev){

prev.onclick = () => {

    showSlide(index - 1);

};

}



setInterval(()=>{

    showSlide(index + 1);

},3000);



}






// =====================
// MUSIC PLAYER
// =====================


const playBtn =
document.querySelector("#playBtn");


const audioPlayer =
document.querySelector("#audioPlayer");



let isPlaying = false;



if(playBtn && audioPlayer){



playBtn.onclick = ()=>{


    if(isPlaying){


        audioPlayer.pause();

        playBtn.innerHTML = "▶";


    }

    else{


        audioPlayer.play();

        playBtn.innerHTML = "⏸";


    }


    isPlaying = !isPlaying;


};



}
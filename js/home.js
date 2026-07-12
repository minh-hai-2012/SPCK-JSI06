import { auth } from "./firebase.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const homeBtn = document.querySelector('#homeBtn')
const registerBtn = document.querySelector('#registerBtn')
const loginBtn = document.querySelector('#loginBtn')
const playlistBtn = document.querySelector('#playlistBtn')
const chartsBtn = document.querySelector('#chartsBtn')
const videoBtn = document.querySelector('#videoBtn')

if(homeBtn){
    homeBtn.addEventListener('click', () => {
        window.location.href = 'home.html'
    })
}

if(registerBtn){
    registerBtn.addEventListener('click', () => {
        window.location.href = 'register/register.html'
    })
}

if(loginBtn){
    loginBtn.addEventListener('click', () => {
        window.location.href = 'login/login.html'
    })
}

if(playlistBtn){
    playlistBtn.addEventListener('click', () => {
        window.location.href = 'playlist/playlist.html'
    })
}

if(chartsBtn){
    chartsBtn.addEventListener('click', () => {
        window.location.href = 'BXH.html'
    })
}
if(videoBtn){
    videoBtn.addEventListener('click', () => {
        window.location.href = 'Video.html'
    })
}
let index = 0

const slides = document.querySelector('.slides')


if(slides){

    const total = slides.children.length


    function showSlide(i){

        index = i

        if(index >= total){
            index = 0
        }

        if(index < 0){
            index = total - 1
        }

        slides.style.transform =
        `translateX(-${index * 100}%)`

    }


    document.querySelector('.next').onclick = () => {
        showSlide(index + 1)
    }


    document.querySelector('.prev').onclick = () => {
        showSlide(index - 1)
    }


    setInterval(() => {
        showSlide(index + 1)
    },3000)

}





const playBtn = document.querySelector('#playBtn')
const audioPlayer = document.querySelector('#audioPlayer')

let isPlaying = false


if(playBtn){

    playBtn.addEventListener('click',()=>{


        if(isPlaying){

            audioPlayer.pause()

            playBtn.innerHTML = '▶'

        }

        else{

            audioPlayer.play()

            playBtn.innerHTML = '⏸'

        }


        isPlaying = !isPlaying

    })

}

const accountArea = document.querySelector("#accountArea")


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

            `



            document
            .querySelector("#logoutBtn")
            .onclick = () => {


                signOut(auth)
                .then(()=>{

                    alert("Đã đăng xuất")

                    location.reload()

                })


            }



        }

        else{


            accountArea.innerHTML = `

            <button id="registerBtn">
                Đăng ký
            </button>


            <button id="loginBtn">
                Đăng nhập
            </button>

            `



            document
            .querySelector("#registerBtn")
            .onclick = () => {

                window.location.href =
                "register/register.html"

            }



            document
            .querySelector("#loginBtn")
            .onclick = () => {

                window.location.href =
                "login/login.html"

            }


        }


    })

}
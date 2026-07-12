const homeBtn = document.querySelector('#homeBtn')
const registerBtn = document.querySelector('#registerBtn')
const loginBtn = document.querySelector('#loginBtn')
const playlistBtn = document.querySelector('#playlistBtn')
const chartsBtn = document.querySelector('#chartsBtn')
const videoBtn = document.querySelector('#videoBtn')

homeBtn.addEventListener('click', () => {
    window.location.href = 'home.html'
})

registerBtn.addEventListener('click', () => {
    window.location.href = 'register/register.html'
})

loginBtn.addEventListener('click', () => {
    window.location.href = 'login/login.html'
})

playlistBtn.addEventListener('click', () => {
    window.location.href = 'playlist/playlist.html'
})
chartsBtn.addEventListener('click', () => {
    window.location.href = 'BXH.html'
})
videoBtn.addEventListener('click', () => {
    window.location.href = 'Video.html'
})
let index = 0

const slides = document.querySelector('.slides')
const total = slides.children.length

function showSlide(i){

    index = i

    if(index >= total){
        index = 0
    }

    if(index < 0){
        index = total - 1
    }

    slides.style.transform = `translateX(-${index * 100}%)`
}

document.querySelector('.next').onclick = () => {
    showSlide(index + 1)
}

document.querySelector('.prev').onclick = () => {
    showSlide(index - 1)
}

setInterval(() => {
    showSlide(index + 1)
}, 3000)


const playBtn = document.querySelector('#playBtn')
const audioPlayer = document.querySelector('#audioPlayer')

let isPlaying = false

playBtn.addEventListener('click', () => {

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
let username=document.querySelector('#username')
let password=document.querySelector('#password')
let submit=document.querySelector('#form-register')

function saveUsers(arrayUser,user){
    arrayUser.push(user)
    // console.log(arrayUser);
    localStorage.setItem('users',JSON.stringify(arrayUser))
}

submit.addEventListener('click',(e)=>{
    e.preventDefault()
    let username=document.querySelector('#username')
    let password=document.querySelector('#password') 

    if (password.value.length < 6) {
        alert('Password quá ngắn, vui lòng nhập lại')
        return
    } else {
        const user={
        name:username.value,
        pw:password.value
    }

    console.log('user ',user);
    
    if (localStorage.getItem('users')){
        const arrayUser=JSON.parse(localStorage.getItem('users'))
        console.log('arrayUser',arrayUser);
        saveUsers(arrayUser,user)
    }else{
        const arrayUser=[]
        saveUsers(arrayUser, user)
    }
    username.value=''
    password.value=''
    window.location.href='home.html'

    }
    
    
})
const firebaseConfig = {
    apiKey: "AIzaSyByxRp27D7vCtqSOv6arz8iOngQr20IeQ4",
    authDomain: "hai-s-project.firebaseapp.com",
    projectId: "hai-s-project",
    storageBucket: "hai-s-project.firebasestorage.app",
    messagingSenderId: "883858975739",
    appId: "1:883858975739:web:907964be5a8c218fbd395e",
    measurementId: "G-NBS721D6W0"
  };

document.addEventListener('DOMContentLoaded',() =>{
    const authButton = document.getElementById('authButton');
    const loginForm = document.getElementById('loginForm');
    if(localStorage.getItem('username')&&localStorage.getItem('password')){
        authButton.textContent='Logout';
    }else{
        authButton.textContent='Login';
    }
    authButton.addEventListener('click',()=>{
        if(authButton.textContent =='Login'){
            loginForm.style.display = 'flex';
        }else{
            logout();
        }
    });
});

function login(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if(username&&password){
        localStorage.setItem('username',username);
        localStorage.setItem('password',password);
        document.getElementById('authButton').textContent='logout';
        document.getElementById('loginForm').style.display='none';
    }else{
        alert('Please enter username and password');
    }
}

function logout(){
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    document.getElementById('authButton').textContent='Login';
}
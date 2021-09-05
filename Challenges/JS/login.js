
const loginForm=document.querySelector("#loginForm");
const NameArea=document.getElementById("NameArea");
const Hide="hidden";

function login(event){
event.preventDefault();
const loginInput=loginForm.querySelector("input");
const UserName=loginInput.value;

localStorage.setItem("UserName",UserName);
loginForm.classList.add(Hide);
printGreeting(UserName);

}


function printGreeting(UserName){

NameArea.innerText=`Welcome ${UserName}
    I hope you have a great day`
    NameArea.classList.remove(Hide);

}

    const savedName=localStorage.getItem("UserName");
    if(savedName===null){

        loginForm.classList.remove(Hide);
        loginForm.addEventListener("submit",login);
    }
    else{
        loginForm.classList.add(Hide);
        printGreeting(savedName);

    }

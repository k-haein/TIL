const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

//또는 아래처럼도 가능하다.
/*
const loginInput =  documnet.querySelector("#login-form input");
const loginButton =  documnet.querySelector("#login-form button");
*/


function onLoginBtnClick(){
    console.log("click");
};
loginButton.addEventListener("click",);
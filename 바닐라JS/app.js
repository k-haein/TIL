const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

//또는 아래처럼도 가능하다.
/*
const loginInput =  documnet.querySelector("#login-form input");
const loginButton =  documnet.querySelector("#login-form button");
*/


function onLoginBtnClick(){
    console.dir(loginInput);//함수 실행하면서 input 내부를 보여줌.
    //value 인자를 보자. HTML에 인라인으로 value를 설정해줄 수도 있고, 값을 직접 브라우저에서 넣을수도 있다.
    //기본적으로 여기에는 내 input 안에 들어있는 텍스트(실수)를 보여주는데 지금은 빈값이다.
    console.log("click",loginInput.value);//이렇게 꺼낼 수 있다.
    
    
//유효성 검사를 해보자.
//1. 빈값 말고, 너무 긴 이름 말고.

const username = loginInput.value;
if(username === ""){
    console.log("empty");
}else if(username.length){
    alert("too long");
}else{
    console.log("username : ", username);
}
}; 
loginButton.addEventListener("click",onLoginBtnClick);



//const loginForm = document.getElementById("login-form");
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const loginButton = loginForm.querySelector("button");

//또는 아래처럼도 가능하다.
/*
const loginInput =  documnet.querySelector("#login-form input");
const loginButton =  documnet.querySelector("#login-form button");
*/

/*
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
*/
function onLoginSubmit(event){
    const username = loginInput.value;
    //console.log(username);
    event.preventDefault(); //어떤 event의 기본 행동 발생을 막는다.submit의 경우 reload
    console.log(loginInput.value);
    //모든 EventListener function의 첫번째 argument는 항상 지금 막 벌어진 일에 대한 정보를 제공한다.
    //그래서 보통 관행이 첫번째 인자 이름이 event이다.
}

loginForm.addEventListener("submit",onLoginSubmit);

//여기까지 submit 값을 받아왔고, 아직 새로고침은 못막고 있다.
//브라우저는 ()가 붙은건 바로 실행한다. 우리는 바로 실행하기를 원하는것은 아니고, 이름만 주고 실행은 자바스크립트가 알아서 시켜준다.


//이제 링크의 기본동작도 막아보자.
const link = document.querySelector("a");
function handleLinkClick(event){

    alert("click!") //여기까지 하면 alert가 생긴 뒤에 링크의 기본동작인 링크 연결이 실행됨.
    event.preventDefault();//또 기본동작을 막아주자.
}

link.addEventListener("click",handleLinkClick);


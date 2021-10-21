// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

//const titleId = document.getElementById("title"); //id 값 가져오기
//titleId.innerText = "Got you!";//Text 바꾸기

const title = document.querySelector("div.hello:first-child h1");
//console.log(title);
//title.style.color = "blue"; //색상 설정

// // Title 클릭
// function handleTitleClick() {
//   console.log("클릭 시 벌어지는 일들");
//   title.innerText = "Title was Clicked!"; //text변화
//   title.style.color = "blue"; //색상변화
// }

// // Title 마우스호버
// function handleTitleMouseover() {
//   console.log("호버 시 벌어지는 일들");
//   title.innerText = "Title was hovered!"; //text변화
//   title.style.color = colors[0]; //색상변화
// }

// // Title 마우스아웃
// function handleTitleMouseleave() {
//   console.log("마우스아웃 시 벌어지는 일들");
//   title.innerText = "Title was out!"; //text변화
//   title.style.color = colors[1]; //색상변화
// }

// // Title 리사이즈
// function handleWindowResize() {
//   console.log("resize 시 벌어지는 일들");
//   title.innerText = "Title was resize!"; //text변화
//   title.style.color = colors[2]; //색상변화
// }

// // Title contextmenu
// function handleTitlecontextmenu() {
//   console.log("contextmenu 시 벌어지는 일들");
//   title.innerText = "Title was contextmenu!"; //text변화
//   title.style.color = colors[3]; //색상변화
// }
// //title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseover", handleTitleMouseover);
// title.addEventListener("mouseleave", handleTitleMouseleave);
// window.addEventListener("resize", handleWindowResize);
// title.addEventListener("contextmenu", handleTitlecontextmenu);

const superEventHandler = { //이거 사용을 어떻게 하는지 한참 찾음.
  // Title 마우스호버
  handleTitleMouseover: function () {
    console.log("호버 시 벌어지는 일들");
    title.innerText = "Title was hovered!"; //text변화
    title.style.color = colors[0]; //색상변화
  },

  // Title 마우스아웃
  handleTitleMouseleave: function () {
    console.log("마우스아웃 시 벌어지는 일들");
    title.innerText = "Title was out!"; //text변화
    title.style.color = colors[1]; //색상변화
  },

  // Title 리사이즈
  handleWindowResize: function () {
    console.log("resize 시 벌어지는 일들");
    title.innerText = "Title was resize!"; //text변화
    title.style.color = colors[2]; //색상변화
  },

  // Title contextmenu
  handleTitlecontextmenu: function () {
    console.log("contextmenu 시 벌어지는 일들");
    title.innerText = "Title was contextmenu!"; //text변화
    title.style.color = colors[3]; //색상변화
  }
};

//title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseover", superEventHandler.handleTitleMouseover);
title.addEventListener("mouseleave", superEventHandler.handleTitleMouseleave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
title.addEventListener("contextmenu", superEventHandler.handleTitlecontextmenu);

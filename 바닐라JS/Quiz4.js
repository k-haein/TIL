const title = document.querySelector("div.hello:first-child h1");
console.log(title);
title.style.color = "white";
document.body.style.backgroundColor = "#3498db";


function handleResize() {
  var wframe = window.innerWidth
  console.log(wframe);
  if(wframe<=200){
    title.style.backgroundColor = "#3498db";
  }else if(wframe>200 &&wframe <=400){
    title.style.backgroundColor = colors[2];
  }else if(wframe>400 &&wframe <=600){
    title.style.backgroundColor = colors[3];
  }else if(wframe>600 &&wframe <=800){
}

window.addEventListener("resize", handleResize)
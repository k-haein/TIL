
# 1. create react app

## 1. react 실행

리액트의 코드는 기본적으로 자바스크립트의 문법을 따르는데, 현대적인 언어이기 때문에 브라우저는 이코드를 이해하지 못한다. 

따라서 이해할 수 있는 코드로 바꿔주는 프로그램 설치가 필요하다. 

하지만 이를 명령어 하나를 실행해서 리액트를 실행할 수 있게 해주는게 있다.

그게 바로  create react app이다.

명령어 하나로 리액트 앱을 set up해준다.

<br>

터미널을 켜서 Document로 들어간다.

> cd Documents

그러면 터미널 위치가 Documents로 들어간다.

여기서 우리는 npx를 이용해 create react app을 해줄 것이다. 이름 뒤에 날짜를 적도록 하자.

> npx create-react-app movie_app_2021

그러면 리액트 생성이 이루어지며 다운로드가 된다.

디운로드가 끝나면 success가 뜨며 recommend를 해주는데, yarn start, yarn build 등을 추천해준다.

<br>

이제 Visual Studio Code를 열어서 Documents에 설치된 movie_app_2021를 열어보자.

폴더를 열고, README.md 내용을 지우고 현재 프로젝트의 설명을 써주도록 하자.(현재 TIL을 쓰는 것처럼.)

package.json으로 가면 사용할 수 있는 정보들이 나온다. 여기서 우리는 script에 있는 start와 build가 제일 중요하다.

<code>
 "scripts": {<br>
    "start": "react-scripts start",<br>
    "build": "react-scripts build",<br>
...
</code>

yarn은 npm이랑 동일한 역할을 하는데 우리한테는 설치되어있지 않을꺼다.

<br>

일단 실행부터 해보자.

VSC의 터미널을 열고 실행해본다. 위치는 반드시 실제 파일이 있는 경로에서 실행해야 한다.

> npm start

브라우저가 실행되면서 리액트 프로그램이 켜졌다는 화면이 뜬다.

브라우저 주소는 http://localhost:3000/ 이다.

<br>

-----------------

<br>

## 2. github 연동
이제 github랑 연동해보자.

github 연동이 되는지는 VSC 터미널에 다음과 같이 입력해보면 된다.

> git init
 

깃허브 들어가서 레퍼지토리 생성한다.

프로젝트 이름은 헷갈리지 않게 동일한 이름을 넣는 것을 추천.

생성 후에 깃허브 URL을 복사한다.

VSC 터미널로 와서 연결해주자.(리액트 실행 창 말고 터미널을 분할해서 실행해주자.)

> add origin 깃주소

 이제 저장한 것들을 전부 넣고 commit 해준다.

 > git add .
 
 > git Commit -m "코멘트"


뭔가 뜬다. 뭐 이름 설정을 자기 마음대로 한다는 듯. 패스한다.
<pre>
이름과 전자메일 주소를 사용자 이름과 호스트 이름을 이용해서 자동으로 설정했습니다. 이 정보가 맞는지 확인하십시오. 

...

git config --global --edit

git commit --amend --reset-aithor
</pre>

git에 push해준다.
 > git push origin master


깃허브 접속해서 확인해보자.

<br>

-----------------

<br>

## 3. 실행해보기

public에 있는 favicon은 브라우저 상단의 아이콘.

인덱스 페이지와 manifest.json은 PWA이다. 이걸 한번 찾아보자.
<pre>
manifest.json 파일은 json 포맷 파일로서, 모든 웹 익스텐션이 포함하고 있어야 하는 파일입니다. 

manifest.json을 사용함으로써, 당신은 당신의 익스텐션의 이름, 버젼과 같은 기본 정보를 명시하며, 또한 당신의 익스텐션의 기능, 예를 들어 기본 스크립트, 내용 스크립트, 브라우져 활동 등과 같은 측면을 명시합니다. 
</pre>

src 폴더에 우리가 직접 작성할 소스코드 파일이 들어가고, public 폴더에 static 자원이 위치한다.
static 자원이란, html, css, image, javascript와 같이 컴파일이 필요없는 파일들이다.

다 집어치우고 가장 기본적인 핵심파일만 보자.

<br>
3가지 파일들이 있다.

<b>1) index.html 2) index.js 3) App.js</b>

<br>

index.html은 주석에 쓰여있듯, 템플릿이다. (This HTML file is a template.) 

HTML은 원래 다양한 태그들과 함께 웹페이지의 기본 골격을 꾸며주는 템플릿이다. 

PPT에 템플릿을 불러오면 제목과 목차, 내용이 불러와지듯, HTML은 웹페이지의 골격을 만드는 파일이다. 

흔히 처음 실행했을 때 나오는 파일을 목차, index라는 이름으로  불러온다.

여기서도 public 즉, 외부에 보여지는 public한, 컴파일할 필요가 없는 기본 템플릿으로 이 index.html이 담겨있다.

<br>

그다음은 당연하게도 이 index.html을 움직이는 녀석이 필요하다. 

보통 짝을지어 동일한 이름의 js파일을 만든다. index.js는 이 딱딱한 템플릿에 움직임을 준다. 

이거는 js를 따로 분리해놔서 그런데, 원래 html 안에 script태그를 이용해서 head나 body나 용량이 크고 무거운 것들은 바디 뒤에 놓기도 한다. 

<i>여기서는 index.js를 따로 떼놓은건데, 그럼 html에 import해놓는게 있어야하지 않나? 그 링크가 없네...</i>

<br>

뭐 암튼, index.html에는 여러 골격이 있고, body태그 안에 div 태그가 하나 있다. 

id는 root이다. 여기가 바로 근-본이라는 뜻(...) 

이 root는 어디에 연결이 되어있냐? 바로 이 딱딱한 골자 html에게 영혼을 불어다주는 js 파일에 있다.

<br>

뭔지는 모르겠지만 index.js 안에는 React가 import 되어있고, react-DOM이라는 익숙한 말의 DOM이 있고, App이 import 된다. 

<code> 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); 
</code>

ReactDOM을 랜더링한다. 랜더링이란, HTML,CSS,JavaScript 등 개발자가 작성한 문서를 브라우저에서 그래픽 형태로 출력하는 과정을 말한다. 

즉, 리액트의 DOM이 우리가 쓰는걸 찍어준단다. 근데 어디에? 바로 우리의 근-본 root가 되시겠다. 돔의 원소인 document가 id값이 root인 곳을 찾아준단다.

<code> document.getElementById('root')</code>

마지막 한놈이 남았다. js파일이 좌표를 찍어줬으니 우리는 내용을 작성해야 한다. 

그 위치가 바로 App.js이다. 얘도 js니까 움직임을 주겠지? 

<code>
function App() {
  return ( 
    ~
  );
}
export default App;
</code>

보니까 함수가 있다. 이 함수 이름이 App이란다. 아 그러면 index.js에서 불러왔던 App놈이 이놈이겠군.

 함수의 return값에 className="App"인 div태그가 있다. 
 
 바로 이곳, <b>Vertual Document Object Model : virtual DOM</b>인 가상 돔이 이 App.js이다. 
 
 이곳은 index.html과 연결되어 있지 않으며, 그저 함수 안에 div태그 공간이 있을 뿐이다. 이곳은 실제가 없는 가상이다. 하지만 우리는 아까 index.js 에서 좌표를 연결해두었고, 이곳 가상에서 무언가를 작성하면 겁나 빠르게 랜더링이 되어 아까 탬플릿 중 root자리에 작성한 것이 동적으로 들어간다.

<br>

-----------------

<br>

## 4. SPA 프레임워크 : single Page Aplication

기존 MVC 웹 개발은 많은 편리함이 있으나 문제점이 있었다. 일부만 바뀌었는데도 다시 페이지를 전부 불러와야하는 문제점이다. 일부만 바뀌었는데도 전부를 다시 갈아끼우는 것. 

이건 Ajax가 생김에 따라 http통신이 생김에 따라 js로 특정 부분만 바꿀 수 있게 명령할 수 있게 되었다. 다만 이건 일일히 프로그래밍 해야한다. 


두번째로 PC부터 모바일, ios, 안드로이드 등 여러 포맷이 생기면서 이를 일일히 만들 수가 없게 되었다. 안드로이드나 ios는 자체적인 소프트웨어와 시스템이 있어서 서버에서 데이터만 보내주면 알아서 랜더링해주는데, 웹은 안된다.

그렇다면 웹에서는 그렇게 할 수 없을까? 그러면 일일히 만들필요 없는데. 

그래서 프론트엔드, 클라이언트 웹에서 데이터를 받아서 알아서 랜더링해주는 프로그램이 생겼다.

기존의 서버 개발자가 데이터가 바뀔 때마다 어디가 어떻게 달라지는지 정보를 주고, 클라이언트 페이지까지 띄우게끔 개발할 필요 없이, "우리가 알아서 할께" 한것들이 SPA 프레임워크이다.

- 정적 웹 : 완성품 진열된 편의점
- 동적 웹 : 그때 그때 주문한 페이지를 요리해주는 식당
- SPA : 재료만 주면 우리가 알아서 구워먹을께!

SPA에 있는 js가 불판이다. 데이타미다 알아서 알맞은 html을 랜더링해주는 것.

이렇게 되면 뭐가 업데이트 될 때마다 <b>데이터</b>만 더 받아오면 된다. 기존에는 불판까지 싹 갈았는데 SPA는 고기만 갖다주면 불판 하나여도 계속 만들어낸다는 것. 그래서 싱글페이지로 한번에 로드된 화면에서 많은 기능을 수행한다. 이는 속도도 매우 빠르다.

<h3>한줄 요약 : <u>타이쿤 게임.</u> index.html이라는 골격에 재료 구멍을 뚫어놓으면, 서버에서 재료를 넣어주었을 때 알아서 레시피대로 화면에 랜더링해준다.</h3>


<!-- 2021.09.12~14-->
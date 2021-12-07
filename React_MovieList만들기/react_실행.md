
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

```
 "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
...
```

yarn은 npm이랑 동일한 역할을 하는데 우리한테는 설치되어있지 않을꺼다.

<br>

일단 실행부터 해보자.

VSC의 터미널을 열고 실행해본다. 위치는 반드시 실제 파일이 있는 경로에서 실행해야 한다.

> npm start

브라우저가 실행되면서 리액트 프로그램이 켜졌다는 화면이 뜬다.

브라우저 주소는 http://localhost:3000/ 이다.

<br>

<!-- 2021.09.12-->
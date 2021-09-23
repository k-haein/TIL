# github 연결

> npm i gh-pages

내 웹사이트를 github의 도메인에 나타나게 해준다.

package.json에 들어가서 homepage를 주소해준다. 프로젝트명 및 유저 이름이 모두 소문자여야 한다.

또한 scripts에 추가해준다.
<pre>
"scripts": {
...
    "deploy": "gh-pages -d build", //gh-page에 연결
    "predeploy": "npm run build" //연결 전에 build를 선행한다. 
  },
...

  },
  "homepage": "https://k-haein.github.io/movie_app_2021/"
}
</pre>

빌드를 해보자.

> npm run build

빌드 폴더가 생기면서 축소화된 파일들이 생긴다.

![스크린샷 2021-09-23 오후 11 29 24](https://user-images.githubusercontent.com/75053256/134526301-27ed7281-479a-41ed-a43c-3d886230dc1b.png)

그리고 이 빌드한 페이지들을 gh-pages에 업로드를 한다.

이 과정을 deploy라는 키워드에 담아서 콘솔에서 실행할 수 있게 하는 것.

따라서 pre의 경우 deploy하면 자동으로 따라오므로

> npm run deploy

그럼 홈페이지 주소로 들어갔을 때 화면이 나오게 된다.

build 폴더를 얻어야 그 폴더를 올리는 것이기 때문에 이 과정이 꼭 필요하다.


# react hook 은 class와 같다.



<!-- 2021.09.23-->
 
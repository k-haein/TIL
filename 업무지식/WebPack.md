# WebPack(웹팩)

```
JavaScript 애플리케이션을 위한 module bundler
```
모듈 : 프로그래밍의 기능적 단위

번들러 : 묶어주는 도구

웹팩은 애플리케이션에 필요한 모든 파일(모듈)을 병합하고 압축해서 하나의 결과물(번들)을 생성하는 도구이다.

웹팩을 하는 경우 파일 수와 크기가 줄어들게 된다. 따라서 로딩 시간이 줄어든다.

로더 (Loader)

웹팩은 모든 파일을 모듈로 본다. 하지만 웹팩은 자바스크립트 밖에 읽지 못한다. 그래서 HTML, CSS, Images, 폰트 등을 웹팩이 읽을 수 있게 변환해줘야 하는데, 이 역할을 하는 게 바로 로더이다.

로더가 파일(모듈)을 해석하고 변환하는 과정에 필요한다면, 플러그인은 결과물(번들)에 추가적인 처리를 하고싶을 때 필요하다.

<!-- 2022.03.04 -->
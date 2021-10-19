# Basic Data Types
## Basic Data Types

콘솔에 집중해보자. 콘솔에서 테스트해보자.

1. 숫자(Integer,Float) : 정수와 실수형이다.
2. 문자(String) : "" 안에 작성한다. 이 안에 있는건 공백까지도 문자다.
   

## Variables : 변수

프로그래머는 게으르다. 적은 코드량으로 동일한 기능을 내고 싶다.
그를 위한 변수 개념. 각각의 계산들을 다 바꾸기 싫으므로, 변수에 담아서 한번에 적용해버린다.

<pre>
console.log(5 + a);
console.log(5 * a);
console.log(5 / a);
</pre>

변수는 값을 저장하거나 유지하는 역할을 한다. 저장해서 무한대로 가져다 쓴다.

> const a = 3;

const 는 constant(상수)로, 변하지 않는 값을 말한다.

> const myName = "nico";

변수명은 소문자로 시작해서 다음 단어는 대문자로 붙여서 쓴다. 띄어쓰기는 허용하지 않는다.(a.k.a : camelCase)
etc. 파이썬은 전부 소문자로 _를 쓴다.(a.k.a : snake_case) 또한 const 와 같은 것이 필요없다.



## const and let

const 변하지 않는 값인 상수이고, let은 변할 수 있다. 즉, 선언 후 덮어쓰기가 가능하다.

<pre>
let myName = "nico";
console.log("hello" + myName);
myName = "change";
console.log("변한 값은 " + myName);
</pre>

> hello nico

> 변한 값은 change

const로 선언한 변수를 후에 바꾸려고 하면 콘솔 에러가 발생한다.
<img width="972" alt="스크린샷 2021-10-19 오후 11 42 39" src="https://user-images.githubusercontent.com/75053256/137933880-3e823a72-9e1a-4635-8aa3-14d637df7115.png">



<!-- 2021.10.19 -->



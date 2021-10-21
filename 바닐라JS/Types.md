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

따라서 변수 선언에서부터 변수의 속성을 알 수 있다.

기본적으로 const를 쓰고, 업데이트를 하고 싶은 경우 let을 쓴다.

기존에는 var 하나로 썼었는데... var은 전부 업데이트가 가능하다. 단점은 값을 잘못바꾸면 이를 알아차릴 방법이 없다. 따라서 몇몇의 변수는 보호하기 위해 업데이트가 되었다. 

하지만 아직도 쓸 수 있다. 왜냐하면 자바스크립트는 업데이트가 불가하기 때문이다. 따라서 오래된 버전도 다 가능하다.

하지만 이젠 기본적으로 const와 let을 쓰도록 하자.



## Boolean / null / undefined

- boolean은 True와 False이다. O,X만을 출력한다.

<pre>
const amIFat = false;
console.log(amIFat);
</pre>


- null은 값이 존재하지 않음을 의미한다. 즉, 아무것도 없는 것으로 채워넣었다.

비어져 있는 상태이며, 이는 자연적으로 발생하지 않는다. 앞으로 채워질 것이든, 무엇의 의도가 있든, 일단 어떠한 것도 없다는 것을 확실하게 명시하는 용도.


> null != ""

null은 값이 존재하지 않는 상태 그 자체이고, ""는 문자열이지만 아무 문자열이 없는 빈값이다.

- undefined는 정의되지 않음을 의미한다. 즉, null처럼 아무것도 없는 것으로 채워넣은 것도, 문자나 숫자도 들어가있지 않은 것.

> let somthing;

이 경우 콘솔에 찍으면 undefined가 찍힌다. 

데이터 타입이며, 변수가 선언되어 정의되었지만 메모리는 차지하고, 공간은 있지만 값이 들어가지 않은 것이다.

null은 이와 비슷하게 선언되고, 공간도 있고, 값도 들어가있는데, 들어가있는 값이 "비어있음" 인 것.

 
## Array

데이터를 구조적으로 정리하는 가장 기본적인 방법.

변수를 일일히 const를 붙이고 선언하기 힘드니까, 이를 한 변수에 넣어버리는 것.

그리고 이것을 각각 꺼내보기 편하게 나열한 상태로 한 변수에 넣는다.

> const days0fWeek = [mon, tue, wed, thu, fri, sat;

이처럼 대괄호에 콤마(,)로 나눠 묶을 수 있다.

위에서 배운 다양한 타입들도 여기에 담아낼 수 있다.

이를 콘솔에 찍어보면 각각의 index 번호가 붙고, 이는 0부터 시작한다.

해당 key값을 이용해 각각의 배열의 value값을 꺼낼 수 있다.

만약 5번째로 있는 요일을 꺼내보고 싶다면

> console.log(days0fWeek[4]);

이렇게 꺼내볼 수 있다. 배열의 순서를 붙여주는 셈.


// 이건 주석(comment)을 의미하는데, 메모를 남길 수 있다.

days0fWeek. 까지만 치면 여러가지 사용할 수 있는 메소드가 나온다.

여기서 push를 사용하면 배열에 값을 추가할 수 있다.

> days0fWeek.push("sun");



 
## Object

나만의 xx.xx를 만들어보자.

Array구조의 list 말고 여러 구조가 필요할 수 있다. 즉, 사용자 정의를 하는 것.

> player.name

> player.points

> player.age

이런식으로 사용할 수 있다면 훨씬 관리하기도 좋고 보기도 좋다.

이는 변수로는 힘들어보인다. 왜냐면 각각의 이름을 전부 설정해야하기 때문.

그렇다면 Array로 만들면 어떨까?

> const player = ["nico", "1212", '26'];

하지만 이 경우 각각의 정보를 알 수 없다.

따라서 object를 쓴다. object는 중괄호를 쓴다.

<pre>
const player = {
    name : "nico",
    point : 1212,
    age : 26
}
console.log(player.age) //26
console.log(player["age"]) //26
</pre>

이렇게 출력할 수 있다. 출력은 점을 찍어서 할 수도 있고, 해당 object에 있는 key값을 문자열로 가져와서 할 수도 있다.

특히, object는 업데이트가 가능하다. 덮어쓸 수 있다.

const로 변수를 선언했지만 바뀌는 것이 object 속의 값들 뿐이라면 업데이트도 가능한 것.

> player.lastname = "qq";

이처럼 없던 key값을 만들고 그 값도 바로 넣어서 사용할 수도 있다.

### *** 참고) MDN에서 정의하고 있는 Property


property는 해당 object의 특징입니다. property는 보통 데이터 구조와 연관된 속성을 나타냅니다. property에는 2가지 종류가 있습니다. 

- 인스턴스 property들은 특정 object 인스턴스의 특정한 데이터를 가지고 있습니다. 
- Static Property들은 모든 object 인스턴스들에게 공유 된 데이터를 가지고 있습니다. 

property는 이름(a string)과 값(primitive, method 또는 object reference). 보통 "프로퍼티가 object를 가지고 있다"라고 말하는 것은 "property가 object reference"를 가지고 있다는 것을 줄여서 말한 것이라는 것을 기억하세요. property의 값이 변한 후에도 object는 그대로 남아있기 때문에 이걸 구분하는 것은 중요합니다.


## Quiz 2
1. object의 어떤 값(property)을 꺼내는 법 2가지 : xx.aa 그리고 xx["aa"]
2. 배열에서 값을 꺼낼 때는 0부터 센다.
3. 배열은 값을 구조적으로 리스트화 하기 위해 쓴다.
4. const는 변하지 않는 값, let는 변하는 값.

## Function

함수는 xx.xx를 만드는 것은 동일하지만, 훨씬 상위개념이다.

반복사용할 수 있는 코드 조각이다. 이를 캡슐화라고 표현한다. 캡슐화 된 fuction은 여러번 실행할 수 있다.

function은 소괄호가 필요하다. 소괄호를 붙이면 함수를 실행한다는 뜻히다.

<pre>
function sayHello() {
    alert("여러내용들");
}

sayHello();
</pre>

해당 함수가 실행되어 alert창이 발생한다.

만약 함수 속 또다른 함수 기능에서 값을 변경하고 싶다면, 인자가 필요하다.

데이터가 필요하다면 소괄호에 아무 이름을 넣어서 sayHello로 간 첫번째 변수를 화면에 차례로 띄운다.

<pre>
function sayHello(name, age) {
    alert(name,age);
}

sayHello("nico",26);
</pre>

이렇게 외부에서 함수 내부를 설정할 수 있다.

순서가 중요한데, 외부의 변수는 쓰여진 차례대로 함수의 인자값(arguments)에 들어가고, 함수 내부에서 그 인자값의 이름과 동일한 곳으로 도착한다.

## Recap
 

<!-- 2021.10.19 -->



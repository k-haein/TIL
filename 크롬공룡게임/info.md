# 크롬 공룡게임 만들기

## 자바스크립트로 2d 게임 만들기, 무작정 따라하기

링크 : https://youtu.be/qkTtmgCjHhM

자바스크립트만으로도 게임을 만들 수 있다.
HTML CSS JS만으로 만든 게임 중 유명한 것이 synergium과 candyBox 등이 있다.


### 0. 게임의 원리와 구현 방법

1. 내가 화면에 네모나 원을 그릴 수 있어야 한다.(CSS나 캔버스 태그를 사용해야 한다.)
2. 프레임마다 코드 실행을 할 수 있어야 한다. 그래야 애니메이션이 가능함.
3. Collision check를 할 수 있어야 한다. 충돌을 체크해서 그때 이벤트가 발생하면 된다.

자 이제 네모부터 그려본다.

### 1. 네모 그리기

1) HTML 템플릿에서 body에 canvas 태그를 만든다. 원래 기본 사이즈는 300x150인데, 윈도우 크기만큼 조절을 해주자.

main.js에서 설정해준다.

![image](https://user-images.githubusercontent.com/75053256/144552561-6120693e-c572-4a17-9742-551ca142b51a.png)

canvas는 처음에는 width와 height 두 속성만 있다.

기본 개념은 이렇다. canvas 엘리먼트는 고정크기의 드로잉 영역을 생성하고, 하나 이상의 <b>랜더링 컨텍스(rendering contexts)</b>를 노출하여 출력할 컨텐츠를 생성하고 다룬다.

즉, 처음에는 비어있는데, 여기에 무언가를 표시하기 위해서 어떤 스크립트가 랜더링 컨텍스트에 접근해서 그리도록 할 필요가 있다.

따라서 캔버스 위에 랜더링 될 수 있는 컨텍스트에 접근하기 위해 <b>getContext()</b> 메서드를 이용해서 그리기 함수들을 사용할 수 있다.

<b>getContext()</b> 메서드는 랜더링 컨텍스트 '타입'을 지정하는 하나의 파라미터값을 가진다. 여기서 우리는 2D 게임을 만드는 것이므로 '2d'로 설정해준다.


```javascript
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10,10,100,100); //초록색 박스가 그려진다.
```

네모 박스는 금방 그릴 수 있다.

우리는 게임을 만드는 것이기 때문에, 이러한 네모처럼 등장 캐릭터의 속성부터 등장하는 위치(좌표) 등을 object{}에 정보를 담아두면 편리하다.

### 2. 공룡과 장애물 그리기

공룡의 정보부터 저장해보자.

```javascript
//공룡의 정보
var dino = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw(){ //함수로 담아놓으면 dino.draw()로 꺼내쓸 수 있다.
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

dino.draw(); //네모 꺼내서 그리기
```

캐릭터 말고 장애물도 만들어보자.

장애물은 여러 종류가 있을 것이므로, 각각의 width,height등의 정보가 각각 다르므로 비슷한 obj가 많이 필요할 것이다. 그래서 보통 class를 쓴다.

new로 객체를 생성한다. 여기 인자로  constructor가 있는데, 이건 객체 인스턴스의 타입을 기술하는 함수이다.

```javascript
//장애물의 정보
class Cactus {
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    };
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }   
}
const cactus = new Cactus(); //new 연산자로 객체 생성
```

### 3. 애니메이션 만들기

모든 게임은 애니메이션이 존재한다. x 좌표를 수정하면 좌표가 이동한다. (깜박 하면서 사라졌다가 나타나 이동한다.)

```javascript
dino.x = 100; //100px 만큼 이동한다.
```

하지만 옮기면 옮겨지기는 하지만 이건 애니메이션은 아니다.

따라서 옮기는거 말고 이동을 한다면, 그 경로가 보여지게 하는 것이 좋다.

대충 1초에 60번씩 움직이게 해보면 어떨까? ( = 60프레임 이동)

```javascript
dino.x += 1; //1초에 x 좌표를 60프레임만큼 추가한다.
```

원래 이런 애니메이션 관련 자바스크립트 함수가 있다. 그 라이브러리를 사용하는 것이 좋다.

가장 기본적인 자바스크립트 함수는 <b>requestAnimationFrame</b> 이다. (근데 이것보다는 라이브러리 쓰는게 낫다.)

비동기 함수이며, CSS의 transition으로 처리하기 어려운 애니메이션이나, Canvas, SVG 등의 애니메이션을 구현하기 위한 함수이다.

단, 모든 애니메이션을 직접 프레임 단위로 계산해주어야 한다. 비동기인 것이 뭐가 문제냐? "영원히" 움직이는 것이 문제다. 멈추는 것까지 호출해줘야 한다.

이 함수는 기본적으로 1초에 60번 이동하도록 모니터 주사율에 맞추어 함수를 실행하게 되어 있다. (ex. 평균 주사율 60FPS : 1초에 60번, 140FPS : 1초에 140번)

취소하려면 <b>cancelAnimationFrame</b>를 사용하면 된다.


일단 생으로 개발한다고 생각하고 함수를 정의해보자.

```javascript
//프레임마다 실행할 거
function eachFrameStart(){ //프레임마다 실행할 것들을 담아놓은 함수
    requestAnimationFrame(eachFrameStart); // 여기 담은거 프레임단위로 애니메이션처럼 움직일게!
}
eachFrameStart();
```
함수를 만들고 그 안에 함수를 실행하는게 신기하지만, 이게 맞다. 

그 후에 마지막으로 함수를 한번 더 실행해주면 1초에 60번 eachFrameStart에 있는 내용이 실행된다.

여기 안에 dino.draw()를 가져와서 그려보자.

화면은 안움직이는 것 같지만 실은 1초에 60프레임씩 그려주고 있다.

이걸 보기 위해서 dino.x++;를 해서 x좌표를 움직이게 해보자.

그럼 계속해서 오른쪽으로 늘어나는 dino를 볼 수 있다.
```javascript
//프레임마다 실행할 거
function eachFrameStart(){ //프레임마다 실행할 것들을 담아놓은 함수
    requestAnimationFrame(eachFrameStart); // 여기 담은거 프레임단위로 애니메이션처럼 움직일게!
    dino.x++; //dino의 x좌표를 계속해서 늘린다.(1초에 60프레임)
    dino.draw(); //그려봐
}
eachFrameStart();
```

<img width="641" alt="스크린샷 2021-12-08 오후 8 47 11" src="https://user-images.githubusercontent.com/75053256/145203372-c0e17cbd-94cc-41f3-a5d0-cef883a48ad9.png">

그럼 이렇게 길게 동적으로 그려지는데 계속해서 연속해서 그려져서 잔상이 남는다.

왜냐면 전에 진행한 코드를 삭제하는 로직이 없기 때문.

따라서 이 경우엔 "기존 위치를 지우고", 그다음에 "그리는" 이 로직을 1초에 60번씩 반복해주기로 하자.

```javascript
function eachFrameStart(){
    requestAnimationFrame(eachFrameStart);

    ctx.clearRect(0,0,canvas.width,canvas.height); //기존꺼 지우고

    dino.x++; //1초에 60프레임씩 그린다.
    dino.draw();
}
eachFrameStart();
```

anvas.getContext('2d')에 있는 clearRect 메소드를 사용하면 기존의 것을 삭제할 수 있다.

이렇게 되면 사각형이 오른쪽으로 이동하는 것처럼 보인다.


### 4. 장애물 동적으로 생성하기

여기까지는 크롬 공룡 게임 기준으로 캐릭터가 움직이는 것을 구현했다.

하지만 크롬 공룡게임을 생각해보자. 생각해보면 우리 캐릭터는 가만히 있고 장애물이 스폰되서 다가온다.

우리는 이제 위에서 설정한 requestAnimationFrame 를 이용해서 프레임마다 장애물이 스폰되서 캐릭터에게 다가올 수 있도록 함수를 짜볼 것이다.

그리고 이건 배경도 마찬가지다. <u>굳이 캐릭터를 움직일 필요 없이 배경이 다가오면 걸어가는 것처럼 느껴진다!!(두둥탁)</u> 

이런 꿀 정보를 얻었으니 얼른 만들어보자.


```javascript
function eachFrameStart(){
    requestAnimationFrame(eachFrameStart);
    ctx.clearRect(0,0,canvas.width,canvas.height); //기존꺼 지우고

    const cactus = new Cactus(); // 장애물 생성
    cactus.draw();//1초에 60번 그려준다.

    dino.draw(); //얘도 60번 그려준다.
}
eachFrameStart();
```

장애물까지 60프레임씩 그려주게 해놨는데, 문제는 장애물은 2초마다 한번씩 생기게 해야한다.

이건 어떻게 해야할까?


```javascript
let timer = 0; // 타이머 생성
```

게임 세상은 초로 움직이지 않고 항상 프레임으로 움직인다.(1초에 60프레임으로 진행된다.)

따라서 우리는 timer를 만들고, 프레임이 진행될때마다 +가 되게 한다.

그리고 그 해당 프레임이 되었을 떄 0으로 떨어지면 그게 바로 초라고 생각해야 한다.

즉, 60 프레임마다 장애물이 하나 나온다!! 라고 짜면 그게 1초마다 1개씩 나오는거다.

자, 이제 장애물이 1초마다 1개씩 나오게 하는데, 이걸 또 여러개가 있어야 하잖아?

이걸 배열에 담아서 한번에 그려줘보자.

됐고, 코드를 보면

```javascript
let timer = 0; // 타이머 생성
let cactusArray = []; //장애물들을 담는 배열

function eachFrameStart() { //프레임마다 실행할 것
    requestAnimationFrame(eachFrameStart); //나 기본 프레임 속도로 애니메이션 그릴꺼야.

    timer++; //1프레임이 진행될때마다 timer 1씩 올라간다.

    ctx.clearRect(0, 0, canvas.width, canvas.height); //기존꺼 지우고

    if (timer % 120 === 0) { //만약 프레임이 120이면,(=2초면) 장애물들을 그려주세요.
        const cactus = new Cactus();
        cactusArray.push(cactus); //장애물 여러개 할꺼니까 2초마다 생긴 장애물을 배열에 넣기
    }
    cactusArray.forEach((cactus_) => { //그 배열을 반복적으로 그려주자. 단, x죄표를 줄이면서
        cactus_.x--; //그리면서 장애물의 x좌표 하나씩 줄여.(왼쪽으로 움직여라)
        cactus_.draw(); //그리고 장애물 "한번에" 그려봐.
    });
    dino.draw(); //캐릭터 그리기
}

eachFrameStart(); //실행
```
즉, 120프레임마다 {장애물} object를 이쁘게 생성하고 array에 집어넣은 다음, draw로 한번에 그려준다.



![ezgif-4-03b6f4bf9c9f](https://user-images.githubusercontent.com/75053256/145207677-c9080021-2884-483b-9465-aa3856a5bb5c.gif)

참 쉽죠?

cf) 뭔가 오류가 났었는데, 전역변수로 timer와 cactusArray 설정을 const로 했다가 오류났다. 바보.


### 5. 필요없어진 장애물 제거

자, 우리는 배열에 각각 장애물을 생성해서 담았고, 그걸 한번에 그려주는 반복문을 사용했다.(forEach)

근데 생각해보면, 왼쪽 끝까지 간 장애물들은 더이상 쓰이지 않을꺼고, 배열에 계속해서 남겨두면 게임 시간이 길어질수록 garbage만 쌓이게 된다. 100개, 1000개씩 쌓이겠지?

따라서 왼쪽 끝까지 간 장애물은 배열에서도 제거해주도록 하자.

```javascript
 //프레임마다 실행할 것
function eachFrameStart() {
    requestAnimationFrame(eachFrameStart);
    
    timer++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);//기존꺼 지우고

    if (timer % 120 === 0) { //만약 프레임이 120이면,(=2초면) 장애물 생성해서 배열에 넣어라.
        const cactus = new Cactus();
        cactusArray.push(cactus);
    }
    cactusArray.forEach((cactus_, i, cactusArray_) => { //배열 꺼내서 반복(요소,index,배열)
        //장애물의 x좌표가 0 미만이면 제거해라.
        if (cactus_.x < 0) {
            cactusArray_.splice(i, 1);
        }
        cactus_.x--;
        cactus_.draw(); //배열에 담긴 요소들 그리기
    });
    dino.draw();
}

eachFrameStart(); //실행
```
forEach는 3가지 매개변수를 받는다.

1. currentValue : 처리할 현재 요소
2. index : 그 index 값
3. array : 현재 배열

즉, 방금 인자로 받은 배열 속 cactus(=cactus_)의 x좌표가 0보다 작으면(왼쪽으로 이동하면),

그 배열(=cactusArray_)의 index값(=i)에 해당하는 cactus_를 1개만큼 제거해라. (즉, 0보다 작아져서 안보이는 애를 배열에서 삭제해라)

forEach는 break가 없으므로 영원히 인자가 위에서 생성되고 영원히 x좌표가 0보다 작아지면 사라진다.


### 6. 공룡 점프하기

점프는 간단하다. x좌표는 이동이었으니, y좌표는 점프다.

```javascript
 //프레임마다 실행할 것
function eachFrameStart() {
    requestAnimationFrame(eachFrameStart);
    timer++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (timer % 120 === 0) { 
        const cactus = new Cactus();
        cactusArray.push(cactus);
    }
    cactusArray.forEach((cactus_, i, cactusArray_) => {
        if (cactus_.x < 0) {
            cactusArray_.splice(i, 1);
        }
        cactus_.x--;
        cactus_.draw();
    });

    dino.y -= 1; //1초마다 y좌표를 60프레임씩 빼라.
    dino.draw();
}

eachFrameStart();
```

우리는 스페이스바를 누를 때 y좌표가 움직여 뛰도록 해야 한다. 이걸 위해 이벤트 리스너를 가져다 쓰자.

```javascript
let jumpingSwitch = false;

document.addEventListener('keydown', function(pushkey){
    if (pushkey.code === 'Space'){  //만약 스페이스바를 눌렀으면
        //여기다가 dino 좌표가 -되게 해야하는데, 함수 속을 가져올 수 없으니 스위치를 만들어보자.
        jumpingSwitch = true; //점핑스위치가 켜지게 만든다.
    }
})

```
스위치를 boolean 형태로 만들고, 이 스위치가 눌렸을 때 공룡이 점프하게 만들면 된다.

```javascript
 //프레임마다 실행할 것
function eachFrameStart() {
  
  ...

    //점프 스위치 설정
    if(jumpingSwitch == true){
        dino.y --; //점프 스위치가 true면 y죄표를 움직여라
    }

    dino.draw();
}
eachFrameStart();
```

근데 문제는, 여기까지는 점프를 누르면 무한히 승천한다.

그럼 점프를 제한하면 되지 않을까?

우리에겐 타이머가 있었다. 대충 [100프레임이 지나면 dino.y--;를 그만해줘!] 이렇게 해보자.

```javascript
let timer = 0; // 타이머 생성
let jumpTimer = 0; //점프 타이머 생성

 //프레임마다 실행할 것
function eachFrameStart() {
  
  ...

    //점프 스위치 설정
    if(jumpingSwitch == true){
        dino.y --;
        jumpTimer++; //점프시 점프 타이머 세기
    }

    // 점프타이머 설정
    if(jumpTimer > 100){
        jumpingSwitch = false; //타이머가 100보다 크면 점프를 멈춰줘
    }

    dino.draw();
}
eachFrameStart();
```

이렇게 하면 스페이스를 누른 뒤 점프한 다음에 100프레임에 해당되는 시간에 멈춘다.

이제는 밑으로 내려가볼까?

점프중이 아니면 dino의 y좌표를 다시 추가해준다. 즉, 아래로 움직인다.

이에 따른 제한도 필요하겠지? 최저 높이를 정해주자.

```javascript
...
    // 점프 되돌아오기
    if(jumpingSwitch == false){
        if(dino.y < 200){ //200px이 넘지 않게 해라(=초기 높이로 제한)
            dino.y++;
            jumpTimer = 0; //점프타이머 초기화
        }
    }

...

```

점프타이머를 초기화 시켜주지 않으면 점프는 한번만 하게 된다. 그러니까 이걸 다시 0으로 바꿔줘서 반복적으로 점프할 수 있게 하자.

자 여기까지 정리하면,

1. dino의 점프 및 점프 반복 가능
2. 장애물이 2초마다 생성되서 사라짐

여기까지 됐다. 이제 이 둘이 부딪히면 게임이 멈추게 해보자.

#### [여기까지 정리]
```javascript
let timer = 0;
let cactusArray = [];
let jumpTimer = 0;
// 프레임마다 실행하는것
function eachFrameStart() { 
    
    requestAnimationFrame(eachFrameStart);//기본프레임마다 실행

    timer++;//시간 카운트

    ctx.clearRect(0, 0, canvas.width, canvas.height); //기존거 삭제

    if (timer % 120 === 0) { //2초마다 장애물 생성
        const cactus = new Cactus();
        cactusArray.push(cactus);
    }
    cactusArray.forEach((cactus_, i, cactusArray_) => { //장애물 사라짐
        if (cactus_.x < 0) {
            cactusArray_.splice(i, 1);
        }
        cactus_.x--;
        cactus_.draw();
    });

    //---------
    //공룡이 뛴다.
    //---------
    //점프 스위치 설정
    if(jumpingSwitch == true){
        dino.y --;
        jumpTimer++; //점프시 점프 타이머 세기
    }

    // 점프타이머 설정
    if(jumpTimer > 100){
        jumpingSwitch = false; //타이머가 100보다 크면 점프를 멈춰줘
    }

    // 점프 되돌아오기
    if(jumpingSwitch == false){
        if(dino.y < 200){ //200px이 넘지 않게 해라(=초기 높이로 제한)
            dino.y++;
            jumpTimer = 0; //점프타이머 초기화
        }
    }

    dino.draw();
}

//이벤트 리스너 사용 : 스페이스 누르면 점프
let jumpingSwitch = false;

document.addEventListener('keydown', function(pushkey){
    if (pushkey.code === 'Space'){ 
        jumpingSwitch = true;
    }
});


eachFrameStart();
```

### 7. 충돌 체크하기

기본 원리는 간단하다. 두 객체의 거리가 0이면 멈춘다. 즉, 좌표를 빼서 0이 되면 멈춘다.

<img width="322" alt="스크린샷 2021-12-08 오후 9 51 31" src="https://user-images.githubusercontent.com/75053256/145211347-17f4538b-65f3-4514-97a8-70d1912377b0.png">

충돌 확인하는 코드를 넣어줘보자.

근데, 이 함수는 forEach에 넣어줘야할 것이다. 왜냐하면 주인공과 생성되는 장애물의 모든 계산이 있어야 하기 때문.

사각형의 왼쪽 아래 꼭지점이 x좌표, y좌표 기준이기 때문에 dino의 경우 오른쪽 면이 닿는 것을 기준으로 하기 위해 너비를 더해줘야 한다. 높이도 마찬가지임.

```javascript
//--------------------------
//충돌 하는지 안하는지 판단하는 함수
//--------------------------
//충돌하냐?
function isCollision(dino, cactus){
    //x축,y축의 차이
    let minusX =  cactus.x - (dino.x + dino.width); //너비만큼 더해줘야함.
    let minusY =  cactus.y - (dino.y + dino.height); //높이만큼 더해줘야함.

    //각각의 차이가 0보다 작으면 부딪힌거다.(and임)
    if(minusX < 0 && minusY < 0){
        //게임을 정지하자.
        //캔버스를 클리어해볼까?
        ctx.clearRect(0, 0, canvas.width, canvas.height); //기존거 삭제

        //또는 모든 애니메이션을 멈춘다.
        cancelAnimationFrame(animation);
    }
}
```
애니메이션은 아까 실행한 것이다. 그걸 변수에 담아서 넣어주자.

```javascript
let animation;

function eachFrameStart(){ //프레임마다 실행할 것
    animation = requestAnimationFrame(eachFrameStart);

...

```

이렇게 하면 부딪히면 게임이 멈춰버리게 된다!

#### [여기까지 정리2]
```javascript
let timer = 0;
let cactusArray = [];
let jumpTimer = 0;
let animation;

//프레임마다 실행할 것
function eachFrameStart(){ 
    animation = requestAnimationFrame(eachFrameStart);//기본프레임마다 실행

    timer++;//시간 카운트

    ctx.clearRect(0, 0, canvas.width, canvas.height); //기존거 삭제

    if (timer % 120 === 0) { //2초마다 장애물 생성
        const cactus = new Cactus();
        cactusArray.push(cactus);
    }
    cactusArray.forEach((cactus_, i, cactusArray_) => { //장애물 사라짐
        if (cactus_.x < 0) {
            cactusArray_.splice(i, 1);
        }
        cactus_.x--;

        //dino가 생성되는 장애물과 충돌하는지 확인
        isCollision(dino,cactus_);

        cactus_.draw();
    });

    //---------
    //공룡이 뛴다.
    //---------
    //점프 스위치 설정
    if(jumpingSwitch == true){
        dino.y --;
        jumpTimer++; //점프시 점프 타이머 세기
    }

    // 점프타이머 설정
    if(jumpTimer > 100){
        jumpingSwitch = false; //타이머가 100보다 크면 점프를 멈춰줘
    }

    // 점프 되돌아오기
    if(jumpingSwitch == false){
        if(dino.y < 200){ //200px이 넘지 않게 해라(=초기 높이로 제한)
            dino.y++;
            jumpTimer = 0; //점프타이머 초기화
        }
    }

    dino.draw();
}

//--------------------------------
//이벤트 리스너 사용 : 스페이스 누르면 점프
//--------------------------------
let jumpingSwitch = false;

document.addEventListener('keydown', function(pushkey){
    if (pushkey.code === 'Space'){ 
        jumpingSwitch = true;
    }

});

//----------------
//프레임마다 실행 할 것 -> 여기다해야한다. jumpingSwitch가 선언되어야 해서.
//----------------
eachFrameStart();


//--------------------------
//충돌 하는지 안하는지 판단하는 함수
//--------------------------
//충돌하냐?
function isCollision(dino, cactus){
    //x축,y축의 차이
    let minusX =  cactus.x - (dino.x + dino.width); //너비만큼 더해줘야함.
    let minusY =  cactus.y - (dino.y + dino.height); //높이만큼 더해줘야함.

    //각각의 차이가 0보다 작으면 부딪힌거다.(and임)
    if(minusX < 0 && minusY < 0){
        //게임을 정지하자.
        //캔버스를 클리어해볼까?
        ctx.clearRect(0, 0, canvas.width, canvas.height); //기존거 삭제

        //또는 모든 애니메이션을 멈춘다.
        cancelAnimationFrame(animation);
    }
}

```


### 8. 이미지 설정하기

네모는 멋이 없으니 이제 이미지를 설정해보자.

```javascript
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth -100;
canvas.height = window.innerHeight -100;

//이미지 불러오기
const img1 = new Image();
img1.src = 'bingeul_img/1.png'; //공룡이미지
const img2 = new Image();
img2.src = 'bingeul_img/2.png'; //장애물 이미지

//-----------
//공룡의 정보
//-----------
var dino = { //object에 넣어놓자.
    x : 10,
    y : 100,
    width : 100,
    height : 100,
    draw(){ //dino.draw()로 꺼내쓸 수 있다.
        ctx.fillStyle = 'green';
        //ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.drawImage(img1,this.x,this.y); //공룡 이미지 삽입하기
    }
}
dino.draw(); //네모 꺼내서 그리기

//장애물의 정보
class Cactus {
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    };
    draw(){
        ctx.fillStyle = 'red';
        //ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.drawImage(img2,this.x,this.y); //장애물 이미지 삽입하기
    }   
}
const cactus = new Cactus(); //new 연산자로 객체 생성
```

이렇게 되면 기존에 만들었던 네모는 일종의 hitbox가 되는 것이다.
따라서 게임을 만들때는 네모를 만들고 하는게 편하다.

이제 여기서 점수를 매긴다? 그럼 시간마다 점수가 늘게 하면 되고.
여기서 공룡이 움직이려면 프레임마다 공룡 이미지를 바꿔치면 된다.

<hr>

#### [최종 소스]
```javascript

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth -100;
canvas.height = window.innerHeight -100;

//이미지 불러오기
const img1 = new Image();
img1.src = 'bingeul_img/1.png'; //공룡이미지
const img2 = new Image();
img2.src = 'bingeul_img/2.png'; //장애물 이미지

//-----------
//공룡의 정보
//-----------
var dino = { //object에 넣어놓자.
    x : 10,
    y : 100,
    width : 100,
    height : 100,
    draw(){ //dino.draw()로 꺼내쓸 수 있다.
        ctx.fillStyle = 'green';
        //ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.drawImage(img1,this.x,this.y,this.width,this.height); //공룡 이미지 삽입하기
    }
}
dino.draw(); //네모 꺼내서 그리기

//장애물의 정보
class Cactus {
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    };
    draw(){
        ctx.fillStyle = 'red';
        //ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.drawImage(img2,this.x,this.y,this.width,this.height); //장애물 이미지 삽입하기
    }   
}
const cactus = new Cactus(); //new 연산자로 객체 생성

let timer = 0;
let cactusArray = [];
let jumpTimer = 0;
let animation;

//프레임마다 실행할 것
function eachFrameStart(){ 
    animation = requestAnimationFrame(eachFrameStart);//기본프레임마다 실행

    timer++;//시간 카운트

    ctx.clearRect(0, 0, canvas.width, canvas.height); //기존거 삭제

    if (timer % 120 === 0) { //2초마다 장애물 생성
        const cactus = new Cactus();
        cactusArray.push(cactus);
    }
    cactusArray.forEach((cactus_, i, cactusArray_) => { //장애물 사라짐
        if (cactus_.x < 0) {
            cactusArray_.splice(i, 1);
        }
        cactus_.x--;

        //dino가 생성되는 장애물과 충돌하는지 확인
        isCollision(dino,cactus_);

        cactus_.draw();
    });

    //---------
    //공룡이 뛴다.
    //---------
    //점프 스위치 설정
    if(jumpingSwitch == true){
        dino.y --;
        jumpTimer++; //점프시 점프 타이머 세기
    }

    // 점프타이머 설정
    if(jumpTimer > 100){
        jumpingSwitch = false; //타이머가 100보다 크면 점프를 멈춰줘
    }

    // 점프 되돌아오기
    if(jumpingSwitch == false){
        if(dino.y < 200){ //200px이 넘지 않게 해라(=초기 높이로 제한)
            dino.y++;
            jumpTimer = 0; //점프타이머 초기화
        }
    }

    dino.draw();
}

//--------------------------------
//이벤트 리스너 사용 : 스페이스 누르면 점프
//--------------------------------
let jumpingSwitch = false;

document.addEventListener('keydown', function(pushkey){
    if (pushkey.code === 'Space'){ 
        jumpingSwitch = true;
    }
});



//----------------
//프레임마다 실행 할 것
//----------------
eachFrameStart();


//--------------------------
//충돌 하는지 안하는지 판단하는 함수
//--------------------------
//충돌하냐?
function isCollision(dino, cactus){
    //x축,y축의 차이
    let minusX =  cactus.x - (dino.x + dino.width); //너비만큼 더해줘야함.
    let minusY =  cactus.y - (dino.y + dino.height); //높이만큼 더해줘야함.

    //각각의 차이가 0보다 작으면 부딪힌거다.(and임)
    if(minusX < 0 && minusY < 0){
        //게임을 정지하자.
        //캔버스를 클리어해볼까?
        ctx.clearRect(0, 0, canvas.width, canvas.height); //기존거 삭제

        //또는 모든 애니메이션을 멈춘다.
        cancelAnimationFrame(animation);
    }
}

```
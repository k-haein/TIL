# 크롬 공룡게임 만들기

## 자바스크립트로 2d 게임 만들기

### 무작정 따라하기

링크 : https://youtu.be/qkTtmgCjHhM

자바스크립트만으로도 게임을 만들 수 있다.
HTML CSS JS만으로 만든 게임 중 유명한 것이 synergium과 candyBox 등이 있다.


#### 게임의 원리와 구현 방법

1. 내가 화면에 네모나 원을 그릴 수 있어야 한다.(CSS나 캔버스 태그를 사용해야한다.)
2. 프레임마다 코드 실행을 할 수 있어야 한다.
3. Collision check를 할 수 있어야한다. 충돌을 체크해서 그때 이벤트가 발생하면 된다.

자 이제 네모부터 그려본다.

#### 1. 네모 그리기

1) HTML 템플릿에서 body에 canvas 태그를 만든다. 원래 기본 사이즈는 300x150인데, 윈도우 크기만큼 조절을 해주자.

main.js에서 설정해준다.

![image](https://user-images.githubusercontent.com/75053256/144552561-6120693e-c572-4a17-9742-551ca142b51a.png)

canvas는 처음에는 width와 height 두 속성만 있다.

기본 개념은 이렇다. canvas 엘리먼트는 고정크기의 드로잉 영역을 생성하고, 하나 이상의 <b>랜더링 컨텍스(rendering contexts)</b>를 노출하여 출력할 컨텐츠를 생성하고 다룬다.

즉, 처음에는 비어있는데, 여기에 무언가를 표시하기 위해서 어떤 스크립트가 랜더링 컨텍스트에 접근해서 그리도록 할 필요가 있다.

따라서 캔버스 위에 랜더링 될 수 있는 컨텍스트에 접근하기 위해 getContext() 메서드를 이용해서 그리기 함수들을 사용할 수 있다.

getContext() 메서드는 랜더링 컨텍스트 '타입'을 지정하는 하나의 파라미터값을 가진다. 여기서 우리는 2D 게임을 만드는 것이므로 '2d'로 설정해준다.


```javascript
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10,10,100,100); //초록색 박스가 그려진다.
```

네모 박스는 금방 그릴 수 있다.

우리는 게임을 만드는 것이기 때문에, 이러한 네모처럼 등장 캐릭터의 속성부터 등장하는 위치(좌표) 등을 object{}에 정보를 담아두면 편리하다.

#### 2. 공룡과 장애물 그리기

공룡의 정보부터 저장해보자.

```javascript
//공룡의 정보
var dino = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw(){ //dino.draw()로 꺼내쓸 수 있다.
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x,this.y,this,width,this.height);
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

#### 3. 애니메이션 만들기

모든 게임은 애니메이션이 존재한다. x 좌표를 수정하면 좌표가 이동한다. 하지만 옮기면 옮겨지기는 하지만 이건 애니메이션은 아니다.

```javascript
dino.x = 100; //100px 만큼 이동한다.
```

따라서 옮기는거 말고 이동을 한다면, 그 경로가 보여지게 하는 것이 좋다.

대충 1초에 60번씩 움직이게 해보면 어떨까?

```javascript
dino.x += 1; //이런식으로 계속해서 추가해준다.
```

원래 이런 애니메이션 관련 자바스크립트 함수가 있다. 그 라이브러리를 사용하는 것이 좋다.

가장 기본적인 함수는 <b>requestAnimationFrame</b> 이다.

비동기 함수이며, CSS의 transition으로 처리하기 어려운 애니메이션이나, Canvas, SVG 등의 애니메이션을 구현하기 위한 함수이다.

단, 모든 애니메이션을 직접 프레임 단위로 계산해주어야 한다. 비동기인 것이 뭐가 문제냐? "영원히" 움직이는 것이 문제다. 멈추는 것까지 호출해줘야 한다.

이 함수는 기본적으로 1초에 60번 이동하도록 모니터 주사율에 맞추어 함수를 실행하게 되어 있다. (ex. 평균 주사율 60FPS : 1초에 60번, 140FPS : 1초에 140번)

취소하려면 <b>cancelAnimationFrame</b>를 사용하면 된다.


```javascript
function eachFrameStart(){ //프레임마다 실행할 것들을 담아놓은 함수
    requestAnimationFrame(eachFrameStart); //
    dino.x++;
    dino.draw();
}
eachFrameStart();
```


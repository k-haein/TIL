/*------------------------------------------------
크롬 공룡게임 만들기 ver.2 내맘대로 구현(2022.01.11~)
------------------------------------------------*/
//0111) 일정 높이 이상 안올라가게 하고 싶은데 어떻게 로직을 짜야할까?계속 위에 박혀버린다.
// 새를 하나 더 만들자. 만들긴 했는데 이걸 번갈아서 오거나 랜덤하게 오게는 못하나? -> 타이머 조절하면 됨.
//왜 구름은 x축이 0일 될때만 멈출까? y축이 스치지도 않았는데 멈춘다. 왜지?
//첫 인덱스 페이지에서 레벨을 골라 속도가 다른 두 게임을 진행하게 하자.
//====================
// 1. 캔버스 설정
//====================
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

//이미지 불러오기
const img1 = new Image();
img1.src = "bingeul_img/dino.png"; //공룡이미지
const img2 = new Image();
img2.src = "bingeul_img/cactus.png"; //장애물 이미지
const img3 = new Image();
img3.src = "bingeul_img/cloud.png"; //장애물2 이미지

//====================
// 2. 객체 정보 저장
//====================
//------------------
//공룡의 정보 - object
//------------------
const dino = {
  x: 10,
  y: 600,
  width: 100,
  height: 100,
  draw() {
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x,this.y,this.width,this.height); //네모 그리기
    ctx.drawImage(img1, this.x, this.y, this.width, this.height); //공룡 이미지 삽입하기
  },
};
//dino.draw(); //네모 꺼내서 그리기

//------------------
//장애물의 정보 - class
//------------------
class Cactus {
  constructor() {
    this.x = 500;
    this.y = 600;
    this.width = 100;
    this.height = 100;
  };
  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x,this.y,this.width,this.height); //네모 그리기
    ctx.drawImage(img2, this.x, this.y, this.width, this.height); //장애물 이미지 삽입하기
  };
};
//const cactus = new Cactus(); //new 연산자로 객체 생성

//------------------
//# 구름 장애물 추가
//------------------
class Cloud {
    constructor() {
      this.x = 500;
      this.y = 200;
      this.width = 150;
      this.height = 100;
    };
    draw() {
      ctx.fillStyle = 'yellow';
      ctx.fillRect(this.x,this.y,this.width,this.height); //네모 그리기
      ctx.drawImage(img3, this.x, this.y, this.width, this.height); //장애물 이미지 삽입하기
    };
  };
  //const cactus = new Cactus(); //new 연산자로 객체 생성

//====================
// 3. 프레임마다 움직임 부여
//====================

let timer = 0;
let cactusArray = [];
let cloudArray = [];
let jumpTimer = 0;
let animation;
let jumpingSwitch = false;

//-------------------------------
//프레임마다 실행할 함수 - 장애물의 움직임
//-------------------------------
function eachFrameStart() {
  //기본프레임마다 실행
  animation = requestAnimationFrame(eachFrameStart);
  //시간 카운트
  timer++;
  //기존거 삭제
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //4초마다 장애물 생성해서 배열에 담음
  if (timer % 400 === 0) {
    const cactus = new Cactus();
    cactusArray.push(cactus);
  };

  //구름은 좀 더 느리게 오기
  if (timer % 1000 === 0) {
    const cloud = new Cloud();
    cloudArray.push(cloud);
  }
  //생성된 장애물 반복해서
  cactusArray.forEach((cactus_, i, cactusArray_) => {
    //x좌표가 0보다 작으면 삭제
    if (cactus_.x < 0) {
      cactusArray_.splice(i, 1);
    };
    //# 장애물 오는 속도 다르게
    cactus_.x = cactus_.x - 3;

    //(아래)dino가 생성되는 장애물과 충돌하는지 확인
    isCollision(dino, cactus_);

    //장애물 한번에 그리기
    cactus_.draw();
  });

    //생성된 구름 반복해서
    cloudArray.forEach((cloud_, i, cloudArray_) => {
        //x좌표가 0보다 작으면 삭제
        if (cloud_.x < 0) {
            cloudArray_.splice(i, 1);
        };
        //# 장애물 오는 속도 다르게
        cloud_.x = cloud_.x - 7;
    
        //(아래)dino가 생성되는 장애물과 충돌하는지 확인
        isCollision2(dino, cloud_);
    
        //장애물 한번에 그리기
        cloud_.draw();
      });

  //-----------------------
  //공룡의 움직임 - 점프 및 제한
  //-----------------------
  // 점프스위치를 눌렀을 경우
  if (jumpingSwitch == true) {
      
      dino.y = dino.y - 6; //#공룡 속도조절
      jumpTimer++; //점프시 점프 타이머 세기
      
  };

  // 점프 되돌아오기
  if (jumpingSwitch == false) {
    //400px이 넘지 않게 해라(=초기 높이로 제한)
    if (dino.y < 600) {
      dino.y = dino.y + 6; //#공룡 속도조절
      jumpTimer = 0; //점프타이머 초기화
    }
  };

  // 점프타이머 제한
  if (jumpTimer > 50) {
    jumpingSwitch = false; // # 속도 빨라서 타이머 제한
  };

  //공룡 그리기
  dino.draw();
};

//움직임 함수 실행
eachFrameStart();

//====================
// 4. 충돌 및 키 입력 함수
//====================
//--------------------------
//충돌 하는지 안하는지 판단하는 함수
//--------------------------
function isCollision(dino, cactus) {
  //x축,y축의 차이 구하기
  let minusX = cactus.x - (dino.x + dino.width); //너비만큼 더해줘야함.
  let minusY = cactus.y - (dino.y + dino.height); //높이만큼 더해줘야함.

  //각각의 차이가 0보다 작으면 부딪힌거다.(and임)
  if (minusX < 0 && minusY < 0) {
    //모든 애니메이션을 멈춘다.
    cancelAnimationFrame(animation);
  };
};

function isCollision2(dino, cloud) {
    //x축,y축의 차이 구하기
    let minusX = cloud.x - (dino.x + dino.width); //너비만큼 더해줘야함.
    let minusY = cloud.y - (dino.y + dino.height); //높이만큼 더해줘야함.
  
    //각각의 차이가 0보다 작으면 부딪힌거다.(and임)
    if (minusX < 0 && minusY < 0) {
      //모든 애니메이션을 멈춘다.
      cancelAnimationFrame(animation);
    };
  };

//--------------------------------
//이벤트 리스너 사용 : 스페이스 누르면 점프
//--------------------------------
document.addEventListener("keydown", function (pushkey) {
  //space를 누르면 점프스위치 켜짐
  if (pushkey.code === "Space") {
    jumpingSwitch = true;
  };
});

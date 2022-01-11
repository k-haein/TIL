/*------------------------------------------------
크롬 공룡게임 만들기 ver.1 강의대로 구현(2022.01.11)
------------------------------------------------*/

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

//====================
// 2. 객체 정보 저장
//====================
//------------------
//공룡의 정보 - object
//------------------
var dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  draw() {
    //ctx.fillStyle = 'green';
    //ctx.fillRect(this.x,this.y,this.width,this.height); //네모 그리기
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
    this.y = 200;
    this.width = 50;
    this.height = 50;
  };
  draw() {
    // ctx.fillStyle = 'red';
    // ctx.fillRect(this.x,this.y,this.width,this.height); //네모 그리기
    ctx.drawImage(img2, this.x, this.y, this.width, this.height); //장애물 이미지 삽입하기
  };
};
//const cactus = new Cactus(); //new 연산자로 객체 생성

//====================
// 3. 프레임마다 움직임 부여
//====================

let timer = 0;
let cactusArray = [];
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
  if (timer % 240 === 0) {
    const cactus = new Cactus();
    cactusArray.push(cactus);
  };
  //생성된 장애물 반복해서
  cactusArray.forEach((cactus_, i, cactusArray_) => {
    //x좌표가 0보다 작으면 삭제
    if (cactus_.x < 0) {
      cactusArray_.splice(i, 1);
    };
    //x좌표 줄어들기
    cactus_.x--;

    //(아래)dino가 생성되는 장애물과 충돌하는지 확인
    isCollision(dino, cactus_);

    //장애물 한번에 그리기
    cactus_.draw();
  });

  //-----------------------
  //공룡의 움직임 - 점프 및 제한
  //-----------------------
  // 점프스위치를 눌렀을 경우
  if (jumpingSwitch == true) {
    dino.y--; //공룡 위로 고고
    jumpTimer++; //점프시 점프 타이머 세기
  };

  // 점프 되돌아오기
  if (jumpingSwitch == false) {
    //200px이 넘지 않게 해라(=초기 높이로 제한)
    if (dino.y < 200) {
      dino.y++; //공룡 아래로 고고
      jumpTimer = 0; //점프타이머 초기화
    };
  };

  // 점프타이머 제한
  if (jumpTimer > 100) {
    jumpingSwitch = false; //타이머가 100보다 크면 점프를 멈춰줘
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

//--------------------------------
//이벤트 리스너 사용 : 스페이스 누르면 점프
//--------------------------------
document.addEventListener("keydown", function (pushkey) {
  //space를 누르면 점프스위치 켜짐
  if (pushkey.code === "Space") {
    jumpingSwitch = true;
  };
});

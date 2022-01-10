const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth -100;
canvas.height = window.innerHeight -100;

//이미지 불러오기
const img1 = new Image();
img1.src = 'bingeul_img/dino.png'; //공룡이미지
const img2 = new Image();
img2.src = 'bingeul_img/cactus.png'; //장애물 이미지

//-----------
//공룡의 정보
//-----------
var dino = { //object에 넣어놓자.
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw(){ //dino.draw()로 꺼내쓸 수 있다.
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x,this.y,this.width,this.height);
        //ctx.drawImage(img1,this.x,this.y),this.width,this.height; //공룡 이미지 삽입하기
    }
}
//dino.draw(); //네모 꺼내서 그리기

//-----------
//장애물의 정보
//-----------
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
        //ctx.drawImage(img2,this.x,this.y,this.width,this.height); //장애물 이미지 삽입하기
    }   
}
//const cactus = new Cactus(); //new 연산자로 객체 생성


//-----------------------------------------------------------


let timer = 0;
let cactusArray = [];
let jumpTimer = 0;
let animation;
let jumpingSwitch = false;

//----------------
//프레임마다 실행할 것
//----------------
function eachFrameStart(){ 
    animation = requestAnimationFrame(eachFrameStart);//기본프레임마다 실행

    timer++;//시간 카운트

    ctx.clearRect(0, 0, canvas.width, canvas.height); //기존거 삭제

    if (timer % 240 === 0) { //2초마다 장애물 생성
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
        };
    };

    dino.draw();
}


eachFrameStart();

//--------------------------
//충돌 하는지 안하는지 판단하는 함수
//--------------------------
//충돌하냐?
function isCollision(dino, cactus){
    console.log("sdf");
    //x축,y축의 차이
    let minusX =  cactus.x - (dino.x + dino.width); //너비만큼 더해줘야함.
    let minusY =  cactus.y - (dino.y + dino.heignt); //높이만큼 더해줘야함.

    //각각의 차이가 0보다 작으면 부딪힌거다.(and임)
    if(minusX < 0 || minusY < 0){
        
        //게임을 정지하자.
        //캔버스를 클리어해볼까?
        ctx.clearRect(0, 0, canvas.width, canvas.height); //기존거 삭제

        //또는 모든 애니메이션을 멈춘다.
        cancelAnimationFrame(animation);
    }
};


//--------------------------------
//이벤트 리스너 사용 : 스페이스 누르면 점프
//--------------------------------

document.addEventListener('keydown', function(pushkey){
    if (pushkey.code === 'Space'){ 
        jumpingSwitch = true;
    }
});



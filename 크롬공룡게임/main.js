const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d'); //해당 canvas는 2d 그래픽 랜더링 컨텍스트가 접근 가능함.


canvas.width = window.innerWidth -100;
canvas.height = window.innerHeight -100;

const img1 = new Image();
img1.src = 'rollin.gif';


//-----------
//공룡의 정보
//-----------
var dino = {
    x : 10,
    y : 200,
    width : 200,
    height : 200,
    draw(){ //dino.draw()로 꺼내쓸 수 있다.
        //ctx.fillStyle = 'green';
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.drawImage(img1,this.x,this.y,this.width,this.height);
    
    }
}



//dino.draw(); //네모 꺼내서 그리기

//-------------
//장애물의 정보
//-------------
class Cactus {
    constructor(){ //객체 인스턴스의 타입을 기술하는 함수.
        this.x = 500;
        this.y = 300;
        this.width = 100;
        this.height = 100;
    };
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }   
}
//const cactus = new Cactus(); //new 연산자로 객체 생성


//cactus.draw(); //빨간 네모를 그리자


//-----------------------
// 애니메이션을 주는 함수
//-----------------------

let timer = 0; // 타이머 생성
let cactusArray = []; //장애물들을 담는 배열
let 점프timer = 0;
let animation;

function eachFrameStart(){ //프레임마다 실행할 것
    animation = requestAnimationFrame(eachFrameStart);

    timer++;

    ctx.clearRect(0,0,canvas.width,canvas.height);

   if(timer % 250 === 0){ //만약 프레임이 120이면,(=2초면)
        const cactus = new Cactus();
        cactusArray.push(cactus); 
        
   }
   cactusArray.forEach((a,i,o) => { //한번에 장애물 생성
    //x좌표가 0 미만이면 제거해라.
    if(a.x < 0){
        //제거해라~
        o.splice(i,1); //forEach에 인자를 담아서 제거해준 것
    }
    a.x--;


    collision(dino,a); //충돌 체크

    a.draw(); 
   });

   //---------------------------
   //스페이스바를 누르면 캐릭터는 점프해라
   //--------------------------- 
   if(점프중 == true){
        dino.y -= 3; //y축으로 1초에 2프레임만큼 날아가도록 하자.(=속도)
        //dino.y--; //근데 이러면 무한하니까, 100프레임 지나면 점프 그만하게 해주자.
        점프timer++;
   };

    if(점프중 == false){
        if(dino.y < 200){ //300이상으로 움직이지 않는다.

        dino.y+= 3;
        }
    };

    if(점프timer > 50){
        점프중 = false;
        점프timer = 0; //멈추고 나면 다시 점프 timer를 멈춰준다.
    };

   
   dino.draw();
}


//--------------
//충돌 확인 : 좌표 뺴기
//--------------

function collision(dino,cactus){
    const x축차이 = cactus.x - (dino.x + dino.width);
    const y축차이 = cactus.x - (dino.y + dino.height);
    if(x축차이 < 0 && y축차이 < 0){
        //부딪히면 게임 정리하자. 캔버스를 클리어하자. 그리고 애니메이션을 멈춰버리자.
        cancelAnimationFrame(animation);

    }

}

let 점프중 = false;

//스페이스바를 누르는 것은 이벤트 리스너를 활용한다.
document.addEventListener('keydown',function(e){
    if (e.code === 'Space'){
        점프중 = true;
    }
})


eachFrameStart();

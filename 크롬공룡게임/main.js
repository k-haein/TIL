const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d'); //해당 canvas는 2d 그래픽 랜더링 컨텍스트가 접근 가능함.


canvas.width = window.innerWidth -100;
canvas.height = window.innerHeight -100;

//공룡의 정보
var dino = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw(){ //dino.draw()로 꺼내쓸 수 있다.
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

dino.draw(); //네모 꺼내서 그리기

//장애물의 정보 -> 각각의 width,height등의 정보가 각각 다르므로 비슷한 obj가 많이 필요할 것. 그래서 보통 class를 쓴다.
class Cactus {
    constructor(){ //객체 인스턴스의 타입을 기술하는 함수.
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


cactus.draw();


/* 

문제 설명
이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

제한 조건
n과 m은 각각 1000 이하인 자연수입니다.

예시

입력
5 3

출력

*****
*****
*****

*/

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" "); 
    const a = Number(n[0]), b = Number(n[1]); 
    for(let i=0; i<b; i++){ //i을 선언해주고 몇줄(b)만큼 반복
        let str = ""; //출력할 변수 선언
        for(let j=0; j<a; j++){ // j선언후 별을 한줄에 몇개 찍을지 반복
            str = str + "*" //출력할 변수에 별을 담는다
        } 
    console.log(str) // 출력
    }
});



/*
1. 프로그래머스 문제풀이에서 기본적으로 제공해주는 탬플릿이 잘 이해가 되지 않았다.
2. 일단 나는 var에 더익숙하기 때문에 let과 const에 대해 정확히 공부할 것.
3. 그리고 부끄럽지만 기본적인 별찍기 문제를 위한 반복문인데, 다 까먹고 생각도 안났다.

결론) const 및 let 알아보기. 반복문 연습하기
*/






/* 2021-10-06 */
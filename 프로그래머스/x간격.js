/* 

함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 
다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

제한 조건
x는 -10000000 이상, 10000000 이하인 정수입니다.
n은 1000 이하인 자연수입니다.

입출력 예
x	n	answer
2	5	[2,4,6,8,10]
4	3	[4,8,12]
-4	2	[-4, -8]

*/

//내 답변
function solution(x, n) {
    var answer = [];
    for (var i=1; i<n+1; i++){ //1~5만큼만 곱하고 싶었다.
       var ans = x * i; //2단을 5번까지만 한다.
       answer.push(ans); //그값들을 answer 배열에 push한다.
    }
    return answer;
}

//map을 이용한 답변
function solution2(x, n) { 
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}

//삼항연산자 사용
function solution3(x, n) { 
    return (n === 1) ? [x] : [ ...solution(x, n - 1), (x * n)];
}

//동일한 답변이지만 n+1가 보기가 싫었는데 이렇게 할껄 그랬다.
function solution4(x, n) {
    const answer = [];
    for (let i = 0; i < n; i++) {
        answer.push(x * (i + 1));
    }
    return answer;
}
/*
문제풀이
1. 와...저 풀이는 뭐야...2번째 풀이 짧아서 놀랐다.
2. 대체로 push를 많이 썼더라. while를 쓰기도 했다.
3. 오케바리 쉬웠다!
*/


/* 2021-10-10 */
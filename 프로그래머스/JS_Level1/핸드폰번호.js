/* 
핸드폰 번호 가리기

프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

제한 조건
s는 길이 4 이상, 20이하인 문자열입니다.
입출력 예
phone_number	   return
"01033334444"	   "*******4444"
"027778888"	       "*****8888"
*/

//내 답변
function solution(phone_number) {
    let answer = '';

    let frontLength = phone_number.length - 4;

   let lastWord = phone_number.substr(frontLength);


   answer = "*".repeat(frontLength) + lastWord;

    return answer;
}

/*
베스트 풀이

function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}
*/

/*
문제풀이
정규식...왜...생각을 못했을까...
substr은 옛날 함수라 쓰지 말라고 하고, subString하고 slice가 남아있는데 slice가 음수를 지원하므로 slice를 추천함.
즉, slice로 처음 생각했던 뒤에서 추출이 되었던것.

slice를 쓰는 방법은


function hide_numbers(s){
  var result = "*".repeat(s.length - 4) + s.slice(-4);

  return result;
}


*/


/* 2021-10-14 */
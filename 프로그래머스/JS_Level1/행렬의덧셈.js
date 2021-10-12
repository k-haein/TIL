/* 

행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 
2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

제한 조건
행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

입출력 예
arr1	        arr2	         return
[[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
[[1],[2]]	    [[3],[4]]	    [[4],[6]]
*/

//내 답변
function solution(arr1, arr2) {
    var answer = [];
    
for(let i=0; i<arr1.length; i++){ 
    let ans = []; 
    for(let j=0; j<arr1[i].length; j++){ 
        ans.push(arr1[i][j] + arr2[i][j]) 
    } 
    answer.push(ans);
}
    return answer;
}




/*
문제풀이

1. j 부분에서 arr1과 arr2의 모양을 잡아준다. 이를 더해서 return 하므로 push 해주는 것.
2. 해당 ans까지는 첫번째 줄만 더한거다. 이게 두줄이니까 또 arr1 길이만큼 반복해주는 것.
3. 그 ans를 다시 answer에 push해준다.
*/


/* 2021-10-10 */
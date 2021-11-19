# Memo

## [ 직접 짜본 코드 및 경험, 부족한 점 ]

### Q1. <code>const a = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];</code> 와 같은 모양의 배열을 반복문으로 만드는 법?

arr.push는 쓸 생각을 했는데, push 시 인자 두개를 동시에 넣으면 반복문 하나로 끝날 수 있을 거라는 인사이트가 없었다.

또 반복문을 이중으로 쓸 생각을 하니까 덜컥 자신이 없었음... 아직도 반복문 하나 못하는게 무슨...ㅠ

노마더 슬랙에서 알려준 해답!

```javascript
const array = [];

const generateDoubleArray = (count) => {
 for (let i = 0; i < count; i++) {
   array.push(i + 1, i + 1) 
 }
}

generateDoubleArray(10)
```

또한 lodash를 안다면 이렇게도 가능하다.


```javascript
_(10).range().map((i) => [i+1, i+1]).flatten().value()
```

연습해보도록 하자.


<hr>


<!-- 2021.11.19~ -->
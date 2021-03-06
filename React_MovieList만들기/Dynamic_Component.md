
# 2. jsx
## 2) Dynamic_Component
### 데이터를 동적으로 추가해보자.

아 오늘은 잠이 와서 그냥 대충 정리해보자.

대충 다이나믹부터 하자면,

map이라는 것이 나온다. map은 array -> array를 보내는 것.

구체적으로 설명하면, array를 하나 설정해서 그 키값마다 value값이 있다고 치자.

우리는 그 array의 key값을 자동으로 받아서 우리가 설정한 함수의 props로 들어가게 해서

어제 했던 것 처럼 div 태그를 여러개를 만들지 않아도 자동으로 배열이 들어가게 하고 싶다.

그럴 떄 사용하는 것이 map이다.

배열을 담고, friends.map(function(아무거나){ console.log(아무거나)} 을 하면

배열에 담긴 것들이 map을 통해 개별로 분리되서 아무거나로 이름이 지어진 props에 차례대로 들어간 다음에

콘솔에 하나씩 찍힌다. 거의 반복문으로 키값을 넣어 value를 넣은 셈.

만약 return 0을 하면, 각각 key값에 대한 value값을 0으로 설정하는 것이므로 배열에 0만 4개 담긴게 출력된다.

추가로 화살표 함수가 잠깐 나왔는데 => 표시가 거의 그냥 Function이나 마찬가지이다.

대충 props => 결과 니까 어렵게 생각하지 말자.


리턴값에는 우리가 사용했던 <Food name = {~} /> 등을 사용할 수 있다.

<code> {foodLike.map(dish => <
Food name ={dish.name} />)} </code>
 
이렇게 하면 배열에 있는 것을 dish라는 인자가 key값을 담고, 그에 따른 value값을 Food라는 함수의 이름값에 알아서 넣어줘서 값이 들어간다. 

Food는 어제처럼 리턴값에 I Like {favorite} 가 들어있으니 알아서 dish에 담긴 foodLike 데이터가 key가 되고 그 value값이 favorite에 들어간다.

결론은 key값과 value를 분리해서 각각 인자별로 넣어주는 역할을 map이 하고 반복문을 안써도 알아서 랜더링 된다는 것!

---------
정리하면 map은 배열의 key값만 받아서 설정해놓은 Food 함수에 value를 각각 넣어주는 반복문의 역할을 한다. map안에 리턴값들은 우리가 리액트에서 하는  <Food />도 넣을 수 있고, Food에 인자를 넣을수도있다. 이를 조합하면 key를 일일히 넣지 않아도 map이 자동으로 넣어주고 return해주고, 이를 기본적인 App의 함수부분에  연결해주면 App 함수 안에 일일히 key값을 반복하지 않아도 밖에서  간단하게 구현할 수 있다.





<pre>

import React from "react";

function Food({ favourite }) {
  return < h1>I like {favourite}< /h1>;
function Food({ name, picture }) {
  return (
    < div>
      < h2>I like {name}< /h2>
      < img src={picture} />
    < /div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];

function App() {
  return (
    < div>
      < h1>Hello< /h1>
      < Food favourite="kimchi" />
      < Food favourite="ramen" />
      < Food favourite="samgiopsal" />
      < Food favourite="chukumi" />
      {foodILike.map(dish => (
        < Food name={dish.name} picture={dish.image} />
      ))}
    < /div>
  );
}

< /pre>

<!-- 2021.09.15-->

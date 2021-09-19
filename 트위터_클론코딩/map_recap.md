
# 2. jsx
## 3. map_recap

우리는 화면에  

1. I like 푸드이름
2. 푸드 사진


이렇게 두줄을 넣고 있다. 현재 foodLike라는 배열에 각각 5가지의 서로 다른 푸드 이름과 사진의 링크가 있다. 이를 map을 이용해서 반복적으로 화면에 뿌려보자.

------------


map은 뭐가 돌아오든 return값에 array가 돌아온다.map함수의 문법이 dish라는 오브젝트에 foodILike 요소를 차례로 넣어준다.

map에다가 넣은 것을 return할 때에는 반드시 key prop가 있어야 한다. 즉, 우리는 key와 name이 각각 필요하다. key에는 우리의 데이터 리스트에 id값을 부여해서 그걸 넣는다. 


App 함수는 화면에 보여지는 것을 넣는것인데, 여기에는 Food 태그를 넣었다. Food 태그는 또다른 함수로, 여기에 화면에 보이는 것을 써준다. App은 그저 데이터인 foodLike를 map해서 Food태그에 뿌려주고, Food 태그는 각각의 key와 name과 picture를 Food의 인자에서 가져와서 매칭해준다. 

<b>
여기서 포인트는 반드시 key값이 필요하다는 것과, Food함수에서 이미지의 경우, 이미지의 이름값인 alt를 설정해주어야 한다.
</b>

<pre>

import React from "react";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];

function Food({ name, picture }) {
  return (
    < div>
      < h2>I like {name}< /h2>
      < img src={picture} alt={name} />
    < /div>
  );
}

function App() {
  return (
    < div>
      {foodILike.map(dish => (
        < Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    < /div>
  );
}

export default App;
</pre>


------------








<!-- 2021.09.19-->


# 2. jsx
## 4) prop-types


각 리스트에 점수를 부여한다. rating

우리는 리스트에 수많은 인자들이 있다. 각각의 인자는 img URL 주소를 가지기도 하고, int 형의 숫자나 string 형의 문자를 가지기도 한다.

만약 map을 할 때 없는 인자를 넣는다면 오류가 난다. 수 많은 타입의 인자 중 내가 원하는 것이 있는지 없는지를 판별해보자.

> npm i prop-types

콘솔에서 설치하고,

prop-types는 내가 전달받은 props가 내가 원하는 props인지 확인해준다.


추가로, 잘 설치됐는지 보고싶으면 package.json에서 확인이 가능하다.

상단에 prop-types를 import해준다.

> import PropTypes from "prop-types";

<pre>

Food.propTypes = { //반드시 이름은 propTypes여야만 한다. 이건 키워드이다.

//내가 얻고 싶은 props의 정보 적기
//dish에서 name과 picture은 string이고, isRequired하면 꼭 필요하다는 것.필수적으로 채워야한다.
//하지만 rating은 number형이므로 형태를 바꿔준다. 그리고 만약 꼭 넣을필요 없다면 isRequired를 없앤다.

  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number


};

</pre>



<!-- 2021.09.19-->

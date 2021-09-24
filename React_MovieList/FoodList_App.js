//React 및 PropTypes import하기
import React from "react";
import PropTypes from "prop-types";

//FoodList를 담은 배열 선언
const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    //rating: 5
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
      rating: 4
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
      rating: 5
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
      rating: 3
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
      rating: 1
  }
];

//Food 컴포넌트는 name,picture,rating 인자를 가지고 받아서 화면에 띄운다.
function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>점수 : {rating}/5</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

//내가 얻고 싶은 props의 정보 적기
Food.propTypes = {
//dish에서 name과 picture은 string이고, isRequired하면 꼭 필요하다는 것.필수적으로 채워야한다.
//하지만 rating은 number형이므로 형태를 바꿔준다. 그리고 만약 꼭 넣을필요 없다면 isRequired를 없앤다.
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

// App 컴포넌트는 메인으로, 위에서 선언한 Food 컴포넌트의 내용에 FoodList 배열을 map해서 각각을 반복해서 뿌려준다.
//dish는 FoodList 뿌리기 위해 담는 인자이며, key값이 꼭 필요하다.
function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food 
          key={dish.id} 
          name={dish.name} 
          picture={dish.image} 
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

//이를 내보내서 뼈대만 있는 index.js로 보내고, 이를 dom에 띄운다.
export default App;
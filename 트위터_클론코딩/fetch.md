
# 4. data fatch
## 1) 기본 구상

이제 우리의 movie app을 구성해보자.

<pre>
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return < div>{isLoading ? "Loading..." : "We are ready"}< /div>;
  }
}
</pre>
render() => componentDidMount() 로 랜더링 후 바로 실행되는 곳에 setTimeout으로 딜레이를 준다.

기본 state는 isLoading : 1이다. 하지만 랜더링 후 6초뒤에 state를 변경하는데, isLoading:0이 된다.

랜더링이 화면에 나오게 하려면 리턴하는데, 삼항연산자를 써서 만약 isLoading이 1이면 ...하고, 0이면 레디를 띄운다.

이때, isLoading을 가져오려면 this.state를 써야하는데, 직접 쓰면 별로니까 이를 const로 선언해서 사용해본다.

이제 우리는 movies라는 배열에 영화 목록을 담아서 무언가 클릭했을 때 동적으로 결과가 달리 나올 수 있도록 연습해볼꺼다.

fetch는 어디있는지 이미 아는 상태로 가서 말그대로 가져온다는 뜻이다.


## 2) 데이터를 가져와라.

axios를 쓸 것이다. 이건 fetch 위에 있는 작은 layer이다.

> npm install axios

설치해서 사용한다.

이제 YTS라는 API를 사용하는데, 여기서 movie List json을 가져와서 그 데이터를 사용해 볼 것이다.

https://yts.mx/api#list_movies

여기 들어가서 https://yts.mx/api/v2/list_movies.json 를 가져와보자.

근데 이 URL은 불법 주소라서 링크가 계속 바뀐다. 니꼬의 주소를 사용해보자.

> axios.get("https://yts-proxy.now.sh/list_movies.json");

이걸 랜더링 직후에 가져오면 json이 get으로 불러와지게 된다. 이제 우리는 이 데이터에서 원하는걸 제대로 fatch해서 가져와야한다.

근데, axios를 하는 중에는 시간이 좀 걸릴 수 있기 때문에 자바스크립트에게 조금 시간이 걸릴 수 있게 딜레이를 걸어줘야한다.

예전에 자바스크립트가 이전에 시작한 것을 끝날 때까지 기다려주지 않고 다음 것을 실행하느라 이전의 것이 씹혀서 promise를 걸어준 적이 있다.

따라서 async(이 함수는 비동기이다.)와 await(그러니 기다려라.) 를 써주자. 이렇게 되면 axios가 끝날 때까지 기다린다.

await는 async가 있어야 사용이 가능하다.

<pre>
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(movies.data.data.movies);
  };
  componentDidMount() {
    axios.get("https://yts-proxy.now.sh/list_movies.json");


    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
  }
}
</pre>

현재 콘솔로 찍어보니 movies 안에 data가 있고, 또 data가 있고, 그 안에 movies에 리스트가 있다.

원래는 movies.data.data.movies로 해야하는데, 이걸 이렇게 담을 수 있다.

<pre>
const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(movies);
  };
</pre>

이처럼 처음 movies를 선언할 때 정확한 위치의 데이터로 선언하고, 그 변수를 console.log로 찍는다.


이제 이 movies를 state로 넣어보자.

![스크린샷 2021-09-23 오후 9 47 50](https://user-images.githubusercontent.com/75053256/134509295-08b4d769-794f-483b-ba00-ba52dc73ed91.png)

이처럼 movies를 state의 movies에 axios로 가져온 movies json 배열을 넣는다.

자바스크립트는 하나만 써도 state를 덮어쓴다는걸 알 수 있기 때문에 하나만 쓴다. 또 state의 로딩값을 0으로 바꿔준다.

> this.setState({ movies, isLoading: false });

이제 이걸 랜더링해볼 것이다. 우선 랜더링할 때, 로딩 말고도 movie 리스트가 보여질 것이다. 인자를 추가해준다.

> const { isLoading, movies } = this.state;

이제 리턴할 건데, 삼항 연산자에서 we are ready 대신에 movie 리스트를 넣어준다.

실은 영화리스트를 띄우는 데에는 class가 필요한 것이 아니다. 그저 데이터를 담아서 뿌려주는 function component면 충분하다.

따라서 map 형태로 담아서 해보고, 따로 Movie component를 만드는 Movie.js를 만들어 이를 import 해준다.

<pre>

import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster }) {
  return < h4>{title}< /h4>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  };
  
export default Movie;

</pre>

App.js에 Movie.js를 import해주고, 원하는 값을 반복적으로 불러오는 Map을 설정한다.

<pre>
  render() {
    const { isLoading, movies } = this.state;
    //                  ㄴstate에서 가쟈온 movies / 안가져오면 this.movies.state.movies로 가져와야함
    return (

      < div>{isLoading ? "Loading..." : movies.map(movie => (
        //                             ㄴ배열에 담긴 movie리스트
        < Movie
          key={movie.id}
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
        />
      ))}
      < /div>
    );
</pre>

여기서 각각의 class를 html로 설정해서 그 class에 접근해 css를 변경할 수 있다.

여기서 에러가 몇개 발생하는데, class에 관한 문제다.
현재 자바스크립트의 class를 사용하는 우리는 css에 관한 class와 이름이 겹친다.

따라서 이경우 className으로 이름을 변경해주면 된다.

> <div className="movie__data">

또한 장르의 경우 여러개라서 map으로 가져오는데, 이때 key값이 무조건 필요하다.

<pre>
          < ul classnName="genres">
          {genres.map((genre, index) => (
            < li key={index} classnName="genres__genre">
              {genre}
            < /li>
          ))}
        < /ul>
</pre>

기본적으로 react에서 제공해주는 index,number 이름의 key를 가져다 쓰면 된다. SEQ같은 느낌.

추가로 summary가 너무 길어서 이를 동일하게 맞춘다고 하면,

> < p classnName="movie__summary">{summary.slice(0,140)}...</ p>

이렇게 하면 딱 140자로 맞출 수 있다. 굳이 반복문으로 안잘라도 데이터를 랜더링할 때마다 다 잘라주는 셈이다.


# github 연결

> npm i gh-pages

내 웹사이트를 github의 도메인에 나타나게 해준다.

package.json에 들어가서 homepage를 주소해준다. 프로젝트명 및 유저 이름이 모두 소문자여야 한다.

또한 scripts에 추가해준다.
<pre>
"scripts": {
...
    "deploy": "gh-pages -d build", //gh-page에 연결
    "predeploy": "npm run build" //연결 전에 build를 선행한다. 
  },
...

  },
  "homepage": "https://k-haein.github.io/movie_app_2021/"
}
</pre>

빌드를 해보자.

> npm run build

빌드 폴더가 생기면서 축소화된 파일들이 생긴다.

![스크린샷 2021-09-23 오후 11 29 24](https://user-images.githubusercontent.com/75053256/134526301-27ed7281-479a-41ed-a43c-3d886230dc1b.png)

그리고 이 빌드한 페이지들을 gh-pages에 업로드를 한다.

이 과정을 deploy라는 키워드에 담아서 콘솔에서 실행할 수 있게 하는 것.

따라서 pre의 경우 deploy하면 자동으로 따라오므로

> npm run deploy

그럼 홈페이지 주소로 들어갔을 때 화면이 나오게 된다.

build 폴더를 얻어야 그 폴더를 올리는 것이기 때문에 이 과정이 꼭 필요하다.

<!-- 2021.09.23-->
 
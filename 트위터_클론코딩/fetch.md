
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


## 2) 

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

원래는 movies.data.data.movies로 해야하는데, 이걸 


<!-- 2021.09.23-->

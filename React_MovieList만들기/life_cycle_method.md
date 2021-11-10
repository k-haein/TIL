
# 3. State
## 3) life cycle method

이제까지 react component는 render만 썼다. 다른 것도 확인해보도록 하자.

https://reactjs.org/docs/react-component.html

리액트 홈페이지에서 확인 가능.

life cycle method는 기본적으로 react가 component를 생성하고 없애는 방법이다.

딱 사용하는 것만 추려보면,

1. mounting : "component가 태어나는 것"
2. updating : "업데이트"
3. unmounting : "component가 죽는 것 = 페이지가 바뀔 때"

![스크린샷 2021-09-23 오전 12 14 44](https://user-images.githubusercontent.com/75053256/134371337-e316ada6-3800-4da6-a803-400f8906cc4f.png)
)

constrctor() 부터 보자면, javascript의 문법으로 class를 만들 때 호출된다. 이건 render 보다 먼저 호출된다.

그다음에 render()가 되고, componentDidMount() 는 render가 다 되었을 때 실행된다. 

![스크린샷 2021-09-23 오전 12 26 59](https://user-images.githubusercontent.com/75053256/134373551-e098dfb8-4715-4e01-ad9e-9f6ef3138e59.png)

업데이트는 내가 Add와 Minus 버튼으로 만든 움직임. 즉, 내가 만든 변화들.

여러개가 있는데, static getDerivedStateFromProps() , shouldComponentUpdate() 는 render 이전에 하는 것.
getSnapshotBeforeUpdate() 는 사용해본 적이 없고, 
componentDidUpdate() 는 랜더링 후 업데이트가 완료되면 실행된다.

이벤트로 생각하면 편할 것.

componentWillUnmount()는 컴포넌트가 다른페이지로 이동하거나, 아무튼 현재 컴포넌트가 끝났을 때 발생한다.

정리하자면, constroctor() => render() => componentDidMount() 첫실행이 되고,

만약 버튼 등을 눌러 업데이트를 하면 랜더링 후 componentDidUpdate() 실행.

다른페이지로 가면 componentWillUnmount() 로 컴포넌트 죽음.

<pre>
class App extends React.Component {
  state = {
    count: 0
  };
  add = () => {
    //console.log("add");
    //this.state.count = 1;
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    //console.log("minus");
    //this.state.count = -1;
    this.setState(current => ({ count: current.count - 1 }));
  };
  render() {
    return (
      < div>
        < h1>The number is: {this.state.count}< /h1>
        < button onClick={this.add}>Add< /button>
        < button onClick={this.minus}>Minus< /button>
      < /div>
    );
  }
};
</pre>


<!-- 2021.09.23-->

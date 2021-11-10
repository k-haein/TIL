
# 3. State
## 1) Class Components

앞서 만든 food 예제에서 foodILike 배열은 직접 입력한 데이타이다.

이제는 동적인 데이터로 작업해보자.

state는 동적인 데이터와 작업할 때 만들어진다. 

function App(){ ~ } 와 같은 것들을 우리는 function component라고 불렀다.

우리는 이 function 안에서 무언가를 return했다.

이 대신에 Class Component를 만들어보자.

> class App extends React.Component { ~

React.Component를 상속하는 App클래스를 다시 선언한다.

착각하면 안된다. React.Component => App이다. CellPhone => Samsung처럼.

React.Component 안에는 많은 것들이 있는데, 얘는 return이 없다.

이건 function이 아니고 render 하는 메소드만 있기 때문이다.

따라서 무언가 찍어내고 싶으면 render(){ return ~ } 이렇게 render안에다가 해야한다.

정리하자면, 

function Component : function App(){ return ~ } => return하는 것을 스크린에 표시한다.
class Component : class App extends React.Component { render(){ ~ } } => React.Component에서부터 확장되고 render 메소드 안에 넣은 것을 스크린에 표시된다.

<b>React는 모든 class component의 render 메소드를 "자동으로" 실행한다.</b>

그리고 더 중요한 것. class component 안에는 state라는 object가 있는데, component의 data를 넣을 공간이 있고, 

<h4>이 데이터는 변한다.</h4>

<pre>
class App extends React.Component {
  state = {
    count: 0
  };
  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
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

1. state 속 count를 쓰기 위해서는 this.state.count로 가져와야 한다.
2. es6 자바스크립트 코드에 이런게 있다.. 관련 강의 들어볼 것.   add = () => {}; 형태로 함수를 쓸 수 있다.
3. 버튼의 onclick prop를 사용할 때에도 this로 가져와야 한다.


<!-- 2021.09.20~22-->


# 3. State
## 1) Class Components and State

앞서 만든 food 예제에서 foodILike 배열은 직접 입력한 데이타이다.
state는 동적인 데이터와 작업할 때 만들어진다. 

function App(){ ~ } 대신에 새로운 function component를 만든다.

> class App extends React.Component { ~

React.Component를 상속하는 App클래스를 다시 선언한다.

React.Component 안에는 많은 것들이 있는데, 얘는 return이 없다.

이건 function이 아니고 render 하는 메소드만 있기 때문이다.

따라서 무언가 찍어내고 싶으면 render(){ return ~ } 이렇게 render안에다가 해야한다.



<!-- 2021.09.20-->

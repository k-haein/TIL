
# 2. jsx
## 1. react Component
### 1) react Component

컴포넌트(Component)란 프로그래밍에 있어 재사용이 가능한 각각의 독립된 모듈을 뜻한다.

컴포넌트는 HTML을 반환하는 함수이다. App.js에 있던 함수 App은 div태그를 리턴한다. 즉, 
<
/App> 에 있던 HTML을 리턴한다.

<pre>
function App() {
  return ( 
    < div className="App">
      Hello!
      < Food 
        fav = "kimchi" 
        somthing = {true} 
        papa = {[1,2,3,"qwe"]}
      />
      < Food 
        fav = "cheeze"
      />
      < Food 
        fav = "milk"
      />
    < /div>
  );
}
export default App;
</pre>

react는 component를 사용해서 HTML처럼 작성하려는 경우에 필요하다. 이러한 자바스크립트와 HTML의 조합을 <b>jsx</b>라고 부른다. 리액트만 유일한 개념이다.

jsx는 자바스크립트를 확장한 문법. JS안의 html이며, js 기능을 포함한다.

<br>

### 2) 어떻게 컴포넌트를 만들까?

<br>

src에 새파일을 만든다. 이 자바스크립트 파일 상단에 react를 import하고(지금은 자동) 함수를 정의해서 return값에 HTML을 작성해준다. 마지막으로 export해준다. 그러면 이 파일은 골격에 넣을 수 있는 하나의 컴포넌트가 된다.

<pre>
ReactDOM.render(
  < React.StrictMode>
    < App /> < Potato />
  < /React.StrictMode>,
  document.getElementById('root')
); 
</pre>

마지막에 export해준 potato를 App처럼 App 옆에 써준다. 오류가 난다.

왜? <u>리액트는 하나의 컴포넌트만 랜더링하기 때문이다.</u> 두개면 jsx 법칙에 맞지 않다고 오류가 난다.

<br>

### 3) 그럼 App에 넣어주자.

<br>

import하고, div 태그 안에 넣어준다. (단, 슬래시는 뒤에 붙여줘야한다.)


기본 App 이름의 컴포넌트만이 index 페이지에 써질 수 있으며, 또다른 수많은 컴포넌트들은 App안에, 또는 App안에 있는 potato안에 수없이 들어갈 수 있다. 이처럼 조합해서 리액트 페이지가 만들어지는 것.


+ 이제는 수정이 되었는지 두개의 컴포넌트도 렌더링이 가능하다.
ReactDOM.render 안에 id를 두개 찾을 수 있다.
+ 원래는 React를 import해줘야하는데 요즘은 안써도 자동으로 import해준다. 그래서 App.js 안에 함수밖에 없는 것.
+ 마지막에 export default 함수이름 : 이걸 해주어야 외부로 내보낼 수 있다.
+ Potato를 App위에 선언하면 똑같이 사용 가능하다.

<br>

-----------------------

<br>

### 4) 반복하지 않고도 동적으로 작성하기

리액트의 장점은 재사용이 가능한 컴포넌트를 만들 수 있기 때문이다. 따라서 반복해서 사용이 가능하다.

컴포넌트에는 이름을 줄 수 있다. 흔히 div 태그에 클래스 이름을 주듯이 하면 된다. name = "?" 형식이다. 

<code>
      <
      Food name = "kimchi"/>
</code>

<br>

<b>이 때 food 컴포넌트에 kimchi라는 value로 prop name을 주었다.</b>

 꼭 name이 아니어도, fav 등의 property를 주면 된다.

<code>
      <
      Food <br>
        fav = "kimchi" <br>
        somthing = {true} <br>
        papa = {[1,2,3,"qwe"]}<br>
      />
      </code>

이것은 Food의 인자값이 되며 properties 들은 콘솔 찍어보면 나온다. 

리액트는 누가 food 컴포넌트에 정보를 보내려고 하면 이 모든 속성들을 가져온다.

자바스크립트의 최신버전인 es6에 따라 props.fav 처럼하면 kimchi가 나온다.

또한가지 방법은 {} 안에다 키값을 넣는 것이다.

<code> function Food({fav}){ ~ } </code>

따라서 여러 food의 fav 키값은 다 유지가 되며, 이를 food에 props로 넣으면 해당하는 값들을 동적으로 넣어줄 수 있다.

+ 컴포넌트는 대문자로 시작해야한다.
+ props는 argument로 간다. 따라서 props.인자키값 해도 나온다. 
<!-- 2021.09.14-->

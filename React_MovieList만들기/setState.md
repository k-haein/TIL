
# 3. State
## 2) setState

만약 그냥 this.state.count = 1; 처럼 직접적으로 count를 바꾸는 식의 코드를 쓰면 콘솔에 다음과 같은 에러가 발생한다.

![스크린샷 2021-09-22 오후 11 34 58](https://user-images.githubusercontent.com/75053256/134364027-46068fb7-43fe-46bb-b45d-d901a509c89f.png)


> Use setState()

state를 다이렉트로 바꾸지 말고 이걸 쓰란다. 왜 바뀌지 않을까?

<b>#### react는 render function을 refresh하지 않기 때문이다. </b>

따라서 state 상태를 변경할 때는 매번 react가 render function을 호출해 바꿔줄 수 있도록 해야 한다.

왜냐면 값이 변경되면 render도 변경해줘야 바뀐 값으로 나타날테니까.

그를 위한 함수가 setState function이다. 이걸 호출하면 react는 우리가 언제 setState를 호출하는지 확인한 다음(=버튼을 누를 때), 자연스럽게 view를 refresh하고, 동시에 render function을 refresh해준다.

state는 object이기 때문에, setState는 새로운 state를 받아야 한다.

> this.setState({ count : 1 });

새로운 state 값인 count 1 을 받았다. 따라서 버튼을 누르면 state는 1로 변경되고, 동시에 view와 render가 refresh 된다.

이렇게 되면 되게 똑똑한게, react는 전부를 바꾸지 않고 딱 숫자부분만 바꾼다. 변화가 있는 부분만 변경되는 것.

virtual DOM이 있기 때문에 매우 빠르다.

> this.setState({ count: this.state.count + 1 });

이렇게하면 반복문처럼 현재 state 속 count를 가져와 +1 시킬 수 있다.

하지만 this.state 와 같이 직접적으로 state를 쓰는 것은 성능상의 문제로 좋지 않다.

똑똑한 react는 현재의 state를 접근하는 키워드가 있다. 이를 함수처럼 사용할 수 있다.

> this.setState(current => ({ count: current.count + 1 }));

마지막으로 정리 : setState를 호출하면 react는 새로운 state와 함께 다시 render함수를 호출한다. 직접 바꾸면 render 호출 안함.

<!-- 2021.09.22-->

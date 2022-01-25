# DOCTYPE

DOCTYPE(문서형식) 선언은 어떤 SGML이나 XML 기반 문서 내에 그 문서가 특정 문서 형식 정의(DTD)를 따름을 지정하는 것이다. 

본래 DTD에 기반한 SGML 도구를 이용해 문서 해석 가능성과 유효성을 검사하기 위한 목적으로 문서 내에 삽입되었다.

HTML 문서에서 &lt;html&gt; 태그를 정의하기 전에 가장 먼저 선언되어야만 한다.

이러한 DOCTYPE 선언은 HTML 태그는 아니지만, 선언된 페이지의 HTML 버전이 무엇인지를 웹 브라우저에 알려주는 역할을 하는 선언문으로, 대소문자를 구분하지 않는다.

현재 html5에서는 그냥 &lt;!DOCTYPE html&gt; 이렇게 하면 끝이지만, html4 에서는 DTD를 참조해주어야 했다.

```
DTD
이전 버전의 HTML(HTML2~HTML4)은 SGML(Standard Generalized Markup Language)에 기반을 두어 만들어졌기 때문에 DTD 참조가 필요하며, 이 때문에 DOCTYPE 선언을 하려면 공개 식별자와 시스템 식별자가 포함된 긴 문자열을 작성해야 한다.

HTML과 XHTML은 각 버전에서 사용 가능한 태그나 속성 등을 DTD로 상세히 정의한다. DTD는 XML 문서들의 클래스에 논리적인 구조를 강요하는 법칙이다. 따라서 DTD는 모든 적법한 마크업을 쓰고 마크업이 문서에 포함될 수 있는 장소와 그 방법을 지정한다. 이런 요소 구문 또는 문법은 요소와 그들의 속성의 의미를 정의한다.

출처 : https://webdir.tistory.com/40
```

간단하게 말하면 지금 작성하는 이 HTML 문서가 어떤 문서 형식인지를 선언해주는 것이며, 이 선언이 없다면 쿼크모드로 랜더링해서 각 브라우저마다 다른 형태의 결과물을 보여주게 된다.

따라서 우리는 doctype 선언으로 브라우저 별로 같은 레이아웃이 될 수 있도록 결과물을 출력해주는 것이다.

쿼크모드란 오래된 웹 페이지의 하위 호환성을 유지시키기 위해 사용되는 모드이며, w3c나 IETF의 표준을 엄격하게 준수하지 않는다.



HTML4와 XHTML의 DOCTYPE 선언 방법은 까다로우며 문서 유형에 맞지 않게 사용한 경우 오류가 발생하기도 하며 브라우저마다 다르게 해석되기도 한다. HTML4 및 XHTML에서 DOCTYPE을 선언하는 방법은 아래와 같다.
엄격 모드(strict mode) : HTML4 문법을 정확히 따르기 위해서 선언한다. 문법을 엄격히 따지기 때문에 실수가 있는 경우 오류가 발생한다.
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```
호환 모드(transitional mode) : 문법에 일부 실수가 있어도 허용한다.
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```
프레임세트 모드(frameset mode) : 프레임세트를 사용할 경우 선언한다.
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
```
위와 같이 웹 문서의 유형을 지정하기 위해서 DOCTYPE을 선언한다. DOCTYPE은 반드시 선언하는 것이 좋다. 선언하지 않을 경우 잘못된 방식으로 해석이 될 수 있으므로 주의하는 것이 좋다.

우리는 쿼크모드를 지원하지 않으며 표준모드 사용을 위해 Doctype 선언이 반드시 필요하다.

이러지 않으면 드롭다운 위치를 못찾고 이상한 곳에 뜬다.

<!-- 2022.01.25 -->

# e.printStackTrace();



e.getMessage() = 에러 이벤트와 함께 들어오는 메세지를 출력한다.

```java
e.getMessage(): 출력문구
```
 

e.toString() = 에러 이벤트의 toString()을 호출해서 간단한 에러 메시지를 확인한다.

```java
e.toString(): java.lang.Exception: 출력문구
```
 

e.printStackTrace() = 에러 메세지의 발생 근원지를 찾아서 단계별로 에러를 출력한다.

```java
e.printStackTrace(): java.lang.Exception: 출력문구

at ExThrowException.main(ExeThrowException.java:6)
```

JAVA 코딩시 가장 많이 사용하는 코드 중 하나가

```java
try {
  // ...
}
catch(Exception e){
   e.printStackTrace();
}
```

이다.

printStackTrace() 외에도 
```java
printStackTrace(PrintWriter writer);
printStackTrace(PrintStream s);
```
등이 존재하기 때문에, stackTrace 의 내용을 파일등에 남기는 것은 그리 어려운 일이 아니다.

하지만 Log4J 등을 사용하거나 별도로 자신이 만든 로그라이브러리등을 사용할때는, 이를테면

```java
logger.error(e.printStackTrace());
```

이런식으로 사용할 수가 없기 때문에, StackTrace 의 내용을 얻어야 하는데...
getMessage() 또는 getLocalinzedMessage()를 사용할 수도 있지만 StackTrace에 비해서는 디버깅 정보가 약간 빈약하기 때문에 적절하지 못하다.

JDK 1.4부터 getStackTrace() 라는 메소드가 추가되었는데 이 메소드는 StackTraceElement의 배열을 리턴해준다.
따라서 이를 이용해서

```java
try {
   // ...
}
catch(Exception e){
   StackTraceElement[] elem = e.getStackTrace();
   for ( int i = 0; i < elem.length; i++ )
      logger.error(elem[i]);
}
```
와 같은 식으로 처리를 해주면 종종 쓸만하다.

출처: https://wwhite103.tistory.com/39 [W.C.]
<!-- 2021.10.12 -->
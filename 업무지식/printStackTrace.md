
# e.printStackTrace();



e.getMessage() = 에러 이벤트와 함께 들어오는 메세지를 출력한다.

e.getMessage(): 출력문구

 

e.toString() = 에러 이벤트의 toString()을 호출해서 간단한 에러 메시지를 확인한다.

e.toString(): java.lang.Exception: 출력문구

 

e.printStackTrace() = 에러 메세지의 발생 근원지를 찾아서 단계별로 에러를 출력한다.

e.printStackTrace(): java.lang.Exception: 출력문구

at ExThrowException.main(ExeThrowException.java:6)

JAVA 코딩시 가장 많이 사용하는 코드 중 하나가

try {
  // ...
}
catch(Exception e){
   e.printStackTrace();
}

이다.

<!-- 2021.10.12 -->
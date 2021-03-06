
# MimeType(Multipurpose Internet Mail Extensions)

```
클라이언트에게 전송된 문서의 종류를 알린다. 파일 변환을 위한 포맷
```

<hr>

## 개념

파일에는 여러가지 타입이 있다. 

Text부터 Image, Vidio, Audio 등  웹 상에는 수 많은 문서와 파일이 돌아다닌다.

MIME 타입은 이메일이 등장한 이후, 이메일에 파일을 첨부하여 보내기 위해 등장했다.

첨부된 파일을 텍스트 문자 형태로 변환해서 이메일과 함께 전송하기 위한 포맷이다.

따라서 텍스트 문자 형태로 변환하기 위해 각각의 타입을 표준화하여 관리한다. 현재는 IANA(Internet Assigned Numbers Authority)라는 인터넷 할당 번호 관리기관에서 다양한 파일 타입을 표준화하여 관리하고 있다.

MIME 타입은 매우 많은 종류를 표준화하고 있으며, 새로운 타입의 파일이 생길 때마다 계속해서 추가되고 있다.


## 원리

이미지, 사진, 동영상 등의 파일은 바이너리 데이터이다. 

바이너리(Binary) 란, 2진법, 즉 0과 1로만 수를 표현하는 진법이다. 컴퓨터는 0과 1로 이루어져 있다.

즉, 바이너리는 컴퓨터가 직접 해석할 수 있는 자료이며, 사람이 이해하는 Text를 제외한 모든것을 Binary로 분류할 수 있다.

당연히 이미지, 사진, 동영상 등은 오직 바이너리 데이터로, 2진법으로 이루어져 있어 컴퓨터가 읽어들일 수 있다.

문제는 메일 메시지는 기본적으로 ASCII 코드 기반의 텍스트만을 전송한다.

하지만 7비트 형식의 ASCII 코드가 지원하지 않는 각국의 언어와 이진 데이터 형식의 실행 파일, 영상, 음성 데이터를 전송하려면 기능을 확장이 반드시 필요하다. 

이런 기능을 포함한 것이 MIME 으로 Multipurpose Internet Mail Extension의 약자이다. 

MIME는 멀티미디어 데이터를 수용하기 위한 기능을 확장한 메시지이다. 

메일 송신 전에 비-ASCII 데이터를 ASCII 데이터로 변환하고 메일을 수신받기 전에 ASCII 데이터를 비-ASCII 데이터로 변환하는 과정을 수행한다.

## 업무

만약 제품 사용 시 콘솔 에러에서 cfg 및 메시지 파일과 관련한 오류가 뜨는 경우, 해당 파일을 찾을 수 없다고 하는 경우에는

mime에 등록된 확장자가 아니기 때문에 그렇다. 있는 확장자가 아니라 우리가 만든거라 그런 것.

이 경우엔 javascript 변수에 해당 파일의 내용을 담아 그 변수를 불러오는 식으로 대처해야 한다. 

<!-- 2021.09.17 -->
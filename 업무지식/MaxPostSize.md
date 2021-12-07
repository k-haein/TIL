# MaxPostSize


### get방식에만 parameter 최대 size 의 제한이 있는줄 알고 있었다. 하지만 왠걸 Post 에도 parameter Size 제한이 있었다.

<br>



- 데이터양이 많아지면 서버쪽에서 null exception이 발생한다.
- 저장할때 getSaveData() 로 넘기는데 저장되는 데이타가 잘리는거 같음.
- 저장 건수가 많아지면 파라미터가 잘린다.
- DoAllSave 로 8000건 이상의 데이터를 JAVA로 보낼시 
```java
@RequestParam
Map<String, String>
```

paramMap 인자에 빈값으로 넘어오는데,
혹시 DoAllSave 로 8000건 이상의 데이터를 보낼수가 없는것인지 궁금합니다.

등등 데이터 양이 많이지면 잘리는 이슈에 대한 답변.

-------------------------------------

WAS 제품군 마다 정도 차이는 있는데 가까운 예로 톰캣을 기준으로 설명을 드리면 기본적으로 Post로 넘어갈 수 있는 최대 Szie가 약 2메가 정도이고, 최대 파라메타 개수는 100,00 개(Tomcat 7.0 기준) 정도 입니다.

아마 WAS에서 POST로 넘길수 있는 데이터 제한에 걸린 것으로 보입니다.

그래서 이 제한을 풀 수 있는 옵셥이 필요한데..

server.xml 파일을 열어보시면 같은 설정 항목에다 maxPostSize, maxParameterCount 값을 설정(무제한) 해주셔야 합니다.

```java
<Connector connectionTimeout="20000" port="8080" protocol="Http/1.1" redirectPort="8443"
  URIEncoding="euc-kr" maxPostSize="0"​ maxParameterCount ="-1" />
```


참고로 위 설정은 톰캣 기준이며, 다른 WAS 를 사용하고 계신다면 해당 제품에 맞는 설정 가이드를 솔루션 업체에 문의 해보시기 바랍니다.



# maxParameterCount 

maxParameterCount 의 경우, 갯수를 제한하는 것.

Get, Post전송의 경우는 파라미터의 갯수도 제한을 둔다. Post에만 해당하는것은 아니다. 제한을 두지 않을경우 기본적으로 10,000개까지가 사용이 가능하다.


<!-- 2021.09.16 -->
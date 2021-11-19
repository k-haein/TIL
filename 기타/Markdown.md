# Markdown

## 1. 개괄

개괄은 이렇게 사용하기로 합니다.

폴더 이름엔 스페이스 공백이 있으면 링크 인식이 안됩니다.
<pre>
## 대주제
* 폴더 이름
    + 소주제
        - [제목](./폴더이름/경로.md) //링크 쓰는법
        - 쭉쭉 쓰기 
</pre>

 ## 2. Git push 메시지

git의 터미널을 열고 아래 내용을 차례대로 진행합니다.
```
git add .
git commit -m "커밋메시지"
git push origin
```
 
## 3. Git 내용 업데이트
```
git pull origin
```
아무것도 없는 상태에서 연결하는건 <code>git clone</code>입니다.




## 4. 마크다운(.md) 작성 요령

### 1) 소스코드 중간에 쓰기
<pre>
1. &lt;pre&gt;&lt;code&gt;코드 내용&lt;/code&gt;&lt;/pre&gt;
2. 코드 블럭 사용(```)
※코드 블럭 시작점에 사용하는 언어를 선언하면 문법강조가 가능하다.
ex) 
```java
코드 내용
```
</pre>


### 2)링크 걸기
<pre>
[link keyword](링크)
</pre>


### 3) 내용 접기

<pre>
&lt;details markdown="1"&gt;
&lt;summary&gt;부모노드 이름&lt;/summary&gt;
....자식 내용들....
&lt;/details&gt;
</pre>

### 4) 이미지 첨부
github에 issue > new issue 가서 textarea에 사진 붙여넣고 그 링크를 내용에 첨부.

![image](https://user-images.githubusercontent.com/75053256/142565606-b5412c9f-cdc2-4f8c-83f9-69e5945d704d.png)




### 5) 인용구
&gt; 꺽쇠문자를 사용하면 인용구처럼 앞에 막대기가 생긴다.
이중으로도 사용 가능. 그 안에서 마크다운 가능.

&gt;      &gt;   이렇게 쓰면 이중으로 된다.

ex)
> 1차 인용구
> > 2차 인용구
> > > 3차 인용구

### 6) 태그 겹침

태그 인식되는게 싫으면 XSS 기호를 쓰자. 꺽쇠만 써도 좋다.

예를 들어, 꺽쇠 태그는 왼쪽꺽쇠(&lt ;)와 오른쪽 꺽쇠(&gt ;)가 있다.

띄어쓰기 붙여서 쓰면 태그가 된다.

ex) &lt;script&gt; 요렇게 쓰자.




<!--2021.11.19-->
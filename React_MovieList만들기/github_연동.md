
# 1. create react app

## 2. github 연동
이제 github랑 연동해보자.

github 연동이 되는지는 VSC 터미널에 다음과 같이 입력해보면 된다.

> git init
 

깃허브 들어가서 레퍼지토리 생성한다.

프로젝트 이름은 헷갈리지 않게 동일한 이름을 넣는 것을 추천.

생성 후에 깃허브 URL을 복사한다.

VSC 터미널로 와서 연결해주자.(리액트 실행 창 말고 터미널을 분할해서 실행해주자.)

> git remote add origin 새 레퍼지토리 주소

 이제 저장한 것들을 전부 넣고 commit 해준다.

 > git add .
 
 > git Commit -m "코멘트"


뭔가 뜬다. 뭐 이름 설정을 자기 마음대로 한다는 듯. 패스한다.
<pre>
이름과 전자메일 주소를 사용자 이름과 호스트 이름을 이용해서 자동으로 설정했습니다. 이 정보가 맞는지 확인하십시오. 

...

git config --global --edit

git commit --amend --reset-aithor
</pre>

git에 push해준다.
 > git push origin master


깃허브 접속해서 확인해보자.

<!-- 2021.09.12-->

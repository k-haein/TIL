# Git 공부



22-01-14)

업무 PC에 갑자기 push가 안되기 시작함.

삭제 후 진행해도 계속해서 아래 오류 발생.


```
fatal: The current branch master has no upstream branch.To push the current branch and set the remote as upstream, use
```

```
git-push-setupstream-origin-master
```

정확하게 원격 저장소 이름을 언급해주지 않았다고 한다.

기본적으로 원격 저장소 이름은 origin이다.


따라서 폴더를 옮겨서 테스트 중.

문제가 된 이유는, 내가 업무 PC에 새롭게 master로 브랜치를 만들어서 이쪽으로 push를 했더니 꼬여버린 것.

폴더를 아예 옮겨서 다시 프로젝트를 시행했다.

```
git init
git branch -m main
git remote add origin https://github.com/k-haein/TIL.git
git config --global init.defaultBranch main // 로컬 저장소의 default branch를 main으로 바꿔줌.
git add .
git commit -m "first commit"
git push -u origin main
```

휴...잘 저장된다.


<hr>

## git 기본 용어 공부하기

TIL에 메모하면서 처음으로 Git을 써봤다.

형상관리 한다는 건 아는데 구체적으로 어떤식으로 동작하는지보다는 그냥 명령어에만 집중했었다.

잘 정리된 블로그가 있길래 가져와봤다. 집가서 공부해야지.

https://chaeyoung2.tistory.com/14?category=405630


```
git remote -v
```

다음 명령어로 현재 원격 저장소 이름을 찾아볼 수 있다.

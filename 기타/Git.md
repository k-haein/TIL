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

영역은 크게 3가지가 있다. 

작업영역 / 준비영역 / 레퍼지토리

작업영역은 지금 이 컴퓨터이다 지금 작업하는 이 PC가 작업영역이고,

준비영역은 내가 레퍼지토리에 올리기 전 저장하는 영역이다.

즉, 임시저장 같은 곳.

레퍼지토리는 진짜 포스팅을 한 뒤, 즉 깃에 올라가는 저장소이다.

그러기 떄문에 레퍼지토리에 올려줘야 다른사람과 공유가 가능하다.

branch는 여러버전을 나눠서 사용하기 위해 가지치기를 하는 것이다.

다른사람과 한 깃에 작업할 떄 내가 충돌하지 않도록 나뭇가지를 형성해서 나중에 합쳐주는 것.

그러면 충돌을 줄일 수 있다.

```
git remote -v
```

다음 명령어로 현재 원격 저장소 이름을 찾아볼 수 있다.

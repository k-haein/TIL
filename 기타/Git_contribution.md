
# GitHub에서 Commit 하고 나서도 contribution 그래프(잔디)가 안깔리는 이유


### Github contribution 조건

```
contribution 그래프는 code review, commit, pull request 등의 활동들을 통해 채울 수 있다.
```

contribution 그래프가 채워지기 위해서는 다음의 세가지 조건이 모두 충족되어야 한다.

- 커밋할때 사용한 이메일 주소(local repository의 user.email)가 github계정의 이메일 주소와 같아야 합니다.
- fork를 한 commit은 적용되지 않고 독립적인 repository에서 이루어진 commit이여야 합니다.
    +  이 때 fork를 실행한 commit이 그래프에 나타나게 하려면 fork한 repo의 parent repo에 merge될 수 있도록 open pull-request해야합니다.

- 커밋은 다음으로 만들어져야 한다.
    + repository의 default branch (보통은 master)
    + gh-pages branch (github page branch)

추가적으로 다음중에서 최소한 한개 이상은 조건이 맞아야 한다.

- repository의 협업자(collaborator)이거나 해당 repository를 가지고 있는 organization의 멤버면 됩니다.
- repository에 star를 주어야 합니다.
- repository의 pull request나 issue를 열어봐야 합니다.
- repository를 이미 fork한 상태여야 합니다.

<br>
<br>
내가 지키지 못했던 부분은 이메일 주소이다.

> git config user.email

메일 주소를 확인했더니 GitHub 계정이 아닌 VSCode 를 이용해 프로젝트를 진행했던 다른 계정으로 등록되어 있었던 것!


> git config --global user.email 메일주소

메일주소를 변경해주니 잘 들어갔다.
다시 조금씩 잔디를 채워보도록 하자.

<!-- 2021.09.01-->
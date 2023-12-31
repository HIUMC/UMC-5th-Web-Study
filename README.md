## 📝 깃 가이드 


### 1. 📤 프로젝트 열기
* vs code를 켜고 리액트 프로젝트를 생성하는 폴더에서 아래 명령을 진행합니다.

* ```git clone https://github.com/HIUMC/UMC-5th-Web-Study.git```  //저장소 내 컴퓨터 <-> 원격 연결
* ```git pull origin main```
* 자신의 브랜치를 만들어주고 자신의 branch로 이동 해주세요 //브랜치 개념 모른다면 구글링. 자신만의 공간을 만든다고 생각하시면 됩니다.
       브랜치를 만들고 한번에 이동하는 명령어 ```git checkout -b [본인의 github 아이디]```  
* 작업은 해당 **본인 branch에서만** 진행해주세요 **(~~❌main branch❌~~)**
    * ```git branch``` : 현재 branch 확인
* ```git init``` // 저장소 생성

### 🏡 작업공간 생성
* UMC-5th-Web-Study (프로젝트 루트 디렉토리)
    * 본인 github 아이디명의 디렉토리 (본인 github 아이디로 설정해주세요!)
        * 해당 주차 혹은 워크북명 (ex. week1, platform)
          
본인 github 아이디명의 디렉토리부터 만들고 시작하시면 됩니다! 😊 


### 2. 💾 중간 중간 add 와 commit 하기

* 파트 별로 작업을 끝냈거나 더 작은 단위로 작업을 끝낼 때 마다 add 와 commit을 해 주는 게 좋아요

* 자신의 이름으로 폴더를 만들고 그곳에 자신의 주차별 미션을 올려주세요. 그 다음
* ```git add .``` // git에 추가

* ❗commit convention ❗️
    * **Feat**: 새로운 기능 추가
    * **Fix**: 버그 수정
    * **Docs**: 문서 수정
    * **Style**: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
    * **Refactor**: 코드 리펙토링
    * **Test**: 테스트 코드, 리펙토링 테스트 코드 추가
    * **Chore**: 빌드 업무 수정, 패키지 매니저 수정

* 예시: ```git commit -m "[Feat(본인 이름(닉네임)): OO 기능 추가]"```


### ✍🏻 README.md 파일 작성하기


* 해당 주차 책을 공부하면서 알게 된 부분, 중요하다고 생각한 부분이 있다면 정리해 주세요!
    * 개념 정립도, 요약도 모두 좋습니다! 😊
* 해당 주차 강의를 들으면서 새롭게 알게 된 사실이나 추가적으로 더 공부한 부분이 있다면 정리해 주세요!
  * 요약도, 복습도 모두 좋습니다! 😊😊


* .md 파일은 mark down 언어로 작성된 파일을 뜻해요
    * [참고] https://gist.github.com/ihoneymon/652be052a0727ad59601#24-코드


### 3. 🙌🏻 Github 레포지토리에 push하기

* 해당 주차 과제를 모두 마쳤다면, 프로젝트 변경 사항을 remote repository(github repository)에 push 합니다
    * ```git push origin [본인 github 아이디 브랜치 명]``` : git에 등록되어 있는 origin(github repository)에 있는 자신의 branch로 프로젝트의 변경 사항을 반영합니다
* push를 완료했다면 스터디 repository에서 pull request를 진행합니다
    * 링크: https://github.com/HIUMC/UMC-5th-Web-Study/pulls
* PR(Pull Request)시 메세지 제목은 다음과 같이 ```[이름/닉네임] 1주차 정리내용 제출.``` 라고 적은 후 ```create pull request``` 버튼을 눌러주세요
* PR : ```base: [master]``` <- ```compare: [본인 github 아이디]```


### ⏰ 과제 제출 마감 기한 
**다음주 스터디 시작 전까지!**

* github 들어가서 pull request 에서 merge 까지 완료하면 끝~!~!

* 하다가 모르는거 있으면 파트장 윤강현 또는 김형석 에게 카톡으로 물어봐주세요~!

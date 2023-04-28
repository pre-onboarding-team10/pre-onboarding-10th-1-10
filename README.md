# 원티드 프리온보딩 인턴십 1주차 과제

원티드 프리온보딩 프론트엔드 인턴십 선발 과제의 Best Pratice 선정하는 과제 입니다.

### [배포 링크](https://fanciful-kitsune-b8e4cd.netlify.app/)

# Getting Started

#### Install

```
npm install
```

or

```
npm i
```

#### Build

```
npm run build
```

#### Start

```
npm start
```

#### 과제 목적

- 동료학습, 팀으로 일하는 법을 익히기
- 과제를 대하는 태도를 연습하기
- Best Practice 만들어 제출하기

#### 과제 진행 방법

과제 구현 가능 시간을 3일로 나누고 각 하루씩 Assignment 1~4, 5~7, 8~10에 대한 Best Practice를 토론을 통해 선정했습니다. Assignment를 분류한 것에 대해 다음과 같이 구분하였습니다.

1. 회원가입 및 로그인 기능 구현
2. 투두 리스트 기능 구현 - 1
3. 투두 리스트 기능 구현 - 2

토론과 투표를 통해 하나의 항목씩 Best Practice를 선정했고 정해진 Best Practice 대로 코드를 작성하여 PR, 코드 리뷰를 통해 통합 작업을 진행했습니다.

<br/>

<br/>

# Team History

- 23.4.26 아이스 브레이킹 및 assignment 1 ~ 4에 대한 토론 및 Best Practice 선정
- 23.4.27 assignment 5 ~ 7에 대한 Best Practice 선정 및 assignment 1 ~ 4에 대한 코드 작성
- 23.4.28 assignment 8 ~ 10에 대한 Best Practice 선정 및 코드 작성 및 PR

<br/>

# Best Practice 선정이유
 1. 회원가입 로그인
    - 커스텀 훅과 유틸함수 사용으로 관심사 분리하여 작성한 로직으로 유지 보수성, 가독성을 높인 측면에서 선정하였습니다.
 2. 투두 리스트 기능 구현
    - 훅 패턴 사용으로 비지니스 로직과 UI 컴포넌트 분리하여 기능별 책임 분리를 시도했다는 점에서 선정하였습니다.
 3. 투두 리스트 기능 구현 - 2
    - 클래스 문법을 활용한 싱글톤 패턴으로 CRUD 동작, request 동작 추상화하여 코드 중복을 방지하고 재사용성을 향상하였고, 실제로 사용되는 메서드만 사용자에게 노출되기 때문에 보안 측면에서 안정성 높임

<br/>

# Tech Stack

`React`, `Axios`, `React-router-dom`

- 협업 도구: `Discord`, `Notion`, `Github`

<br/>

# Directory - 수정 필요

```bash
📦src
 ┣ 📂apis
 ┃ ┗ 📜apiClient.js
 ┣ 📂components
 ┃ ┣ 📜AuthGuard.js
 ┃ ┣ 📜AuthInput.js
 ┃ ┣ 📜TodoAddForm.js
 ┃ ┣ 📜TodoItem.js
 ┃ ┗ 📜TodoList.js
 ┣ 📂hooks
 ┃ ┣ 📜useAuth.js
 ┃ ┣ 📜useInput.js
 ┃ ┗ 📜useTodos.js
 ┣ 📂pages
 ┃ ┣ 📜Signin.js
 ┃ ┣ 📜Signup.js
 ┃ ┗ 📜Todo.js
 ┣ 📂utils
 ┃ ┗ 📜validation.js
 ┣ 📜App.js
 ┗ 📜index.js
```

# Team Members

<table border>
  <tbody>
    <tr>
       <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/101001956?v=4"  alt="정민상님"/><br />
        <br/>
        <a href="https://github.com/jeongminsang">
          <img src="https://img.shields.io/badge/팀장 : 정민상-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src='https://avatars.githubusercontent.com/u/90402926?v=4'  alt="전종훈님"/><br />
        <br/>
        <a href="https://github.com/JunJongHun">
          <img src="https://img.shields.io/badge/전종훈-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/97023321?v=4"  alt="종아인님"/><br />
       <br/>
        <a href="https://github.com/04ian80">
          <img src="https://img.shields.io/badge/종아인-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/81045794?v=4"  alt="정윤혁님"/><br/>
                <br/>
        <a href="https://github.com/hyukzz">
          <img src="https://img.shields.io/badge/정윤혁-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
     </tr>
         <tr>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/77673029?v=4"  alt="최지미님"/><br />
       <br/>
        <a href="https://github.com/rabbit-22">
          <img src="https://img.shields.io/badge/최지미-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/83802168?v=4"  alt="문지웅님"/><br/>
       <br/>
        <a href="https://github.com/woongsnote">
          <img src="https://img.shields.io/badge/문지웅-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/106802169?v=4"  alt="양우진님"/><br/>
                <br/>
        <a href="https://github.com/yan9vvoojin">
          <img src="https://img.shields.io/badge/양우진-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/59640337?v=4"  alt="전애지님"/><br/>
       <br/>
        <a href="https://github.com/AEJIJEON">
          <img src="https://img.shields.io/badge/전애지-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/97525377?v=4"  alt="백인빈님"/><br/>
       <br/>
        <a href="https://github.com/blueline1984">
          <img src="https://img.shields.io/badge/백인빈-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
     </tr>
  </tbody>
</table>

<br/>

# 코코아톡

> 카카오톡 클론코딩 프로젝트.

![01_mobile_pc](https://user-images.githubusercontent.com/68595933/148503753-b8ce4ad7-90a5-4f7e-89b4-520a91cf2a76.jpg)

- [데모](https://shinyelee.github.io/kokoa-clone/)

모바일 환경에서 열어 보는 것을 권장합니다. 실제 카카오톡 화면과 최대한 유사하게 구현해 세로 화면에 최적화 되어 있습니다. 화면폭이 600px을 초과하면 콘텐츠를 표시하지 않습니다.

## 개발 목표

- HTML, CSS만으로 카카오톡 화면과 최대한 유사한 인터페이스 구현하기.
- Vanilla JavaScript 사용해 보기.

## 사용 기술

- HTML
- CSS
- JavaScript

## JavaScript 기능

- 시계(상단바) 및 날짜(채팅창)
  ![image](https://user-images.githubusercontent.com/68595933/151915109-69130133-01a3-4484-a1df-a18169055b8b.png)

```javascript
const date = new Date();
const hours = String(date.getHours()).padStart(2, "0");
const minutes = String(date.getMinutes()).padStart(2, "0");
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const weeks = new Array("일", "월", "화", "수", "목", "금", "토");
const week = weeks[date.getDay()];

function getClock() {
  clock.innerText = `${hours}:${minutes}`;
}

function getToday() {
  today.innerText = `${year}년 ${month + 1}월 ${day}일 ${week}요일`;
}

getClock();
setInterval(getClock, 500);

getToday();
setInterval(getToday, 500);
}
```

- 모달(친구-설정, 채팅-새로운 채팅)
  ![image](https://user-images.githubusercontent.com/68595933/151915234-63d735fe-9ba5-4928-9e6f-afc9204aff4b.png)

```javascript
const openModal = () => {
  modal.classList.remove("hidden");
};
const closeModal = () => {
  modal.classList.add("hidden");
};
overlay.addEventListener("click", closeModal);
closeIcon.addEventListener("click", closeModal);
openIcon.addEventListener("click", openModal);
```

- 지도(더보기-코로나19 잔여백신 예약·알림)
  ![image](https://user-images.githubusercontent.com/68595933/151915385-e3b77b28-76f3-4311-95fb-7ce9d331cf29.png)

```javascript
var placeOverlay = new kakao.maps.CustomOverlay({ zIndex: 1 }),
  contentNode = document.createElement("div"),
  markers = [],
  currCategory = "";

var mapContainer = document.getElementById("map"),
  mapOption = {
    center: new kakao.maps.LatLng(37.566826, 126.9786567),
    level: 2,
  };

var map = new kakao.maps.Map(mapContainer, mapOption);
// 이하 생략
```

## 문제점 및 개선사항

- 반응형이 아닌 정적 웹사이트
  - flexbox, grid, media query 공부하기
- PC화면과 모바일화면이 상이함
  - px 등 절대단위보다 fr 등 상대단위 사용하기
- 코드의 재사용성 및 가독성이 떨어짐
  - SCSS 공부하기
- api 조작 미숙
  - documentation 많이 읽어보기
- JavaScript를 거의 사용하지 않음
  - 다음 프로젝트는 JavaScript를 주로 사용해 만들어보기

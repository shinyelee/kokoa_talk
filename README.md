# 코코아톡 KokoaTalk

> 카카오톡을 클론코딩한 웹 프로젝트

![kokoa_talk_cover](https://user-images.githubusercontent.com/68595933/148503753-b8ce4ad7-90a5-4f7e-89b4-520a91cf2a76.jpg)

![kokoa_talk_1](https://user-images.githubusercontent.com/68595933/189161211-302a85b8-4241-4e3c-8efc-6328e6e09bfe.png)

![kokoa_talk_2](https://user-images.githubusercontent.com/68595933/189161267-b260a98e-36b7-4e17-9e05-6f23af66a30e.png)

## 시작

- 대부분 HTML, CSS로 구현한 프로젝트이기 때문에 웹개발보다는 웹퍼블리싱에 가깝습니다.
- 실제 카카오톡 화면과 최대한 유사한 비율로 구현했기 때문에 모바일 환경에 최적화 돼 있습니다. 화면 가로 너비가 600px을 초과하면 컨텐츠를 표시하지 않기 때문에, PC환경에서는 창의 가로 너비를 줄여 주시기 바랍니다.
- [데모 사이트 바로가기][데모]

---

## 개발

### 기간

- 21.12.07.~22.01.07.

### 목표

- HTML, CSS만으로 카카오톡 화면과 최대한 유사한 인터페이스 구현.
- Vanilla JavaScript 사용.

### 사용

- HTML/CSS - 대부분 순수 HTML, CSS로 구성.
- JavaScript - 기능에서 후술.
- GitHub - 버전 관리.

---

## 기능

### 현재 시각 및 날짜

![clock](https://user-images.githubusercontent.com/68595933/151915109-69130133-01a3-4484-a1df-a18169055b8b.png)

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

### 모달창

![modal](https://user-images.githubusercontent.com/68595933/151915234-63d735fe-9ba5-4928-9e6f-afc9204aff4b.png)

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

### 카카오맵 API

![map](https://user-images.githubusercontent.com/68595933/151915385-e3b77b28-76f3-4311-95fb-7ce9d331cf29.png)

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

---

## 피드백

### 문제점

1. PC 환경과 모바일 환경의 화면 구성이 상이함.
2. 정적 웹 사이트라 다양한 비율의 화면에 대응하기 어려움.
3. 코드의 재사용성 및 가독성 저하.
4. API 활용 미숙.

### 개선점

1. 절대단위가 아닌 상대단위 사용해 화면을 구성할 것.
2. 반응형으로 구현 위해 flexbox, grid, media query 등 공부 필요.
3. 코드 리팩토링 위해 SCSS 공부 필요.
4. 공식 문서 정독.

---

## 저작권

이 프로젝트는 MIT 라이센스에 따라 라이센스가 부여됩니다. 자세한 내용은 [LICENSE.md](LICENSE.md) 파일을 참조하십시오.

---

## 레퍼런스

- [참고 사이트 바로가기][참고]

<!-- 링크 -->

[데모]: https://shinyelee.github.io/kokoa_talk/
[참고]: https://nomadcoders.github.io/kokoa-clone-2020/

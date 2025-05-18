```cs
# React의 강점 / 결과

컴포넌트 기반 / 재사용성, 유지보수 용이

Virtual DOM / 빠른 성능

생태계 풍부 필/ 요한 기능 쉽게 추가

커뮤니티 크고 문서 많음 / 배우기 쉬움, 오류 해결 쉬움

모바일까지 확장 가능 / React Native
```

<!DOCTYPE html>
<html>
  <body>
    <span id="">Total Clicks : </span>
    <button id="btn">Click me</button>
  </body>
  <script>
    const button = document.querySelector("#btn");
    const span = document.querySelector("span");
    let countClick = 0;
    function handleBtnClick() {
      console.log("button clicked");
      countClick++;
      span.innerText = `Total Clicks : ${countClick}`;
    }
    button.addEventListener("click", handleBtnClick);
  </script>
</html>

<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script>
    const root = document.querySelector("#root");
    const span = React.createElement("span");
    ReactDOM.render(span, root);
  </script>
</html>

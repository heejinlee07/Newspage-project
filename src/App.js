import React from "react";
import { Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

function App() {
  return <Route path="/:category?" component={NewsPage} />;
}

export default App;

//'/:category?'의 의미: category의 값이 선택적이라는 의미. 있을수도 없을수도 있다.
// category의 url파라미터가 없으면 전체 카테고리를 선택한 것으로 간주

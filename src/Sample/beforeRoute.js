import React, { useState, useCallback } from "react";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

function beforeRoute() {
  const [category, setCategory] = useState("all");
  //카테고리 값을 업데이트하는 함수
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />;
    </>
  );
}

export default beforeRoute;

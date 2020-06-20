import React from "react";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";

const NewsPage = ({ match }) => {
  //카테고리가 선택되지 않았을 때 기본값은 all
  const category = match.params.category || "all";

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;

/**
 * url 파라미터를 통해 선택된 category 값을 사용한다면
 * Categories 컴포넌트에서 현재 선택된 카테고리 값을 알려줄
 * 필요 없고, onSelect 함수를 전달해줄 필요없음.
 */

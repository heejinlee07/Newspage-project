// api를 요청하고 뉴스 데이터가 들어 있는 배열을 컴포넌트 배열로 변환하여 렌더링
// props로 받아온 category에 따라 카테고리를 지정하여 api요청

//커스텀 훅 usePromise 사용 이렇게 하면 따로 상태 관리와 useEffect 설정 하지 않아도 됨.

import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import { api } from "../utils/NewsApi";
import { API_KEY } from "../utils/NewsKey";
import usePromise from "../lib/usePromise";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === "all" ? "" : `&category=${category}`;
    return api.get(`top-headlines?country=kr${query}&apiKey=${API_KEY}`);
  }, [category]);

  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }

  //아직 response 값이 설정되지 않았을 때
  if (!response) {
    return null;
  }

  if (error) {
    return <NewsListBlock>에러발생!!!!</NewsListBlock>;
  }

  //response 값이 유효할 때
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const categories = [
  { name: "all", text: "전체보기" },
  { name: "business", text: "비즈니스" },
  { name: "entertainment", text: "엔터테인먼트" },
  { name: "health", text: "건강" },
  { name: "science", text: "과학" },
  { name: "sports", text: "스포츠" },
  { name: "technology", text: "기술" },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  cursor: pointer;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
font-size: 1.125rem,
cursor:pointer;
white-space:pre;
text-decoration: none;
color: inherit;
padding-bottom: 0.25rem;

&:hover {
  color: #495057;
}

&.active {
  font-weight: 600;
  border-bottom: 2px solid #22b8cf;
  color:#22b8cf;
  &:hover{
    color:#3bc9db;
  }
}

& + & {
  margin-left:1rem;
}
`;

const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        // 카테고리 선택시 active 스타일 적용
        <Category
          key={c.name}
          activeClassName="active"
          exact={c.name === "all"}
          to={c.name === "all" ? "/" : `${c.name}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;

/**
 * NavLink로 만들어진 Category 컴포넌트의 to 값은 '카테고리이름'
 * 전체보기의 경우 '/all' 대신 '/'로 설정.
 * to값이 '/'를 가리키고 있을 때 exact=true
 * exact를 설정하지 않으면 다른 카테고리가 선택되었을 때도
 * 전체보기 링크에 스타일 적용됨.
 */

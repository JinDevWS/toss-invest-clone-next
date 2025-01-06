import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding: 16px 0;
  width: 314px;
  min-width: 314px;
  height: 100%;
  background-color: skyblue;
  display: grid;
  grid-template-rows: minmax(10px, 1fr);
  grid-template-columns: minmax(10px, 1fr);
  transform: translateX(370px) translateZ(0);
`;

export default function LayoutSidebarExpanded() {
  return <Wrapper>여기는 확장된 사이드바입니다.</Wrapper>;
}

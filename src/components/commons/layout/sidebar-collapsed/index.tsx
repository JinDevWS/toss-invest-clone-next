import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 56px;
  background-color: yellow;
  display: flex;
  order: 1;
`;

export default function LayoutSidebarCollapsed() {
  return <Wrapper>여기는 사이드바입니다.</Wrapper>;
}

import styled from "@emotion/styled";

const Wrapper = styled.div`
  background-color: yellow;
  display: flex;
  flex-direction: column;
  justify-content: normal;
  align-items: center;
  gap: 0px;
  visibility: visible;
  position: absolute;
  top: 0;
  right: 0;
  padding: 6px 0 24px;
  width: 56px;
  height: inherit;
  overflow: auto;
  z-index: 1;
`;

export default function LayoutSidebarCollapsed() {
  return <Wrapper>여기는 사이드바입니다.</Wrapper>;
}

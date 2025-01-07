import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: pink;
  position: sticky;
  top: 0;
  z-index: 10001;
`;
export default function LayoutHeader() {
  return <HeaderWrapper>여기는 헤더입니다.</HeaderWrapper>;
}

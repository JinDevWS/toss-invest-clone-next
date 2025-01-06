import styled from "@emotion/styled";

export const LayoutWrapper = styled.div`
  display: flex;
  position: relative;
  isolation: isolate;
  z-index: 0;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  min-width: 0;
  min-height: 100vh;
  align-items: center;
  height: 5000px;
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  isolation: isolate;
`;

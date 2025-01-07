import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useRecoilValue } from "recoil";
import { sidebarClickBtnState } from "@/src/commons/atom/sidebarClickBtnState.js";

const sidebarCollapse = keyframes`
0%{
  transform: none;
}
1%{
  transform: translateX(1px);
}
100%{
  transform: translateX(370px);
}
`;

const sidebarExpand = keyframes`
0%{
  transform: translateX(370px);
}
99%{
  transform: translateX(1px);
}
100%{
  transform: none;
}
`;

const Wrapper = styled.div`
  padding: 16px 0;
  width: 314px;
  min-width: 314px;
  height: 100%;
  background-color: skyblue;
  display: grid;
  grid-template-rows: minmax(10px, 1fr);
  grid-template-columns: minmax(10px, 1fr);
  animation: ${(props: string | boolean): unknown =>
      props.clickBtnState ? sidebarExpand : sidebarCollapse}
    0.1s linear;
`;

export default function LayoutSidebarExpanded(): React.ReactElement {
  const clickBtnState = useRecoilValue(sidebarClickBtnState);

  return (
    <Wrapper clickBtnState={clickBtnState}>
      여기는 확장된 사이드바입니다.
    </Wrapper>
  );
}

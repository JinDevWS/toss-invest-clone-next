import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useRecoilValue } from "recoil";
import { sidebarClickBtnState } from "@/src/commons/atom/sidebarClickBtnState.tsx";
import SidebarExpandedMyInvest from "../sidebar-expanded/myinvest";

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
  display: grid;
  grid-template-rows: minmax(10px, 1fr);
  grid-template-columns: minmax(10px, 1fr);
  animation: ${(props: string | boolean): unknown =>
      props.clickBtnState ? sidebarExpand : sidebarCollapse}
    0.1s linear;
  background-color: #f6f7f9;
  border-left: 1px solid #dde1e5;
`;

export default function LayoutSidebarExpanded(): React.ReactElement {
  const clickBtnState = useRecoilValue(sidebarClickBtnState);

  return (
    <Wrapper clickBtnState={clickBtnState}>
      {clickBtnState === "myInvest" && <SidebarExpandedMyInvest />}
    </Wrapper>
  );
}

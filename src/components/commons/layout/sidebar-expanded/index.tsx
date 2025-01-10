import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { keyframes } from "@emotion/react";
import { useRecoilValue } from "recoil";
import { sidebarClickBtnState } from "@/src/commons/atom/sidebarClickBtnState.tsx";
import SidebarExpandedMyInvest from "../sidebar-expanded/myinvest";
import SidebarExpandedInterest from "../sidebar-expanded/interest";
import SidebarExpandedRecent from "../sidebar-expanded/recent";
import SidebarExpandedRealtime from "../sidebar-expanded/realtime";

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

  const [isDollar, setIsDollar] = useState(false);
  const [isNow, setIsNow] = useState(false);
  const [selected, setSelected] = useState("ganada");
  const [selectBtnText, setSelectBtnText] = useState("가나다 순");
  const [disp, setDisp] = useState(false);

  const dollarBtnHandleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    const currentTarget = e.currentTarget;
    setIsDollar((): boolean => {
      return currentTarget.id === "dollar" ? true : false;
    });
  };

  const nowBtnHandleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const currentTarget = e.currentTarget;
    setIsNow((): boolean => {
      return currentTarget.id === "now" ? true : false;
    });
  };

  const selectBtnHandleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    e.preventDefault();
    e.stopPropagation();
    console.log(!disp);
    setDisp(!disp);
  };

  const optionHandleClick = (e: React.MouseEvent<HTMLSpanElement>): void => {
    e.preventDefault();
    const currentTarget = e.currentTarget;
    setSelected((): string => {
      return currentTarget.id ? currentTarget.id : "ganada";
    });
    setSelectBtnText(currentTarget.innerHTML);
  };

  // 렌더링 이후에 호출되도록 함
  useEffect((): void => {
    window.onclick = function (e: React.MouseEvent<HTMLPointerEvent>): void {
      console.log(`window.onclick=${e}`);
      if (
        e.currentTarget.id !== "selectMenu" &&
        e.currentTarget.id !== "selectBtn"
      ) {
        setDisp(false);
      }
    };
  }, []);

  return (
    <Wrapper clickBtnState={clickBtnState}>
      {clickBtnState === "myInvest" && (
        <SidebarExpandedMyInvest
          isDollar={isDollar}
          isNow={isNow}
          disp={disp}
          selected={selected}
          selectBtnText={selectBtnText}
          dollarBtnHandleClick={dollarBtnHandleClick}
          nowBtnHandleClick={nowBtnHandleClick}
          selectBtnHandleClick={selectBtnHandleClick}
          optionHandleClick={optionHandleClick}
        />
      )}
      {clickBtnState === "interest" && (
        <SidebarExpandedInterest
          isDollar={isDollar}
          dollarBtnHandleClick={dollarBtnHandleClick}
        />
      )}
      {clickBtnState === "recent" && (
        <SidebarExpandedRecent
          isDollar={isDollar}
          dollarBtnHandleClick={dollarBtnHandleClick}
        />
      )}
      {clickBtnState === "realtime" && (
        <SidebarExpandedRealtime
          isDollar={isDollar}
          dollarBtnHandleClick={dollarBtnHandleClick}
        />
      )}
    </Wrapper>
  );
}

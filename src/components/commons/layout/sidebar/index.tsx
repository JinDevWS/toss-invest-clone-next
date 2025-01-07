import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import LayoutSidebarExpanded from "../sidebar-expanded";
import LayoutSidebarCollapsed from "../sidebar-collapsed";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { sidebarClickBtnState } from "@/src/commons/atom/sidebarClickBtnState.js";

const sidebarCollapse = keyframes`
0%{
  width: 370px;
}
100%{
  width: 56px;
}
`;

const sidebarExpand = keyframes`
0%{
  width: 56px;
}
100%{
  width: 370px;
}
`;

const Wrapper = styled.div`
  width: ${(props: string | boolean): string =>
    props.clickBtnState ? "370px" : "56px"};
  height: 100dvh;
  display: flex;
  position: sticky;
  top: 0;
  right: 0;
  z-index: 10001;
  overflow: clip;
  animation: ${(props: string | boolean): unknown =>
      props.clickBtnState ? sidebarExpand : sidebarCollapse}
    0.1s linear;
`;

export default function LayoutSidebar(): React.ReactElement {
  // 전역변수 사용(리코일 스테이트)
  const [clickBtnState, setClickBtnState] =
    useRecoilState(sidebarClickBtnState);
  const [active, setActive] = useState(false);

  // state를 사용하여 click 스타일링 구현
  // 1. 클릭 시 진하게 활성화
  // 2. 활성화된 버튼 한번 더 클릭 시 흐리게 비활성화
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    // currentTarget은 이벤트가 핸들링되는 때에만 접근 가능하다.
    // 비동기콜은 task queue에 들어가 있다가 스택에서 호출되는 것이기 때문에
    // event.currentTarget을 잃어버린다.
    // 그렇기 때문에 핸들링 함수 최상단에서 변수에 할당 후
    // 비동기 로직 내부에서 사용하는 것으로 e.currentTarget 을 참조하면 된다.
    const currentTarget = e.currentTarget;
    setClickBtnState((preClickBtn: string | boolean): string | boolean => {
      // 현재 클릭한 버튼이 이전 클릭한 버튼과 같다면 흐리게 비활성화
      return currentTarget.id == preClickBtn ? false : currentTarget.id;
    });
  };

  const handleMouseOver = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    // currentTarget은 이벤트가 핸들링되는 때에만 접근 가능하다.
    const currentTarget = e.currentTarget;
    setActive(currentTarget.id);
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setActive(false);
  };

  return (
    <>
      <Wrapper clickBtnState={clickBtnState}>
        <LayoutSidebarExpanded />
        <LayoutSidebarCollapsed
          active={active}
          handleClick={handleClick}
          handleMouseOver={handleMouseOver}
          handleMouseOut={handleMouseOut}
        />
      </Wrapper>
    </>
  );
}

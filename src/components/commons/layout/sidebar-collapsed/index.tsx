import styled from "@emotion/styled";
import {
  BankFilled,
  HeartFilled,
  CheckSquareFilled,
  FireFilled,
} from "@ant-design/icons";
import { useState } from "react";

const Wrapper = styled.div`
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
  background-color: #f6f7f9;
  padding: 12px 0;
`;

const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const IconAbutton = styled.a`
  margin-bottom: ${(props: boolean): string =>
    props.isHrMeet ? "15px" : "0px"};
  text-align: center;
  color: ${(props: string | boolean): string =>
    props.active || props.clickBtn ? "#2c3646" : "#acb2bd"};
`;

const Icon = styled.div`
  width: 32px;
  border-radius: 9px;
  padding: 5px;
  font-size: 20px;
  margin-bottom: 4px;
  background-color: ${(props: string | boolean): string =>
    props.active || props.clickBtn ? "#DDE1E5" : "transparent"};
`;

const IconText = styled.div`
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`;

const Hr = styled.hr`
  width: 30px;
  height: 1px;
  border: 0;
  background-color: #dde1e5;
`;

interface IbtnData {
  id: string;
  href: string;
  icon: HtmlElement;
  text: string;
}

export default function LayoutSidebarCollapsed() {
  const [clickBtn, setClickBtn] = useState(false);
  const [active, setActive] = useState(false);

  const btnData = [
    { id: "myInvest", href: "myInvest", icon: <BankFilled />, text: "내 투자" },
    {
      id: "interest",
      href: "interest",
      icon: <HeartFilled />,
      text: "관심",
    },
    {
      id: "recent",
      href: "recent",
      icon: <CheckSquareFilled />,
      text: "최근 본",
    },
    { id: "realtime", href: "realtime", icon: <FireFilled />, text: "실시간" },
  ];

  // state를 사용하여 click 스타일링 구현
  // 1. 클릭 시 진하게 활성화
  // 2. 활성화된 버튼 한번 더 클릭 시 흐리게 비활성화
  const handleClick = (e: HtmlElement): void => {
    e.preventDefault();
    e.stopPropagation();
    // currentTarget은 이벤트가 핸들링되는 때에만 접근 가능하다.
    // 비동기콜은 task queue에 들어가 있다가 스택에서 호출되는 것이기 때문에
    // event.currentTarget을 잃어버린다.
    // 그렇기 때문에 핸들링 함수 최상단에서 변수에 할당 후
    // 비동기 로직 내부에서 사용하는 것으로 e.currentTarget 을 참조하면 된다.
    const currentTarget = e.currentTarget;
    setClickBtn((preClickBtn: string | boolean): string | boolean => {
      // 현재 클릭한 버튼이 이전 클릭한 버튼과 같다면 흐리게 비활성화
      return currentTarget.id == preClickBtn ? false : currentTarget.id;
    });
  };

  const handleMouseOver = (e: HtmlElement): void => {
    e.preventDefault();
    e.stopPropagation();
    // currentTarget은 이벤트가 핸들링되는 때에만 접근 가능하다.
    const currentTarget = e.currentTarget;
    setActive((): string | boolean => {
      return currentTarget.id;
    });
  };

  const handleMouseOut = (e: HtmlElement): void => {
    e.preventDefault();
    e.stopPropagation();
    setActive(false);
  };

  return (
    <Wrapper>
      <SidebarNav>
        {/* index가 2이면 Hr 을 그려줘야 함 */}
        {/* state를 사용하여 hover 스타일링 구현 */}
        {/* 
          state를 사용하여 click 스타일링 구현 
          1. 클릭 시 진하게 활성화
          2. 활성화된 버튼 한번 더 클릭 시 흐리게 비활성화
        */}
        {btnData.map((el: IbtnData, index: number): HtmlElement => {
          return (
            <IconBox key={btnData[index].id}>
              <IconAbutton
                href={`#${btnData[index].href}`}
                id={btnData[index].id}
                isHrMeet={index === 2 ? true : false}
                active={
                  active === btnData[index].id ? btnData[index].id : false
                }
                clickBtn={
                  clickBtn === btnData[index].id ? btnData[index].id : false
                }
                onClick={handleClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <Icon
                  active={active === btnData[index].id}
                  clickBtn={clickBtn === btnData[index].id}
                >
                  {btnData[index].icon}
                </Icon>
                <IconText>{btnData[index].text}</IconText>
              </IconAbutton>
              <span>{index == 2 ? <Hr /> : ""}</span>
            </IconBox>
          );
        })}
      </SidebarNav>
    </Wrapper>
  );
}

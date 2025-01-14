import styled from "@emotion/styled";
import {
  BankFilled,
  HeartFilled,
  CheckSquareFilled,
  FireFilled,
} from "@ant-design/icons";
import { useRecoilValue } from "recoil";
import { sidebarClickBtnState } from "@/src/commons/atom/sidebarClickBtnState";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
  visibility: visible;
  position: absolute;
  top: 0;
  right: 0;
  width: 56px;
  height: 100%;
  overflow: auto;
  z-index: 1;
  background-color: #f6f7f9;
  padding: 12px 0;
  border-left: 1px solid #dde1e5;
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

const IconButton = styled.a<{
  isHrMeet: boolean;
  active: string | boolean;
  clickBtn: string | boolean;
}>`
  margin-bottom: ${(props): string => (props.isHrMeet ? "15px" : "0px")};
  text-align: center;
  color: ${(props): string =>
    props.active || props.clickBtn ? "#2c3646" : "#acb2bd"};
`;

const Icon = styled.div<{
  active: string | boolean;
  clickBtn: string | boolean;
}>`
  width: 32px;
  border-radius: 9px;
  padding: 5px;
  font-size: 20px;
  margin-bottom: 4px;
  background-color: ${(props): string =>
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

interface IBtnData {
  id: string;
  href: string;
  icon: JSX.Element;
  text: string;
}

interface ILayoutSidebarCollapsedProps {
  active: string | boolean;
  handleClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  handleMouseOver: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  handleMouseOut: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function LayoutSidebarCollapsed(
  props: ILayoutSidebarCollapsedProps,
): React.ReactElement {
  const btnData: IBtnData[] = [
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

  const clickBtnState = useRecoilValue(sidebarClickBtnState);

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
        {btnData.map((el, index): React.ReactElement => {
          return (
            <IconBox key={el.id}>
              <IconButton
                href={`#${el.href}`}
                id={el.id}
                isHrMeet={index === 2}
                active={props.active === el.id}
                clickBtn={clickBtnState === el.id}
                onClick={props.handleClick}
                onMouseOver={props.handleMouseOver}
                onMouseOut={props.handleMouseOut}
              >
                <Icon
                  active={props.active === el.id}
                  clickBtn={clickBtnState === el.id}
                >
                  {el.icon}
                </Icon>
                <IconText>{el.text}</IconText>
              </IconButton>
              {index === 2 && <Hr />}
            </IconBox>
          );
        })}
      </SidebarNav>
    </Wrapper>
  );
}

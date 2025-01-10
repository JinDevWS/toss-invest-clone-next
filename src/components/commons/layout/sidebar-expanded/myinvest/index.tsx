import { DownOutlined, CheckOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import SidebarH2DollarSwitch from "../commons/SidebarH2DollarSwitch.tsx";
import SidebarHr from "../commons/SidebarHr.tsx";
import SidebarNoItem from "../commons/SidebarNoItem.tsx";
import {
  Section,
  Header,
  FilterWrapper,
} from "@/styles/sidebar/SidebarExpandedSection.js";

const MoneySwitch = styled.div`
  width: 100px;
  height: 26px;
  font-size: 14px;
  font-weight: bold;
  border: 0;
  border-radius: 5px;
  background-color: #e9ecef;
  display: flex;
  align-items: center;
  position: relative;
`;

const MoneyBtn = styled.a`
  width: 50px;
  height: 100%;
  border: 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const MoneyToggleBtn = styled.span`
  isolation: isolate;
  width: 54%;
  height: 100%;
  border-radius: 5px;
  transform: scale(0.85);
  position: absolute;
  background-color: white;
  box-shadow: -1px 1px 3px #ccd1d5;
  left: ${(props: boolean): string => (props.isNow ? "-2%" : "48%")};
  transition: left 100ms linear;
  z-index: 0;
`;

const SelectWrapper = styled.div`
  width: 150px;
  height: 26px;
  display: flex;
  align-items: center;
`;

const StyledSelectButton = styled.button`
  width: auto;
  height: 100%;
  font-size: 14px;
  color: #333d4b;
  border: 0;
  position: relative;
  background-color: transparent;
  text-align: left;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const SelectBtnIcon = styled.span`
  font-size: 10px;
  margin: 0px 5px;
`;

const StyledSelectMenu = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  position: absolute;
  top: 100px;
  padding: 7px;
  background: white;
  border-radius: 10px;
`;

const SelectOption = styled.span`
  border-radius: 10px;
  padding: 10px;
  &:hover {
    background-color: #e9ecef;
  }
  &.clicked {
    color: #3182f6;
  }
`;

const SelectOptionIcon = styled(SelectOption)`
  font-size: 10px;
  padding: 5px 0 5px 5px;
`;

export default function SidebarExpandedMyInvest(props): React.ReactElement {
  const h2Text = "내 투자";
  const noItemText = "보유 종목이 없어요";

  const optionList = [
    { value: "ganada", label: "가나다 순" },
    { value: "totalAsc", label: "총 수익률 낮은 순" },
    { value: "totalDesc", label: "총 수익률 높은 순" },
    { value: "todayAsc", label: "일간 수익률 낮은 순" },
    { value: "todayDesc", label: "일간 수익률 높은 순" },
    { value: "evaluateAsc", label: "평가금액 낮은 순" },
    { value: "evaluateDesc", label: "평가금액 높은 순" },
    { value: "custom", label: "직접 설정하기" },
  ];

  return (
    <Section>
      <Header>
        <SidebarH2DollarSwitch
          h2Text={h2Text}
          isDollar={props.isDollar}
          dollarBtnHandleClick={props.dollarBtnHandleClick}
        />
        <SidebarHr />
        <FilterWrapper>
          <SelectWrapper>
            <StyledSelectButton
              onClick={props.selectBtnHandleClick}
              id="selectBtn"
            >
              {props.selectBtnText}
              <SelectBtnIcon>
                <DownOutlined />
              </SelectBtnIcon>
            </StyledSelectButton>
            {props.disp && (
              <StyledSelectMenu id="selectMenu">
                {optionList.map(
                  (el: string, index: number): React.ReactElement => {
                    return (
                      <SelectOption
                        key={index}
                        id={el.value}
                        label={el.label}
                        onClick={props.optionHandleClick}
                      >
                        {el.label}
                        {props.selected === el.value && (
                          <SelectOptionIcon>
                            <CheckOutlined />
                          </SelectOptionIcon>
                        )}
                      </SelectOption>
                    );
                  },
                )}
              </StyledSelectMenu>
            )}
          </SelectWrapper>
          <MoneySwitch>
            <MoneyToggleBtn isNow={props.isNow}></MoneyToggleBtn>
            <MoneyBtn href="#" id="now" onClick={props.nowBtnHandleClick}>
              현재가
            </MoneyBtn>
            <MoneyBtn href="#" id="evaluate" onClick={props.nowBtnHandleClick}>
              평가금
            </MoneyBtn>
          </MoneySwitch>
        </FilterWrapper>
      </Header>
      <SidebarNoItem noItemText={noItemText} />
    </Section>
  );
}

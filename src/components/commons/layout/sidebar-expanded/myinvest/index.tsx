import styled from "@emotion/styled";
import SidebarH2DollarSwitch from "../commons/SidebarH2DollarSwitch";
import SidebarHr from "../commons/SidebarHr";
import SidebarNoItem from "../commons/SidebarNoItem";
import SidebarSelect from "../commons/SidebarSelect";
import {
  Section,
  Header,
  FilterWrapper,
} from "@/styles/sidebar/SidebarExpandedSection.js";
import { sidebarMyInvestOptionList } from "@/src/commons/stores/sidebarMyInvestOptionList";
import { ISidebarExpandedMyInvestProps } from "@/src/commons/types/types";

const MoneySwitch = styled.button`
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
  cursor: pointer;
`;

const MoneyBtn = styled.span`
  width: 50%;
  height: 100%;
  border: 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const MoneyToggleBtn = styled.span<{
  isNow: boolean;
}>`
  isolation: isolate;
  width: 54%;
  height: 100%;
  border-radius: 5px;
  transform: scale(0.85);
  position: absolute;
  background-color: white;
  box-shadow: -1px 1px 3px #ccd1d5;
  left: ${(props): string => (props.isNow ? "-2%" : "48%")};
  transition: left 100ms linear;
  z-index: 0;
`;

export default function SidebarExpandedMyInvest({
  isDollar,
  isNow,
  dollarBtnHandleClick,
  nowBtnHandleClick,
}: ISidebarExpandedMyInvestProps): React.ReactElement {
  const h2Text = "내 투자";
  const noItemText = "보유 종목이 없어요";
  const selectMyInvBtnId = "selectMyInvBtn";
  const selectMyInvMenuId = "selectMyInvMenu";
  const optionList = sidebarMyInvestOptionList;
  const selectedInitValue = "ganada";
  const selectBtnInitText = "가나다 순";

  return (
    <Section>
      <Header>
        <SidebarH2DollarSwitch
          h2Text={h2Text}
          isDollar={isDollar}
          dollarBtnHandleClick={dollarBtnHandleClick}
        />
        <SidebarHr />
        <FilterWrapper>
          <SidebarSelect
            selectBtnId={selectMyInvBtnId}
            selectMenuId={selectMyInvMenuId}
            optionList={optionList}
            selectedInitValue={selectedInitValue}
            selectBtnInitText={selectBtnInitText}
          />
          <MoneySwitch type="button">
            <MoneyToggleBtn isNow={isNow}></MoneyToggleBtn>
            <MoneyBtn id="now" onClick={nowBtnHandleClick}>
              현재가
            </MoneyBtn>
            <MoneyBtn id="evaluate" onClick={nowBtnHandleClick}>
              평가금
            </MoneyBtn>
          </MoneySwitch>
        </FilterWrapper>
      </Header>
      <SidebarNoItem noItemText={noItemText} />
    </Section>
  );
}

import styled from "@emotion/styled";
import SidebarH2DollarSwitch from "../commons/SidebarH2DollarSwitch.tsx";
import SidebarHr from "../commons/SidebarHr.tsx";
import { Section, Header } from "@/styles/sidebar/SidebarExpandedSection.js";
import { sidebarInterestListItems } from "@/src/commons/stores/sidebarInterestListItems.ts";
import { sidebarRealtimeKrListItems } from "@/src/commons/stores/sidebarRealtimeKrListItems.ts";
import SidebarGrid from "../commons/SidebarGrid.tsx";
import SidebarSelect from "../commons/SidebarSelect.tsx";
import { useState } from "react";
import { sidebarRealTimeFilterOptionList } from "@/src/commons/stores/sidebarRealTimeFilterOptionList.ts";
import { sidebarRealTimeFilterTimeOptionList } from "@/src/commons/stores/sidebarRealTimeFilterTimeOptionList.ts";
import Link from "next/link.js";

const SidebarDomesticFilterSwitch = styled.button`
  width: 150px;
  height: 30px;
  font-size: 14px;
  background-color: transparent;
  color: #040e1c;
  border: 0;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

const FilterToggleBtn = styled.span`
  isolation: isolate;
  width: 50px;
  height: 30px;
  border-radius: 30px;
  position: absolute;
  background-color: #e9ecef;
  left: ${(props) =>
    props.domesticOrForeign === "sidebarFilterAll"
      ? "0px"
      : props.domesticOrForeign === "sidebarFilterDomestic"
        ? "50px"
        : "100px"};
  transition: left 200ms linear;
  z-index: 0;
`;

const DomesticOrForeignBtn = styled.span`
  width: 50%;
  height: 100%;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  font-weight: ${(props) =>
    props.domesticOrForeign === props.id ? "bold" : "normal"};
`;

const SelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 0 5px 0;
`;

export default function SidebarExpandedRealtime(props): React.ReactElement {
  const h2Text = "실시간 차트";
  const [domesticOrForeign, setDomesticOrForeign] =
    useState("sidebarFilterAll");
  const itemList =
    domesticOrForeign === "sidebarFilterDomestic"
      ? sidebarRealtimeKrListItems
      : sidebarInterestListItems;
  const selectBtnId = "selectBtn";
  const selectMenuId = "selectMenu";
  const selectTimeBtnId = "selectTimeBtn";
  const selectTimeMenuId = "selectTimeMenu";
  const selectedInitValue = "tossMoney";
  const selectBtnInitText = "토스증권 거래대금";
  const selectedTimeInitValue = "realtime";
  const selectTimeBtnInitText = "실시간";

  const DomesticOrForeignBtnHandleClick = (e) => {
    e.preventDefault();
    const currentTarget = e.currentTarget;
    setDomesticOrForeign(currentTarget.id);
  };

  return (
    <Section>
      <Header>
        <SidebarH2DollarSwitch
          h2Text={h2Text}
          isDollar={props.isDollar}
          dollarBtnHandleClick={props.dollarBtnHandleClick}
        />
        <SidebarHr />
      </Header>
      <SidebarDomesticFilterSwitch type="button">
        <FilterToggleBtn
          domesticOrForeign={domesticOrForeign}
        ></FilterToggleBtn>
        <DomesticOrForeignBtn
          id="sidebarFilterAll"
          domesticOrForeign={domesticOrForeign}
          onClick={DomesticOrForeignBtnHandleClick}
        >
          전체
        </DomesticOrForeignBtn>
        <DomesticOrForeignBtn
          id="sidebarFilterDomestic"
          domesticOrForeign={domesticOrForeign}
          onClick={DomesticOrForeignBtnHandleClick}
        >
          국내
        </DomesticOrForeignBtn>
        <DomesticOrForeignBtn
          id="sidebarFilterForeign"
          domesticOrForeign={domesticOrForeign}
          onClick={DomesticOrForeignBtnHandleClick}
        >
          해외
        </DomesticOrForeignBtn>
      </SidebarDomesticFilterSwitch>
      <SelectBox>
        <SidebarSelect
          selectBtnId={selectBtnId}
          selectMenuId={selectMenuId}
          optionList={sidebarRealTimeFilterOptionList}
          selectedInitValue={selectedInitValue}
          selectBtnInitText={selectBtnInitText}
        />
        <SidebarSelect
          selectBtnId={selectTimeBtnId}
          selectMenuId={selectTimeMenuId}
          optionList={sidebarRealTimeFilterTimeOptionList}
          selectedInitValue={selectedTimeInitValue}
          selectBtnInitText={selectTimeBtnInitText}
        />
      </SelectBox>
      <SidebarGrid isDollar={props.isDollar} itemList={itemList} />
    </Section>
  );
}

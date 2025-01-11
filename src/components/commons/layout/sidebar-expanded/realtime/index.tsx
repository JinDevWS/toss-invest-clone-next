import styled from "@emotion/styled";
import SidebarH2DollarSwitch from "../commons/SidebarH2DollarSwitch.tsx";
import SidebarHr from "../commons/SidebarHr.tsx";
import { Section, Header } from "@/styles/sidebar/SidebarExpandedSection.js";
import { sidebarInterestListItems } from "@/src/commons/stores/sidebarInterestListItems.ts";
import SidebarGrid from "../commons/SidebarGrid.tsx";

export default function SidebarExpandedRealtime(props): React.ReactElement {
  const h2Text = "실시간 차트";
  const itemList = sidebarInterestListItems;

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
      <SidebarGrid itemList={itemList} />
    </Section>
  );
}

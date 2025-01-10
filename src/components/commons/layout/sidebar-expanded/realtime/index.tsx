import styled from "@emotion/styled";
import SidebarH2DollarSwitch from "../commons/SidebarH2DollarSwitch.tsx";
import SidebarHr from "../commons/SidebarHr.tsx";
import { Section, Header } from "@/styles/sidebar/SidebarExpandedSection.js";

export default function SidebarExpandedRealtime(props): React.ReactElement {
  const h2Text = "실시간 차트";

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
    </Section>
  );
}

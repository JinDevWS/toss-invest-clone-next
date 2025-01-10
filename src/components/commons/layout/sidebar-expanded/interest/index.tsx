import { HeartFilled } from "@ant-design/icons";
import styled from "@emotion/styled";
import SidebarH2DollarSwitch from "../commons/SidebarH2DollarSwitch.tsx";
import SidebarHr from "../commons/SidebarHr.tsx";
import { Section, Header } from "@/styles/sidebar/SidebarExpandedSection.js";

export default function SidebarExpandedMyInvest(props): React.ReactElement {
  const h2Text = "관심 종목";

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

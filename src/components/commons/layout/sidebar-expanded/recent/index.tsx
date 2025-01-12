import SidebarH2DollarSwitch from "../commons/SidebarH2DollarSwitch.tsx";
import SidebarHr from "../commons/SidebarHr.tsx";
import { Section, Header } from "@/styles/sidebar/SidebarExpandedSection.js";
import SidebarNoItem from "../commons/SidebarNoItem.tsx";

export default function SidebarExpandedMyRecent(props): React.ReactElement {
  const h2Text = "최근 본 종목";
  const noItemText = "최근 본 종목이 없어요";

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
      <SidebarNoItem noItemText={noItemText} />
    </Section>
  );
}

import SidebarH2DollarSwitch from "../commons/SidebarH2DollarSwitch";
import SidebarHr from "../commons/SidebarHr";
import { Section, Header } from "@/styles/sidebar/SidebarExpandedSection.js";
import SidebarNoItem from "../commons/SidebarNoItem";

interface ISidebarExpandedMyRecent {
  isDollar: boolean;
  dollarBtnHandleClick: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

export default function SidebarExpandedMyRecent({
  isDollar,
  dollarBtnHandleClick,
}: ISidebarExpandedMyRecent): React.ReactElement {
  const h2Text = "최근 본 종목";
  const noItemText = "최근 본 종목이 없어요";

  return (
    <Section>
      <Header>
        <SidebarH2DollarSwitch
          h2Text={h2Text}
          isDollar={isDollar}
          dollarBtnHandleClick={dollarBtnHandleClick}
        />
        <SidebarHr />
      </Header>
      <SidebarNoItem noItemText={noItemText} />
    </Section>
  );
}

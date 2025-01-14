import SidebarH2DollarSwitch from "../commons/SidebarH2DollarSwitch";
import SidebarHr from "../commons/SidebarHr";
import { Section, Header } from "@/styles/sidebar/SidebarExpandedSection.js";
import { sidebarInterestListItems } from "@/src/commons/stores/sidebarInterestListItems";
import SidebarGrid from "../commons/SidebarGrid";

interface ISidebarExpandedMyInvestProps {
  isDollar: boolean;
  dollarBtnHandleClick: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

export default function SidebarExpandedMyInvest({
  isDollar,
  dollarBtnHandleClick,
}: ISidebarExpandedMyInvestProps): React.ReactElement {
  const h2Text = "관심 종목";
  const itemList = sidebarInterestListItems;

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
      <SidebarGrid isDollar={isDollar} itemList={itemList} />
    </Section>
  );
}

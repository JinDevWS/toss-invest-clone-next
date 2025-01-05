import styled from "@emotion/styled";
import LayoutSidebarExpanded from "../sidebar-expanded";
import LayoutSidebarCollapsed from "../sidebar-collapsed";

const Wrapper = styled.div`
  width: 370px;
  height: 100%;
  display: flex;
  order: 100;
`;

export default function LayoutSidebar() {
  return (
    <>
      <Wrapper>
        <LayoutSidebarExpanded />
        <LayoutSidebarCollapsed />
      </Wrapper>
    </>
  );
}

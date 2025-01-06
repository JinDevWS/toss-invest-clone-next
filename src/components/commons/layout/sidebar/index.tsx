import styled from "@emotion/styled";
import LayoutSidebarExpanded from "../sidebar-expanded";
import LayoutSidebarCollapsed from "../sidebar-collapsed";

const Wrapper = styled.div`
  width: 56px;
  height: 100dvh;
  display: flex;
  position: sticky;
  top: 0;
  right: 0;
  z-index: 10001;
  overflow: clip;
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

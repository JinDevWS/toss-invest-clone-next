import LayoutHeader from "../layout/header";
import LayoutSidebar from "../layout/sidebar";
import LayoutFooter from "../layout/footer";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { ILayoutProps } from "@/src/commons/types/types";

const HIDDEN_HEADERS: string[] = [
  //   "/section13/13-01-library-icon",
  //   "/section13/13-02-library-star",
];

const LayoutWrapper = styled.div`
  display: flex;
  position: relative;
  isolation: isolate;
  z-index: 0;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  min-width: 0;
  align-items: center;
`;

const MainWrapper = styled.main`
  width: 100%;
  isolation: isolate;
`;

const ChildrenWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export default function Layout(props: ILayoutProps): React.ReactElement {
  const router = useRouter();
  console.log("================================");
  console.log(router.asPath);
  console.log("================================");

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  console.log(isHiddenHeader);

  return (
    <LayoutWrapper>
      <ContentsWrapper>
        {!isHiddenHeader && <LayoutHeader />}
        <MainWrapper>
          <ChildrenWrapper>{props.children}</ChildrenWrapper>
        </MainWrapper>
        <LayoutFooter />
      </ContentsWrapper>
      <LayoutSidebar />
    </LayoutWrapper>
  );
}

import LayoutHeader from "../layout/header";
import LayoutSidebar from "../layout/sidebar";
import LayoutFooter from "../layout/footer";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

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
  min-height: 100vh;
  align-items: center;
  height: 5000px;
`;

const MainWrapper = styled.main`
  width: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  isolation: isolate;
`;

interface ILayoutProps {
  children: React.ReactElement;
}

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
          <div>{props.children}</div>
        </MainWrapper>
        <LayoutFooter />
      </ContentsWrapper>
      <LayoutSidebar />
    </LayoutWrapper>
  );
}

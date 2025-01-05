import LayoutHeader from "../layout/header";
import LayoutSidebar from "../layout/sidebar";
import LayoutFooter from "../layout/footer";
import { useRouter } from "next/router";

const HIDDEN_HEADERS = [
  //   "/section13/13-01-library-icon",
  //   "/section13/13-02-library-star",
];

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
    <>
      <LayoutSidebar />
      {!isHiddenHeader && <LayoutHeader />}
      <div>{props.children}</div>
      <LayoutFooter />
    </>
  );
}

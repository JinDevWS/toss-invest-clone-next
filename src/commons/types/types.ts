import { DocumentData } from "firebase/firestore";
import { RefObject } from "react";

export interface IBondItem {
  title: string;
  krOrUs: string;
  price: number;
  changedPrice: number;
  changedRate: number;
}

export interface IImgNewsItem {
  img: string;
  title: string;
  hour: number;
  newspaper: string;
}

export interface INewsItem {
  title: string;
  hour: number;
  newspaper: string;
}

export interface IMaterialsItem {
  title: string;
  price: number;
  changedPrice: number;
  changedRate: number;
}

export interface ISidebarInterestListItems {
  id: string;
  img: string;
  krOrUs: string;
  title: string;
  priceWon: number;
  upOrDownPercent: number;
}

export interface ISidebarMyInvestOptionList {
  value: string;
  label: string;
}

export interface ISidebarRealTimeFilterOptionList {
  value: string;
  label: string;
}

export interface ISidebarRealTimeFilterTimeOptionList {
  value: string;
  label: string;
}

export interface ISidebarRealtimeKrListItems {
  id: string;
  img: string;
  krOrUs: string;
  title: string;
  priceWon: number;
  upOrDownPercent: number;
}

export interface IStockIndexItem {
  title: string;
  krOrUs: string;
  price: number;
  changedPrice: number;
  changedRate: number;
  graph: string;
}

export interface ILayoutProps {
  children: React.ReactElement;
}

export interface IBtnData {
  id: string;
  href: string;
  icon: JSX.Element;
  text: string;
}

export interface ILayoutSidebarCollapsedProps {
  active: string | boolean;
  handleClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  handleMouseOver: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  handleMouseOut: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export interface ISidebarH2DollarSwitchProps {
  h2Text: string;
  isDollar: boolean;
  dollarBtnHandleClick: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

export interface ISidebarNoItemProps {
  noItemText: string;
}

export interface ISidebarGridProps {
  itemList: ISidebarInterestListItems[] | ISidebarRealtimeKrListItems[];
  isDollar: boolean;
}

export interface ISidebarSelectProps {
  selectedInitValue: string;
  selectBtnInitText: string;
  selectBtnId: string;
  selectMenuId: string;
  optionList:
    | ISidebarMyInvestOptionList[]
    | (
        | ISidebarRealTimeFilterOptionList[]
        | ISidebarRealTimeFilterTimeOptionList[]
      );
}

export interface ISidebarExpandedMyInvestProps {
  isDollar: boolean;
  dollarBtnHandleClick: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

export interface ISidebarExpandedMyInvestProps {
  isDollar: boolean;
  isNow: boolean;
  dollarBtnHandleClick: (e: React.MouseEvent<HTMLSpanElement>) => void;
  nowBtnHandleClick: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

export interface ISidebarExpandedRealtimeProps {
  isDollar: boolean;
  dollarBtnHandleClick: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

export interface ISidebarExpandedMyRecent {
  isDollar: boolean;
  dollarBtnHandleClick: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

export interface IPaginationProps {
  currentPage: number;
  prevActive: boolean;
  nextActive: boolean;
  totalLimitNum: number;
  limitNum: number;
  pageBtnHandleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  prevBtnHandleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  nextBtnHandleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IRealtimeChartTableProps {
  itemList: DocumentData[];
}

export interface ICategoriesProps {
  itemList: DocumentData[];
}

export interface IRankingAsideProps {
  activeCommunity: string;
  ulRef: RefObject<HTMLUListElement>;
  itemList: DocumentData[];
  commuBtnHandleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ICommentsProps {
  commentList: DocumentData[];
}

export interface ISidebarRealTimeFilterOptionList {
  value: string;
  label: string;
}

export const sidebarRealTimeFilterOptionList: ISidebarRealTimeFilterOptionList[] =
  [
    { value: "tossMoney", label: "토스증권 거래대금" },
    { value: "tossAmount", label: "토스증권 거래량" },
    { value: "money", label: "거래대금" },
    { value: "amount", label: "거래량" },
    { value: "up", label: "급상승" },
    { value: "down", label: "급하락" },
    { value: "popularity", label: "인기" },
  ];

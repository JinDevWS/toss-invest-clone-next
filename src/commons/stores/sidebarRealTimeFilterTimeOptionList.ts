export interface ISidebarRealTimeFilterTimeOptionList {
  value: string;
  label: string;
}

export const sidebarRealTimeFilterTimeOptionList: ISidebarRealTimeFilterTimeOptionList[] =
  [
    { value: "realtime", label: "실시간" },
    { value: "day1", label: "1일" },
    { value: "week1", label: "1주일" },
    { value: "month1", label: "1개월" },
    { value: "month3", label: "3개월" },
    { value: "month6", label: "6개월" },
    { value: "year1", label: "1년" },
  ];

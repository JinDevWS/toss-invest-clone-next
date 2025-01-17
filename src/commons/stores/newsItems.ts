interface INewsItem {
  title: string;
  hour: number;
  newspaper: string;
}

export const newsItems: INewsItem[] = [
  {
    title: "[亞증시-종합] 트럼프 취임 앞두고 혼조세…中 성장률 목표 달성",
    hour: 1,
    newspaper: "연합인포맥스",
  },
  {
    title: `中 무역장벽 더 높인 美 정부, OCI·LS MnM에 볕드나`,
    hour: 2,
    newspaper: "한국경제",
  },
  {
    title: "구리 확보戰에···리오틴토·글렌코어 M&A 재점화",
    hour: 1,
    newspaper: "서울경제",
  },
  {
    title: "해외 주식형 ETF 약진에…작년 공모펀드 순자산 5년래 최대폭 늘어",
    hour: 3,
    newspaper: "이데일리",
  },
];

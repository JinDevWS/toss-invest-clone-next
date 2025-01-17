interface IImgNewsItem {
  img: string;
  title: string;
  hour: number;
  newspaper: string;
}

export const imgNewsItems: IImgNewsItem[] = [
  {
    img: "image1.png",
    title: "[코스닥 마감] 트럼프 취임 앞두고 관망세...720선 강보합권",
    hour: 3,
    newspaper: "이데일리",
  },
  {
    img: "image3.png",
    title: `중국 "작년 5.0% 경제성장" 목표 달성에 중화권 '방긋' [Asia마감]`,
    hour: 1,
    newspaper: "머니투데이",
  },
  {
    img: "image4.png",
    title: "[서환-마감] 트럼프 취임 앞두고 상승 반전…1.60원↑",
    hour: 2,
    newspaper: "연합인포맥스",
  },
  {
    img: "image5.png",
    title: "中증시, '5% 성장' 목표 달성에 소폭 상승...반도체株 강세",
    hour: 2,
    newspaper: "아주경제",
  },
];

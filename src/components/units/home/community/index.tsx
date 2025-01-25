import moment from "moment";
import "moment/locale/ko";
import RankingAside from "./ranking-aside";
import styled from "@emotion/styled";
import Comments from "./comments";
import { domesticForeignState } from "@/src/commons/atom/domesticForeignState";
import { useGetItemsKrOrUs } from "@/src/commons/hooks/useGetItemsKrOrUs";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { useGetComments } from "@/src/commons/hooks/useGetComments";

const Section = styled.section`
  margin-top: 80px;
`;
const Header = styled.header`
  padding-bottom: 35px;
  display: flex;
  align-items: center;
`;
const H2 = styled.h2`
  font-size: 20px;
  margin-right: 10px;
`;
const StandardTime = styled.div`
  font-size: 14px;
  color: #6b7684;
`;
const Article = styled.article`
  display: flex;
  gap: 40px;
`;

export default function Community(): React.ReactElement {
  useEffect(() => {
    moment.locale("ko");
  }, []);

  const domesticForeign = useRecoilValue(domesticForeignState);
  const [activeCommunity, setActiveCommunity] = useState<string>("");
  const ulRef = useRef<HTMLUListElement>(null);

  const itemList = useGetItemsKrOrUs(
    "community",
    "order",
    "asc",
    domesticForeign === "domesticFilter" ? "kr" : "us",
    5,
  );

  const commuBtnHandleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    const currentTarget = e.currentTarget;
    setActiveCommunity(currentTarget.id);
  };

  // itemList 상태가 바뀌어 렌더링할 때, ul > li > button 의 아이디를 가져오기
  // 아직 ul 이나 li 나 button 이 렌더링되지 않았으면 가져오지 않음
  useEffect(() => {
    if (
      ulRef.current &&
      ulRef.current.children[0] &&
      ulRef.current.children[0].children[0]
    ) {
      const currentId = ulRef.current.children[0].children[0].id;
      setActiveCommunity(currentId);
    }
  }, [itemList]);

  // 최신순으로 정렬
  const commentList = useGetComments(
    "comment",
    "dateTime",
    "desc",
    activeCommunity,
    100,
  );

  return (
    <Section>
      <Header>
        <H2>인기 급상승 커뮤니티</H2>
        <StandardTime>오늘 {moment().format("HH:mm")} 기준</StandardTime>
      </Header>
      <Article>
        <RankingAside
          activeCommunity={activeCommunity}
          ulRef={ulRef}
          itemList={itemList}
          commuBtnHandleClick={commuBtnHandleClick}
        />
        <Comments commentList={commentList} />
      </Article>
    </Section>
  );
}

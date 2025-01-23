import moment from "moment";
import "moment/locale/ko";
import { useEffect } from "react";
import RankingAside from "./ranking-aside";
import styled from "@emotion/styled";
import Comments from "./comments";

const Section = styled.section``;
const Header = styled.header``;
const H2 = styled.h2``;
const StandardTime = styled.div``;
const Article = styled.article``;

export default function Community(): React.ReactElement {
  useEffect(() => {
    moment.locale("ko");
  }, []);

  return (
    <Section>
      <Header>
        <H2>인기 급상승 커뮤니티</H2>
        <StandardTime>오늘 {moment().format("HH:mm")} 기준</StandardTime>
      </Header>
      <Article>
        <RankingAside />
        <Comments />
      </Article>
    </Section>
  );
}

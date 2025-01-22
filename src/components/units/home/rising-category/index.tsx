import { domesticForeignState } from "@/src/commons/atom/domesticForeignState";
import { useGetItemsKrOrUs } from "@/src/commons/hooks/useGetItemsKrOrUs";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import Categories from "./categories";
import moment from "moment";
import "moment/locale/ko";
import { useEffect } from "react";

const Wrapper = styled.section`
  margin-top: 80px;
`;
const SectionWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  column-gap: 40px;
`;
const Header = styled.header<{
  domesticForeign: string;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: ${(props) => (props.domesticForeign === "allFilter" ? 0 : 1)}px
    solid #ededed;
  padding: 10px 0;
  margin-bottom: 8px;
`;
const H2 = styled.h2`
  font-size: 20px;
  min-width: 150px;
  margin-right: 10px;
`;
const H3 = styled.h3`
  min-width: 40px;
  font-size: 17px;
`;
const StandardMore = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const StandardTime = styled.div`
  flex-grow: 1;
  color: #6b7684;
  font-size: 14px;
`;
const StandardTimeSmall = styled(StandardTime)`
  font-size: 12px;
`;
const More = styled.button`
  font-size: 15px;
  color: #6b7684;
  background-color: transparent;
  border: 0;
  border-radius: 5px;
  padding: 3px;
  cursor: pointer;
  &:hover {
    background-color: #f1f4f6;
  }
`;

export default function RisingCategory(): React.ReactElement {
  const domesticForeign = useRecoilValue(domesticForeignState);

  const domeRisingAll = useGetItemsKrOrUs(
    "rising-category",
    "rank",
    "asc",
    "kr",
    3,
  );
  const foreRisingAll = useGetItemsKrOrUs(
    "rising-category",
    "rank",
    "asc",
    "us",
    3,
  );
  const domeRisingCategories = useGetItemsKrOrUs(
    "rising-category",
    "rank",
    "asc",
    "kr",
    6,
  );
  const foreRisingCategories = useGetItemsKrOrUs(
    "rising-category",
    "rank",
    "asc",
    "us",
    6,
  );

  useEffect(() => {
    moment.locale("ko");
  }, []);

  return (
    <Wrapper>
      <Header domesticForeign={domesticForeign}>
        <H2>지금 뜨는 카테고리</H2>
        {domesticForeign !== "allFilter" && (
          <StandardMore>
            <StandardTime>{moment().format("MMM Do HH:mm")} 기준</StandardTime>
            <More type="button">더 보기</More>
          </StandardMore>
        )}
      </Header>
      {domesticForeign === "allFilter" && (
        <SectionWrapper>
          <section>
            <Header domesticForeign={""}>
              <H3>국내</H3>
              <StandardMore>
                <StandardTimeSmall>
                  {moment().format("MMM Do HH:mm")} 기준
                </StandardTimeSmall>
                <More type="button">더 보기</More>
              </StandardMore>
            </Header>
            <Categories itemList={foreRisingAll} />
          </section>
          <section>
            <Header domesticForeign={""}>
              <H3>해외</H3>
              <StandardMore>
                <StandardTimeSmall>
                  {moment().format("MMM Do HH:mm")} 기준
                </StandardTimeSmall>
                <More type="button">더 보기</More>
              </StandardMore>
            </Header>
            <Categories itemList={domeRisingAll} />
          </section>
        </SectionWrapper>
      )}
      {domesticForeign === "domesticFilter" && (
        <section>
          <Categories itemList={domeRisingCategories} />
        </section>
      )}
      {domesticForeign === "foreignFilter" && (
        <section>
          <Categories itemList={foreRisingCategories} />
        </section>
      )}
    </Wrapper>
  );
}

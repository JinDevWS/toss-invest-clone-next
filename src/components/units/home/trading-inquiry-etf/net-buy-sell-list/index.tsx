import { useInquiryEtfItems } from "@/src/commons/hooks/useInquiryEtfItems";
import { INetBuySellListProps } from "@/src/commons/types/types";
import styled from "@emotion/styled";
import moment from "moment";
import "moment/locale/ko";
import { useEffect } from "react";

const IMG_PATH_KR = "./assets/images/stock-inquiry/";

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
`;
const Article = styled.article``;
const H3Box = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 5px;
`;
const H3 = styled.h3`
  font-size: 16px;
  margin-right: 5px;
`;
const StandardDateTime = styled.div`
  font-size: 12px;
  color: #6b7684;
`;
const Ul = styled.ul`
  list-style-type: none;
`;
const Li = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    background-color: #f3f4f5;
  }
  transition: background-color 200ms ease-in-out;
`;
const Order = styled.div`
  padding-right: 15px;
  font-size: 15px;
  font-weight: bold;
  color: #2371eb;
`;
const Img = styled.img`
  display: block;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 10px;
`;
const ContentsBox = styled.div`
  font-size: 15px;
  flex-grow: 1;
`;
const Title = styled.div`
  font-weight: bold;
`;
const PriceBox = styled.div`
  display: flex;
  color: #6b7684;
`;
const Price = styled.div`
  margin-right: 5px;
`;
const ChangedRate = styled.div<{
  changedRate: number;
}>`
  color: ${(props) =>
    props.changedRate > 0
      ? "#F04351"
      : props.changedRate < 0
        ? "#2371eb"
        : "inherit"};
`;
const TotalPrice = styled.div`
  font-weight: bold;
`;

export default function NetBuySellList({
  buyOrSell,
}: INetBuySellListProps): React.ReactElement {
  useEffect(() => {
    moment.locale("ko");
  }, []);

  const netBuyingForeignerItems = useInquiryEtfItems(
    buyOrSell === "buyFilter" ? "net-buying-items-kr" : "net-selling-items-kr",
    "order",
    "asc",
    "foreigner",
    5,
  );
  const netBuyingOrganItems = useInquiryEtfItems(
    buyOrSell === "buyFilter" ? "net-buying-items-kr" : "net-selling-items-kr",
    "order",
    "asc",
    "organ",
    5,
  );
  const netBuyingPersonItems = useInquiryEtfItems(
    buyOrSell === "buyFilter" ? "net-buying-items-kr" : "net-selling-items-kr",
    "order",
    "asc",
    "person",
    5,
  );

  const totalPriceCalc = (totalPrice: number) => {
    return (totalPrice / 100000000).toLocaleString("ko-KR");
  };

  return (
    <Section>
      <Article>
        <H3Box>
          <H3>외국인</H3>
          <StandardDateTime>
            {moment().format("MMMM Do HH:mm")} 기준
          </StandardDateTime>
        </H3Box>
        {netBuyingForeignerItems.map((el) => (
          <Ul key={el._id}>
            <Li>
              <Order>{el.order}</Order>
              <Img src={`${IMG_PATH_KR}${el.img}`} alt="주식 종목 아이콘" />
              <ContentsBox>
                <Title>{el.title}</Title>
                <PriceBox>
                  <Price>{el.price.toLocaleString("ko-KR")}원</Price>
                  <ChangedRate changedRate={el.changedRate}>
                    {el.changedRate.toFixed(1)}%
                  </ChangedRate>
                </PriceBox>
              </ContentsBox>
              <TotalPrice>{totalPriceCalc(el.totalPrice)}억원</TotalPrice>
            </Li>
          </Ul>
        ))}
      </Article>
      <Article>
        <H3Box>
          <H3>기관</H3>
          <StandardDateTime>
            {moment().format("MMMM Do HH:mm")} 기준
          </StandardDateTime>
        </H3Box>
        {netBuyingOrganItems.map((el) => (
          <Ul key={el._id}>
            <Li>
              <Order>{el.order}</Order>
              <Img src={`${IMG_PATH_KR}${el.img}`} alt="주식 종목 아이콘" />
              <ContentsBox>
                <Title>{el.title}</Title>
                <PriceBox>
                  <Price>{el.price.toLocaleString("ko-KR")}원</Price>
                  <ChangedRate changedRate={el.changedRate}>
                    {el.changedRate.toFixed(1)}%
                  </ChangedRate>
                </PriceBox>
              </ContentsBox>
              <TotalPrice>{totalPriceCalc(el.totalPrice)}억원</TotalPrice>
            </Li>
          </Ul>
        ))}
      </Article>
      <Article>
        <H3Box>
          <H3>개인</H3>
          <StandardDateTime>
            {moment().format("MMMM Do HH:mm")} 기준
          </StandardDateTime>
        </H3Box>
        {netBuyingPersonItems.map((el) => (
          <Ul key={el._id}>
            <Li>
              <Order>{el.order}</Order>
              <Img src={`${IMG_PATH_KR}${el.img}`} alt="주식 종목 아이콘" />
              <ContentsBox>
                <Title>{el.title}</Title>
                <PriceBox>
                  <Price>{el.price.toLocaleString("ko-KR")}원</Price>
                  <ChangedRate changedRate={el.changedRate}>
                    {el.changedRate.toFixed(1)}%
                  </ChangedRate>
                </PriceBox>
              </ContentsBox>
              <TotalPrice>{totalPriceCalc(el.totalPrice)}억원</TotalPrice>
            </Li>
          </Ul>
        ))}
      </Article>
    </Section>
  );
}

import { useInquiryEtfItems } from "@/src/commons/hooks/useInquiryEtfItems";
import styled from "@emotion/styled";
import EtfList from "./etf-list";
import { IUsEtfListProps } from "@/src/commons/types/types";

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

export default function UsEtfList({
  currentPage,
}: IUsEtfListProps): React.ReactElement {
  const levInvItems = useInquiryEtfItems(
    "etf-items-us",
    "order",
    "asc",
    "levInv",
    5,
  );
  const usStockItems = useInquiryEtfItems(
    "etf-items-us",
    "order",
    "asc",
    "usStock",
    5,
  );
  const stockDividendItems = useInquiryEtfItems(
    "etf-items-us",
    "order",
    "asc",
    "stockDividend",
    5,
  );
  const bondItems = useInquiryEtfItems(
    "etf-items-us",
    "order",
    "asc",
    "bond",
    5,
  );
  const materialItems = useInquiryEtfItems(
    "etf-items-us",
    "order",
    "asc",
    "material",
    5,
  );

  return (
    <Section>
      {currentPage === 1 && (
        <>
          <Article>
            <H3Box>
              <H3>레버리지·인버스</H3>
            </H3Box>
            <EtfList itemList={levInvItems} />
          </Article>
          <Article>
            <H3Box>
              <H3>미국주식</H3>
            </H3Box>
            <EtfList itemList={usStockItems} />
          </Article>
          <Article>
            <H3Box>
              <H3>배당주</H3>
            </H3Box>
            <EtfList itemList={stockDividendItems} />
          </Article>
        </>
      )}
      {currentPage === 2 && (
        <>
          <Article>
            <H3Box>
              <H3>채권</H3>
            </H3Box>
            <EtfList itemList={bondItems} />
          </Article>
          <Article>
            <H3Box>
              <H3>원자재</H3>
            </H3Box>
            <EtfList itemList={materialItems} />
          </Article>
          <></>
        </>
      )}
    </Section>
  );
}

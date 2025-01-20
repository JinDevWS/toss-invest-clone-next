import { IRealtimeChartTableProps } from "@/src/commons/types/types";
import styled from "@emotion/styled";

const STOCK_ICON_PATH = "./assets/images/stock-icons-";
const ICON_PATH = "./assets/images/";

const TableWrapper = styled.div`
  width: 100%;
  min-height: 500px;
  overflow-x: scroll;
  scrollbar-width: none;
  margin-bottom: 40px;
`;
const Table = styled.table`
  table-layout: fixed;
  position: relative;
  min-width: 100%;
  width: max-content;
  border-spacing: 0;
  overflow: visible;
  & .col-span {
  }
  & .col-second {
    width: 194px;
  }
  & .col-third {
    width: 260px;
  }
  & .col-fourth {
    width: 194px;
  }
  & .col-fifth {
    width: 194px;
  }
`;
const Thead = styled.thead``;
const Tbody = styled.tbody`
  border-radius: 10px;
`;
const Tr = styled.tr`
  height: 48px;
  border-radius: 10px;
  cursor: pointer;
  &:nth-of-type(odd) td {
    background-color: #f9fafb;
  }
  &:nth-of-type(even) td {
    background-color: white;
  }
  &:hover td {
    background-color: #f1f4f6;
  }
`;
const Th = styled.th`
  background-color: white;
  text-align: right;
  font-size: 14px;
  font-weight: normal;
  &.title {
    position: sticky;
    top: 0;
    left: 0;
    text-align: left;
  }
  &:first-of-type {
    padding-left: 10px;
  }
  &:last-of-type {
    padding-right: 10px;
  }
`;
const Td = styled.td`
  border: 0;
  padding: 8px 2px;
  font-size: 16px;
  text-align: right;
  line-height: 1.45;
  &:first-of-type {
    width: 36px;
    text-align: left;
    color: #3182f6;
    padding-left: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 2;
  }
  &:nth-of-type(2) {
    width: 30px;
    position: sticky;
    top: 0;
    left: 36px;
    z-index: 2;
  }
  &:nth-of-type(3) {
    width: 162px;
    text-align: left;
    padding-left: 5px;
    position: sticky;
    top: 0;
    left: calc(36px + 30px);
    z-index: 2;
  }
  &:last-of-type {
    padding-right: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
const IconWrapper = styled.div`
  position: relative;
`;
const IconBox = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
`;
const Icon = styled.img`
  object-fit: cover;
  object-position: -8px -8px;
  transform: scale(1.8);
`;
const IconUs = styled.img`
  display: block;
  width: 10px;
  height: 8px;
  position: absolute;
  bottom: 0;
  left: 15px;
  z-index: 3;
`;

export default function RealtimeChartTable({
  itemList,
}: IRealtimeChartTableProps): React.ReactElement {
  return (
    <TableWrapper>
      <Table>
        <colgroup>
          <col className="col-span" span={3} />
          <col className="col-second" />
          <col className="col-third" />
          <col className="col-fourth" />
          <col className="col-fifth" />
        </colgroup>
        <Thead>
          <Tr>
            <Th colSpan={3} className="title">
              종목
            </Th>
            <Th>현재가</Th>
            <Th>등락률</Th>
            <Th>거래대금 많은 순</Th>
            <Th>거래량</Th>
          </Tr>
        </Thead>
        <Tbody>
          {itemList.map((el) => (
            <Tr key={el._id}>
              <Td>{el._index + 1}</Td>
              <Td>
                <IconWrapper>
                  <IconBox>
                    <Icon
                      src={`${STOCK_ICON_PATH}${el.krOrUs === "kr" ? "kr" : "us"}/${el.img}`}
                      alt="주식 종목 아이콘"
                    />
                    {el.krOrUs === "us" && (
                      <IconUs src={`${ICON_PATH}/us.png`} />
                    )}
                  </IconBox>
                </IconWrapper>
              </Td>
              <Td>{el.title}</Td>
              <Td>{el.price}</Td>
              <Td>
                {el.changedPrice} {el.changedRate}
              </Td>
              <Td>{el.transactionPrice}</Td>
              <Td>{el.amount}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableWrapper>
  );
}

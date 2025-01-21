import { realtimeChartTossState } from "@/src/commons/atom/realtimeChartTossState";
import { IRealtimeChartTableProps } from "@/src/commons/types/types";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";

const STOCK_ICON_PATH = "./assets/images/stock-icons-";
const ICON_PATH = "./assets/images/";

const TableWrapper = styled.div`
  width: 100%;
  min-height: 500px;
  overflow-x: scroll;
  scrollbar-width: none;
  margin-bottom: 40px;
  &[data-scroll="true"] td:nth-of-type(3):after {
    content: "";
    position: absolute;
    right: -28px;
    top: 0;
    width: 28px;
    height: 100%;
    display: block;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.04), transparent);
  }
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
const FilterTh = styled(Th)<{ id: string; activeColumn: string }>`
  color: ${(props) =>
    props.id.split("-")[0] === props.activeColumn ? "#2470EB" : "inherit"};
  font-weight: ${(props) =>
    props.id.split("-")[0] === props.activeColumn ? "bold" : "normal"};
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
const FilterTd = styled(Td)<{ id: string; activeColumn: string }>`
  font-weight: ${(props) =>
    props.id.split("-")[0] === props.activeColumn ? "bold" : "normal"};
`;
const FilterColorTd = styled(FilterTd)<{ changedRate: number }>`
  color: ${(props) =>
    props.changedRate > 0
      ? "#F04351"
      : props.changedRate < 0
        ? "#2470EB"
        : "inhefit"};
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
  border: 1px solid white;
  left: 15px;
  z-index: 3;
`;

export default function RealtimeChartTable({
  itemList,
}: IRealtimeChartTableProps): React.ReactElement {
  const tossActiveFilter = useRecoilValue(realtimeChartTossState);
  const [activeColumn, setActiveColumn] = useState<string>("changedPrice");
  const [changedRateTh, setChangedRateTh] = useState<string>("등락률 높은 순");
  const [transactionPriceTh, setTransactionPriceTh] =
    useState<string>("거래대금 많은 순");
  const [amountTh, setAmountTh] = useState<string>("거래량");

  useEffect(() => {
    if (tossActiveFilter === "tossMoney" || tossActiveFilter === "money") {
      setActiveColumn("transactionPrice");
      setChangedRateTh("등락률");
      setTransactionPriceTh("거래대금 많은 순");
      setAmountTh("거래량");
    } else if (
      tossActiveFilter === "tossAmount" ||
      tossActiveFilter === "amount"
    ) {
      setActiveColumn("amount");
      setChangedRateTh("등락률");
      setTransactionPriceTh("거래대금");
      setAmountTh("거래량 많은 순");
    } else if (tossActiveFilter === "down" || tossActiveFilter === "up") {
      setActiveColumn("changedRate");
      if (tossActiveFilter === "down") setChangedRateTh("등락률 낮은 순");
      else setChangedRateTh("등락률 높은 순");
      setTransactionPriceTh("거래대금");
      setAmountTh("거래량");
    } else {
      setActiveColumn("");
      setChangedRateTh("등락률");
      setTransactionPriceTh("거래대금");
      setAmountTh("거래량");
    }
  }, [tossActiveFilter]);

  const calcTransactionPrice = (transactionPrice: number): string => {
    if (transactionPrice >= 100000000) {
      return `${Number((transactionPrice / 100000000).toFixed(1)).toLocaleString("ko-KR")}억원`;
    } else if (transactionPrice < 100000000 && transactionPrice >= 10000) {
      return `${Number((transactionPrice / 10000).toFixed(1)).toLocaleString("ko-KR")}만원`;
    } else {
      return `${transactionPrice.toLocaleString("ko-KR")}원`;
    }
  };

  // 일반적인 스크롤 이벤트 핸들러는 스크롤 이벤트가 발생할 때마다 실행되므로, 고빈도 호출로 성능 저하가 발생할 수 있다.
  // requestAnimationFrame은 브라우저의 리페인트 타이밍에 맞춰 작업을 실행하므로, 불필요한 계산을 줄이고 효율적으로 렌더링
  const tableWrapperRef = useRef<HTMLDivElement>(null);
  let animationFrameId: number;

  // 스크롤 상태를 계산하고 data-scroll 속성을 업데이트하는 함수
  // scrollLeft: 현재 스크롤 위치
  const handleScroll = (): void => {
    if (tableWrapperRef.current) {
      const currentTarget = tableWrapperRef.current;
      // 스크롤 상태에 따라 data-scroll 속성 업데이트
      currentTarget.dataset.scroll =
        currentTarget.scrollLeft > 0 ? "true" : "false";
    }
  };

  const onScroll = (): void => {
    // 이전 요청이 있다면 requestAnimationFrame 취소
    if (animationFrameId) cancelAnimationFrame(animationFrameId);

    // 브라우저가 리페인트할 때 requestAnimationFrame 실행
    animationFrameId = requestAnimationFrame(handleScroll);
  };

  useEffect(() => {
    const tableWrapper = tableWrapperRef.current;

    // 스크롤 이벤트 추가
    tableWrapper?.addEventListener("scroll", onScroll);

    // 클린업: 이벤트 제거 및 애니메이션 프레임 취소
    return () => {
      tableWrapper?.removeEventListener("scroll", onScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    // data-scroll은 스크롤 가능 여부를 나타내는 커스텀 속성
    <TableWrapper ref={tableWrapperRef} data-scroll="false">
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
            <FilterTh id="changedRate-th" activeColumn={activeColumn}>
              {changedRateTh}
            </FilterTh>
            <FilterTh id="transactionPrice-th" activeColumn={activeColumn}>
              {transactionPriceTh}
            </FilterTh>
            <FilterTh id="amount-th" activeColumn={activeColumn}>
              {amountTh}
            </FilterTh>
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
              <Td>{`${el.price.toLocaleString("ko-KR")}원`}</Td>
              <FilterColorTd
                id={`changedRate-${el._index}`}
                activeColumn={activeColumn}
                changedRate={el.changedRate}
              >
                {el.changedPrice > 0
                  ? `+${el.changedPrice.toLocaleString("ko-KR")}원`
                  : `${el.changedPrice.toLocaleString("ko-KR")}원`}
                {` (${el.changedRate}%)`}
              </FilterColorTd>
              <FilterTd
                id={`transactionPrice-${el._index}`}
                activeColumn={activeColumn}
              >
                {calcTransactionPrice(el.transactionPrice)}
              </FilterTd>
              <FilterTd id={`amount-${el._index}`} activeColumn={activeColumn}>
                {`${el.amount.toLocaleString("ko-KR")}주`}
              </FilterTd>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableWrapper>
  );
}

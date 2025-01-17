import styled from "@emotion/styled";
import { useRef, useState } from "react";
import GraphGridStockIndex from "../graph-grid-stock-index";
import GraphGridBond from "../graph-grid-bond";
import CarouselBtn from "@/public/assets/images/svgs/carousel-btn.svg";
import GraphGridMaterials from "../graph-grid-materials";
import { keyframes } from "@emotion/react";

const GraphGridSection = styled.section`
  width: 100%;
  margin: 65px 0;
  position: relative;
`;

const GraphGridHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Filter = styled.div`
  display: flex;
  height: 50px;
  position: relative;
`;

const FilterToggle = styled.span<{
  activeFilter: string;
}>`
  width: ${(props) =>
    props.activeFilter === "stockIndexFilter"
      ? 88
      : props.activeFilter === "bondFilter"
        ? 70
        : 80}px;
  height: 100%;
  background-color: #f3f4f5;
  border: 0;
  border-radius: 25px;
  position: absolute;
  left: ${(props) =>
    props.activeFilter === "stockIndexFilter"
      ? 0
      : props.activeFilter === "bondFilter"
        ? 93
        : 165}px;
  z-index: -1;
  transition: all 300ms ease-in-out;
`;

const H2 = styled.h2`
  height: 100%;
  margin-right: 10px;
`;

const FilterBtn = styled.button<{
  id: string;
  activeFilter: string;
}>`
  height: 100%;
  font-size: 17px;
  font-weight: ${(props) =>
    props.id === props.activeFilter ? "bold" : "normal"};
  border: 0;
  border-radius: 25px;
  background-color: transparent;
  padding: 0 15px;
`;

const infiniteScrollFirst = keyframes`
	0% { 
    transform: translateY(18px); 
    opacity: 0;
  }
  50% {
    transform: translateY(0px); 
    opacity: 1;
  }
	100% { 
    transform: translateY(calc(-18px));
    opacity: 0;
  }
`;
const infiniteScrollSecond = keyframes`
	0% { 
    transform: translateY(calc(18px * 2)); 
    opacity: 0;
  }
  50% {
    transform: translateY(-18px); 
    opacity: 1;
  }
	100% { 
    transform: translateY(calc(-18px * 2));
    opacity: 0;
  }
`;

const DollarIndexCarousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 176px;
  height: 18px;
  overflow: hidden;
`;

const DollarIndexBtn = styled.button`
  border: 0;
  background-color: transparent;
  font-size: 15px;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  animation: ${infiniteScrollFirst} 3s infinite;
`;

const DollarRateBtn = styled(DollarIndexBtn)`
  animation: ${infiniteScrollSecond} 3s infinite 1.25s;
`;

const IndexText = styled.span`
  padding-right: 10px;
`;
const IndexDollar = styled.span`
  padding-right: 5px;
`;
const IndexRate = styled.span<{
  rate: number;
}>`
  color: ${(props) => (props.rate < 0 ? "#1774f7" : "#f33b47")};
`;

const WhiteSpace = styled.div`
  width: 100%;
  position: relative;
`;

const LeftGradient = styled.div`
  width: 50px;
  height: 110px;
  position: absolute;
  top: 0;
  z-index: 1;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  opacity: 0;
  visibility: hidden;
  &.visible {
    opacity: 1;
    visibility: visible;
  }
  transition:
    opacity 500ms linear,
    visibility 500ms linear;
`;
const RightGradient = styled(LeftGradient)`
  right: 0;
  transform: rotateZ(180deg);
`;

const LeftBtn = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 32px;
  z-index: 2;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 50%;
  opacity: 0;
  visibility: hidden;
  &.visible {
    opacity: 1;
    visibility: visible;
  }
  transition:
    opacity 500ms linear,
    visibility 500ms linear;
`;
const RightBtn = styled(LeftBtn)`
  right: 0;
  transform: rotateZ(180deg);
`;

const GraphGridCarousel = styled.div`
  width: 100%;
  height: 110px;
  overflow-x: scroll;
  scrollbar-width: none;
  scroll-behavior: none;
  position: relative;
`;

export default function GraphGrid(): React.ReactElement {
  const [activeFilter, setActiveFilter] = useState<string>("stockIndexFilter");
  const [scrollRight, setScrollRight] = useState<number>(56);

  const leftBtnRef = useRef<HTMLDivElement>(null);
  const leftGradientRef = useRef<HTMLDivElement>(null);
  const rightBtnRef = useRef<HTMLDivElement>(null);
  const rightGradientRef = useRef<HTMLDivElement>(null);

  const filterBtnHandleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    const currentTarget = e.currentTarget;
    setActiveFilter(currentTarget.id);
    if (currentTarget.id === "bondFilter") setScrollRight(386);
    else setScrollRight(56);
  };

  const gridCarouselScroll = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const currentTarget = e.currentTarget;
    if (leftBtnRef.current && leftGradientRef.current) {
      if (currentTarget.scrollLeft === 0) {
        leftBtnRef.current.classList.remove("visible");
        leftGradientRef.current.classList.remove("visible");
      } else {
        leftBtnRef.current.classList.add("visible");
        leftGradientRef.current.classList.add("visible");
      }
    }
    if (rightBtnRef.current && rightGradientRef.current) {
      if (currentTarget.scrollLeft >= scrollRight) {
        rightBtnRef.current.classList.remove("visible");
        rightGradientRef.current.classList.remove("visible");
      } else {
        rightBtnRef.current.classList.add("visible");
        rightGradientRef.current.classList.add("visible");
      }
    }
  };

  return (
    <GraphGridSection>
      <GraphGridHeader>
        <Filter>
          <FilterToggle activeFilter={activeFilter} />
          {["stockIndexFilter", "bondFilter", "materialsFilter"].map(
            (el: string): React.ReactElement => (
              <H2 key={el}>
                <FilterBtn
                  type="button"
                  id={el}
                  activeFilter={activeFilter}
                  onClick={filterBtnHandleClick}
                >
                  {el === "stockIndexFilter"
                    ? "주가지수"
                    : el === "bondFilter"
                      ? "채권"
                      : "원자재"}
                </FilterBtn>
              </H2>
            ),
          )}
        </Filter>
        <DollarIndexCarousel>
          <DollarIndexBtn type="button">
            <IndexText>달러 인덱스</IndexText>
            <IndexDollar>109.08</IndexDollar>
            <IndexRate rate={0.0}>0.0%</IndexRate>
          </DollarIndexBtn>
          <DollarRateBtn type="button">
            <IndexText>달러 환율</IndexText>
            <IndexDollar>{(1456.9).toLocaleString("kr-KR")}</IndexDollar>
            <IndexRate rate={-0.22}>-0.22%</IndexRate>
          </DollarRateBtn>
        </DollarIndexCarousel>
      </GraphGridHeader>
      <WhiteSpace>
        <LeftGradient ref={leftGradientRef} />
        <RightGradient ref={rightGradientRef} />
        <LeftBtn ref={leftBtnRef}>
          <CarouselBtn />
        </LeftBtn>
        <RightBtn ref={rightBtnRef}>
          <CarouselBtn />
        </RightBtn>
      </WhiteSpace>
      <GraphGridCarousel onScroll={gridCarouselScroll}>
        {activeFilter === "stockIndexFilter" && <GraphGridStockIndex />}
        {activeFilter === "bondFilter" && <GraphGridBond />}
        {activeFilter === "materialsFilter" && <GraphGridMaterials />}
      </GraphGridCarousel>
    </GraphGridSection>
  );
}

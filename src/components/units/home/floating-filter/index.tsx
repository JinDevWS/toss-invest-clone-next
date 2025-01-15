import { domesticForeignState } from "@/src/commons/atom/domesticForeignState";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { useEffect, useRef } from "react";

const FloatRoot = styled.div`
  width: 100%;
  height: 0;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 72px;
`;

const FloatWrapper = styled.div`
  border: 0;
  border-radius: 25px;
  background-color: white;
  box-shadow: 0px 0px 10px 4px #f0f1f2;
  display: grid;
  grid-template-columns: 80px max-content max-content;
  align-items: center;
  position: relative;
  padding: 4px;
  transform: translateY(-50px);
  transition: transform 200ms ease;
  &.floated {
    height: 45px;
    transform: translateY(0px);
  }
`;

const FloatToggle = styled.span<{
  domesticForeignAll: string;
}>`
  grid-column: ${(props) =>
      props.domesticForeignAll === "allFilter"
        ? 1
        : props.domesticForeignAll === "domesticFilter"
          ? 2
          : 3} /
    span 1;
  grid-row: 1 / 1;
  height: 100%;
  border: 0;
  border-radius: inherit;
  background-color: #f3f4f5;
  z-index: -1;
`;

const FloatBtn = styled.button<{
  id: string;
}>`
  min-width: 80px;
  font-size: 15px;
  font-weight: bold;
  border: 0;
  background-color: transparent;
  color: #4e5968;
  grid-column: ${(props) =>
      props.id.split("-")[0] === "allFilter"
        ? 1
        : props.id.split("-")[0] === "domesticFilter"
          ? 2
          : 3} /
    span 1; // 1칸만 차지하게 함
  grid-row: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  padding: 0 14px;
  cursor: pointer;
`;

const FloatSignal = styled.span`
  font-size: 12px;
  font-weight: normal;
  display: flex;
  align-items: center;
  color: #4e5968;
  margin-left: 10px;
`;

const Signal = styled.span`
  display: inline-block;
  width: 4px;
  height: 4px;
  border: 0;
  border-radius: 50%;
  background-color: #18d628;
  margin-right: 5px;
`;

export default function FloatingFilter(): React.ReactElement {
  const [domesticForeignAll, setDomesticForeignAll] =
    useRecoilState(domesticForeignState);
  const targetRef = useRef<HTMLDivElement>(null);

  const handleScroll = (): void => {
    if (targetRef.current) {
      if (window.scrollY > 100) {
        targetRef.current.classList.add("floated");
      } else {
        targetRef.current.classList.remove("floated");
      }
    }
  };

  const filterHandleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const currentTarget = e.currentTarget;
    setDomesticForeignAll(currentTarget.id.split("-")[0]);
  };

  useEffect(() => {
    const throttledScroll = (): void => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", throttledScroll);

    // 클린업 함수
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, []);

  return (
    <FloatRoot>
      <FloatWrapper ref={targetRef}>
        <FloatToggle domesticForeignAll={domesticForeignAll} />
        {["allFilter", "domesticFilter", "foreignFilter"].map(
          (filter: string): React.ReactElement => (
            <FloatBtn
              key={filter}
              id={`${filter}-float`} // `-float` 을 붙여 아이디 중복을 방지
              onClick={filterHandleClick}
            >
              {/* 버튼 텍스트 출력 */}
              {filter === "allFilter"
                ? "전체"
                : filter === "domesticFilter"
                  ? "국내"
                  : "해외"}
              {/* 국내, 해외 필터일 경우 초록불 시그널 출력 */}
              {filter !== "allFilter" && (
                <FloatSignal>
                  <Signal />
                  {filter === "domesticFilter" ? "정규장" : "데이마켓"}
                </FloatSignal>
              )}
            </FloatBtn>
          ),
        )}
      </FloatWrapper>
    </FloatRoot>
  );
}

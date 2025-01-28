import { IPaginationProps } from "@/src/commons/types/types";
import styled from "@emotion/styled";

const ICON_PATH = "./assets/images/svgs/";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const PaginationBox = styled.div`
  display: flex;
`;
const PrevBtn = styled.button<{
  prevActive: boolean;
}>`
  display: flex;
  width: 35px;
  height: 35px;
  background-color: transparent;
  border: 0;
  border-radius: 50%;
  font-size: 17px;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${(props) =>
      props.prevActive ? "#f1f4f6" : "transparent"};
  }
  cursor: ${(props) => (props.prevActive ? "pointer" : "not-allowed")};
`;
const PageNumBox = styled.div``;
const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0 5px;
`;
const Li = styled.li`
  padding: 0 5px;
`;
const PageButton = styled.button<{
  id: string;
  currentPage: number;
}>`
  display: flex;
  width: 35px;
  height: 35px;
  border: 0;
  border-radius: 50%;
  font-size: 17px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: ${(props) =>
    Number(props.id.split("-")[1]) === props.currentPage
      ? "#333d4b"
      : "#6B7683"};
  background-color: ${(props) =>
    Number(props.id.split("-")[1]) === props.currentPage
      ? "#E5E8EA"
      : "transparent"};
  &:hover {
    background-color: ${(props) =>
      Number(props.id.split("-")[1]) === props.currentPage
        ? "#E5E8EA"
        : "#f1f4f6"};
  }
  cursor: pointer;
`;
const Icon = styled.img`
  width: 25px;
`;
const LineIcon = styled.img`
  display: block;
  width: 25px;
  margin: 0 5px;
`;
const NextBtn = styled.button<{
  nextActive: boolean;
}>`
  display: flex;
  width: 35px;
  height: 35px;
  background-color: transparent;
  border: 0;
  border-radius: 50%;
  font-size: 17px;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${(props) =>
      props.nextActive ? "#f1f4f6" : "transparent"};
  }
  & img {
    transform: rotate(180deg);
  }
  cursor: ${(props) => (props.nextActive ? "pointer" : "not-allowed")};
`;

export default function PaginationEllipsis({
  currentPage,
  prevActive,
  nextActive,
  totalLimitNum,
  limitNum,
  goToPage,
  goToPrevPage,
  goToNextPage,
}: IPaginationProps): React.ReactElement {
  // 페이지 번호 리스트를 생성하는 코드
  // 1부터 Math.ceil(totalLimitNum / limitNum)까지의 숫자가 담긴 배열을 생성
  const pageNumList: number[] = Array.from(
    // 1. 객체로 길이를 설정하여 배열 생성
    // Math.ceil(totalLimitNum / limitNum)는 전체 데이터를 페이지당 데이터 개수로 나눈 뒤
    // 소수점을 올림 처리하여 필요한 총 페이지 수를 계산
    { length: Math.ceil(totalLimitNum / limitNum) },

    // 2. 배열의 각 요소를 어떻게 채울지 정의하는 함수
    // 첫 번째 매개변수(_)는 배열의 현재 값(사용되지 않음)을 나타내고,
    // 두 번째 매개변수(i)는 인덱스를 나타냅니다.
    // 여기서 i는 0부터 시작하므로, i + 1을 사용하여 페이지 번호를 1부터 시작하도록 설정
    (_, i) => i + 1,
  );

  return (
    <Wrapper>
      <PaginationBox>
        <PrevBtn type="button" prevActive={prevActive} onClick={goToPrevPage}>
          <Icon src={`${ICON_PATH}carousel-btn.svg`} />
        </PrevBtn>
        <PageNumBox>
          <Ul>
            {pageNumList.map((el, index) => {
              if (currentPage <= 5) {
                if (
                  index !== pageNumList.length - 3 &&
                  index !== pageNumList.length - 2
                ) {
                  return (
                    <Li key={index}>
                      <PageButton
                        type="button"
                        id={`pageBtn-${el}`}
                        currentPage={currentPage}
                        onClick={(e) => {
                          const newPage = Number(
                            e.currentTarget.id.split("-")[1],
                          );
                          goToPage(newPage);
                        }}
                      >
                        {el}
                      </PageButton>
                    </Li>
                  );
                } else if (index === pageNumList.length - 3) {
                  return (
                    <LineIcon key={index} src={`${ICON_PATH}line-icon.svg`} />
                  );
                }
              } else {
                if (index !== 1 && index !== 2) {
                  return (
                    <Li key={index}>
                      <PageButton
                        type="button"
                        id={`pageBtn-${el}`}
                        currentPage={currentPage}
                        onClick={(e) => {
                          const newPage = Number(
                            e.currentTarget.id.split("-")[1],
                          );
                          goToPage(newPage);
                        }}
                      >
                        {el}
                      </PageButton>
                    </Li>
                  );
                } else if (index === 1) {
                  return (
                    <LineIcon key={index} src={`${ICON_PATH}line-icon.svg`} />
                  );
                }
              }
            })}
          </Ul>
        </PageNumBox>
        <NextBtn type="button" nextActive={nextActive} onClick={goToNextPage}>
          <Icon src={`${ICON_PATH}carousel-btn.svg`} />
        </NextBtn>
      </PaginationBox>
    </Wrapper>
  );
}

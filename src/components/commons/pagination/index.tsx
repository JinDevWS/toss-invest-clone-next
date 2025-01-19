import styled from "@emotion/styled";
import { useState } from "react";

const Wrapper = styled.div`
  width: 100%;
`;
const PaginationBox = styled.div`
  display: flex;
`;
const PrevBtn = styled.button``;
const PageNumBox = styled.div``;
const Ul = styled.ul`
  display: flex;
  list-style-type: none;
`;
const Li = styled.li``;
const PageButton = styled.button``;
const Icon = styled.img``;
const NextBtn = styled.button``;

export default function Pagination(): React.ReactElement {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageNumList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const pageBtnHandleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentTarget = e.currentTarget;
    setCurrentPage(Number(currentTarget.id.split("-")[1]));
  };

  return (
    <Wrapper>
      <PaginationBox>
        <PrevBtn type="button"></PrevBtn>
        <PageNumBox>
          <Ul>
            {pageNumList.map((el, index) => (
              <Li key={index}>
                {currentPage <= 5 && index !== 7 && index !== 8 && (
                  <PageButton
                    type="button"
                    id={`pageBtn-${el}`}
                    onClick={pageBtnHandleClick}
                  >
                    {el}
                  </PageButton>
                )}
                {currentPage <= 5 && (index === 7 || index === 8) && <Icon />}
                {currentPage > 5 && index !== 1 && index !== 2 && (
                  <PageButton
                    type="button"
                    id={`pageBtn-${el}`}
                    onClick={pageBtnHandleClick}
                  >
                    {el}
                  </PageButton>
                )}
                {currentPage > 5 && (index === 1 || index === 2) && <Icon />}
              </Li>
            ))}
          </Ul>
        </PageNumBox>
        <NextBtn type="button"></NextBtn>
      </PaginationBox>
    </Wrapper>
  );
}

import { useState, useCallback } from "react";

export function usePagination(totalLimitNum: number, limitNum: number) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const lastPageNum = Math.ceil(totalLimitNum / limitNum);

  const prevActive = currentPage > 1; // 이전(prev) 버튼 활성화 여부
  const nextActive = currentPage < lastPageNum; // 다음(next) 버튼 활성화 여부

  // 페이지 번호 클릭 시 해당 페이지로 이동
  const goToPage = useCallback(
    (page: number) => {
      if (page >= 1 && page <= lastPageNum) {
        setCurrentPage(page);
      }
    },
    [lastPageNum],
  );

  // 이전 버튼 클릭 시 이전 페이지로 이동
  const goToPrevPage = useCallback(() => {
    if (prevActive) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [prevActive]);

  // 다음 버튼 클릭 시 다음 페이지로 이동
  const goToNextPage = useCallback(() => {
    if (nextActive) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [nextActive]);

  return {
    currentPage,
    prevActive,
    nextActive,
    goToPage,
    goToPrevPage,
    goToNextPage,
  };
}

import { ISidebarMyInvestOptionList } from "@/src/commons/stores/sidebarMyInvestOptionList";
import { ISidebarRealTimeFilterOptionList } from "@/src/commons/stores/sidebarRealTimeFilterOptionList";
import { ISidebarRealTimeFilterTimeOptionList } from "@/src/commons/stores/sidebarRealTimeFilterTimeOptionList";
import { DownOutlined, CheckOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { useState, useRef, useEffect } from "react";

const SelectWrapper = styled.div<{
  id: string;
}>`
  min-width: ${(props): string =>
    props.id === "selectTimeBtn" ? "100px" : "160px"};
  height: 26px;
  display: flex;
  justify-content: ${(props): string =>
    props.id === "selectTimeBtn" ? "flex-end" : "flex-start"};
  align-items: center;
  z-index: 10;
  position: relative;
`;

const StyledSelectButton = styled.button`
  height: 100%;
  font-size: 14px;
  color: #333d4b;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const SelectBtnIcon = styled.span`
  font-size: 10px;
  margin: 0px 5px;
`;

const StyledSelectMenu = styled.div`
  min-width: 100px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  position: absolute;
  top: 30px;
  padding: 7px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #e9ecef;
`;

const SelectOption = styled.span`
  border-radius: 10px;
  padding: 10px;
  &:hover {
    background-color: #e9ecef;
  }
  &.clicked {
    color: #3182f6;
  }
`;

const SelectOptionIcon = styled(SelectOption)`
  font-size: 10px;
  padding: 5px 0 5px 5px;
`;

interface ISidebarSelectProps {
  selectedInitValue: string;
  selectBtnInitText: string;
  selectBtnId: string;
  selectMenuId: string;
  optionList:
    | ISidebarMyInvestOptionList[]
    | (
        | ISidebarRealTimeFilterOptionList[]
        | ISidebarRealTimeFilterTimeOptionList[]
      );
}

export default function SidebarSelect(
  props: ISidebarSelectProps,
): React.ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false); // 메뉴 열림/닫힘 상태
  const [selected, setSelected] = useState<string>(props.selectedInitValue);
  const [selectBtnText, setSelectBtnText] = useState<string>(
    props.selectBtnInitText,
  );
  const menuRef = useRef<HTMLDivElement>(null); // 메뉴 영역 참조

  const toggleMenu = (): void => setIsOpen((prev) => !prev); // 메뉴 열림/닫힘 토글
  const closeMenu = (): void => setIsOpen(false); // 메뉴 닫기

  const handleOptionClick = (e: React.MouseEvent<HTMLSpanElement>): void => {
    const { id, textContent } = e.currentTarget;
    setSelected(id || props.selectedInitValue); // 선택된 값 업데이트
    setSelectBtnText(textContent || props.selectBtnInitText); // 버튼 텍스트 업데이트
    closeMenu(); // 메뉴 닫기
  };

  useEffect((): (() => void) => {
    const handleClickOutside = (event: MouseEvent): void => {
      // menuRef.current가 초기에 null인지 확인하고, menuRef.current가 참조하는 DOM 내부에 클릭된 요소가 없다면 true를 반환
      // 즉 메뉴 외부를 클릭했는지를 파악
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu(); // 메뉴 외부 클릭 시 닫기
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // 클린업 함수
    // 클린업 함수는 useEffect가 다시 실행되거나 컴포넌트가 언마운트될 때 호출됨
    // 이벤트 리스너를 제거하거나 리소스를 정리
    return (): void => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]); // `isOpen` 상태가 바뀔 때마다 실행

  return (
    <SelectWrapper ref={menuRef} id={props.selectBtnId}>
      <StyledSelectButton
        onClick={toggleMenu}
        id={props.selectBtnId}
        aria-expanded={isOpen}
      >
        {selectBtnText}
        <SelectBtnIcon>
          <DownOutlined />
        </SelectBtnIcon>
      </StyledSelectButton>
      {isOpen && (
        <StyledSelectMenu id={props.selectMenuId}>
          {props.optionList.map((el, index): React.ReactElement => {
            return (
              <SelectOption
                key={index}
                id={el.value}
                onClick={handleOptionClick}
                className={selected === el.value ? "clicked" : ""}
              >
                {el.label}
                {selected === el.value && (
                  <SelectOptionIcon>
                    <CheckOutlined />
                  </SelectOptionIcon>
                )}
              </SelectOption>
            );
          })}
        </StyledSelectMenu>
      )}
    </SelectWrapper>
  );
}

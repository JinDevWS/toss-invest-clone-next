import { CopyFilled, DownOutlined, CheckOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  color: #6b7684;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

const H2Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const H2 = styled.h2`
  font-size: 17px;
  color: #333d4b;
`;

const DollarSwitch = styled.div`
  width: 46px;
  height: 26px;
  font-size: 12px;
  font-weight: bold;
  border: 0;
  border-radius: 5px;
  background-color: #e9ecef;
  display: flex;
  align-items: center;
  position: relative;
`;

const DollarBtn = styled.a`
  width: 50%;
  height: 100%;
  border: 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const DollarToggleBtn = styled.span`
  isolation: isolate;
  width: 23px;
  height: 26px;
  border-radius: 5px;
  transform: scale(0.85);
  position: absolute;
  background-color: white;
  box-shadow: -1px 1px 3px #ccd1d5;
  left: ${(props) => (props.isDollar ? "0px" : "23px")};
  transition: left 100ms linear;
  z-index: 0;
`;

const Hr = styled.hr`
  margin: 15px -17px 15px 0px;
  border-top: 1px solid #e9e9e9;
  border-bottom: 0px;
`;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MoneySwitch = styled.div`
  width: 100px;
  height: 26px;
  font-size: 14px;
  font-weight: bold;
  border: 0;
  border-radius: 5px;
  background-color: #e9ecef;
  display: flex;
  align-items: center;
  position: relative;
`;

const MoneyBtn = styled.a`
  width: 50px;
  height: 100%;
  border: 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const MoneyToggleBtn = styled.span`
  isolation: isolate;
  width: 54%;
  height: 100%;
  border-radius: 5px;
  transform: scale(0.85);
  position: absolute;
  background-color: white;
  box-shadow: -1px 1px 3px #ccd1d5;
  left: ${(props: boolean): string => (props.isNow ? "-2%" : "48%")};
  transition: left 100ms linear;
  z-index: 0;
`;

const SelectWrapper = styled.div`
  width: 150px;
  height: 26px;
  display: flex;
  align-items: center;
`;

const StyledSelectButton = styled.button`
  width: auto;
  height: 100%;
  font-size: 14px;
  color: #333d4b;
  border: 0;
  position: relative;
  background-color: transparent;
  text-align: left;
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
  width: auto;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  position: absolute;
  top: 100px;
  padding: 7px;
  background: white;
  border-radius: 10px;
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

const Article = styled.article`
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NoItemIcon = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  font-size: 40px;
  color: #c7cccd;
`;

const NoItemText = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

export default function SidebarExpandedMyInvest(): React.ReactElement {
  const [isDollar, setIsDollar] = useState(false);
  const [isNow, setIsNow] = useState(false);
  const [selected, setSelected] = useState("ganada");
  const [selectBtnText, setSelectBtnText] = useState("가나다 순");
  const [disp, setDisp] = useState(false);

  const optionList = [
    { value: "ganada", label: "가나다 순" },
    { value: "totalAsc", label: "총 수익률 낮은 순" },
    { value: "totalDesc", label: "총 수익률 높은 순" },
    { value: "todayAsc", label: "일간 수익률 낮은 순" },
    { value: "todayDesc", label: "일간 수익률 높은 순" },
    { value: "evaluateAsc", label: "평가금액 낮은 순" },
    { value: "evaluateDesc", label: "평가금액 높은 순" },
    { value: "custom", label: "직접 설정하기" },
  ];

  const dollarBtnHandleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    const currentTarget = e.currentTarget;
    setIsDollar((): boolean => {
      return currentTarget.id === "dollar" ? true : false;
    });
  };

  const nowBtnHandleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const currentTarget = e.currentTarget;
    setIsNow((): boolean => {
      return currentTarget.id === "now" ? true : false;
    });
  };

  const selectBtnHandleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    e.preventDefault();
    e.stopPropagation();
    setDisp(!disp);
  };

  const optionHandleClick = (e: React.MouseEvent<HTMLSpanElement>): void => {
    e.preventDefault();
    const currentTarget = e.currentTarget;
    setSelected((): string => {
      return currentTarget.id ? currentTarget.id : "ganada";
    });
    setSelectBtnText(currentTarget.innerHTML);
  };

  // 렌더링 이후에 호출되도록 함
  useEffect((): void => {
    window.onclick = function (e: React.MouseEvent<HTMLPointerEvent>): void {
      if (e.target.id !== "selectMenu" && e.target.id !== "selectBtn") {
        setDisp(false);
      }
    };
  }, []);

  return (
    <Section>
      <Header>
        <H2Wrapper>
          <H2>내 투자</H2>
          <DollarSwitch>
            <DollarToggleBtn isDollar={isDollar}></DollarToggleBtn>
            <DollarBtn href="#" id="dollar" onClick={dollarBtnHandleClick}>
              $
            </DollarBtn>
            <DollarBtn href="#" id="won" onClick={dollarBtnHandleClick}>
              원
            </DollarBtn>
          </DollarSwitch>
        </H2Wrapper>
        <Hr />
        <FilterWrapper>
          <SelectWrapper>
            <StyledSelectButton onClick={selectBtnHandleClick} id="selectBtn">
              {selectBtnText}
              <SelectBtnIcon>
                <DownOutlined />
              </SelectBtnIcon>
            </StyledSelectButton>
            {disp && (
              <StyledSelectMenu id="selectMenu">
                {optionList.map(
                  (el: string, index: number): React.ReactElement => {
                    return (
                      <SelectOption
                        key={index}
                        id={el.value}
                        label={el.label}
                        onClick={optionHandleClick}
                      >
                        {el.label}
                        {selected === el.value && (
                          <SelectOptionIcon>
                            <CheckOutlined />
                          </SelectOptionIcon>
                        )}
                      </SelectOption>
                    );
                  },
                )}
              </StyledSelectMenu>
            )}
          </SelectWrapper>
          <MoneySwitch>
            <MoneyToggleBtn isNow={isNow}></MoneyToggleBtn>
            <MoneyBtn href="#" id="now" onClick={nowBtnHandleClick}>
              현재가
            </MoneyBtn>
            <MoneyBtn href="#" id="evaluate" onClick={nowBtnHandleClick}>
              평가금
            </MoneyBtn>
          </MoneySwitch>
        </FilterWrapper>
      </Header>
      <Article>
        <NoItemIcon>
          <CopyFilled />
        </NoItemIcon>
        <NoItemText>보유 종목이 없어요</NoItemText>
      </Article>
    </Section>
  );
}

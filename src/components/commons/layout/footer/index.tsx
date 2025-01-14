import styled from "@emotion/styled";
import Link from "next/link";

const Wrapper = styled.div`
  width: 100%;
  height: 147px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;

const Nav = styled.nav`
  color: #707a88;
  margin-bottom: 20px;
`;

const NavBtn = styled.a`
  border: 0;
  border-radius: 5px;
  padding: 3px 5px;
  cursor: pointer;
  &:hover {
    background-color: #f1f4f6;
  }
  &.personalInfo {
    font-weight: bold;
  }
`;

const NavSpan = styled.span`
  display: inline-block;
  margin: 0 10px;
  border: 0.5px solid #dadada;
  height: 10px;
`;

const InfoBox = styled.div`
  color: #8b95a1;
  margin: 8px 0;
`;

const InfoText = styled.span`
  padding: 0px 10px;
`;

const WarnText = styled.p`
  color: #8b95a1;
`;

export default function LayoutFooter() {
  return (
    <Wrapper>
      <Nav>
        <Link href={"/"} passHref>
          <NavBtn className="personalInfo">개인정보 처리방침</NavBtn>
        </Link>
        <NavSpan />
        <Link href={"/"} passHref>
          <NavBtn>고객센터 1599-7987</NavBtn>
        </Link>
        <NavSpan />
        <Link href={"/"} passHref>
          <NavBtn>공지사항</NavBtn>
        </Link>
        <NavSpan />
        <Link href={"/"} passHref>
          <NavBtn>자주 묻는 질문</NavBtn>
        </Link>
        <NavSpan />
        <Link href={"/"} passHref>
          <NavBtn>투자 유의사항</NavBtn>
        </Link>
        <NavSpan />
        <Link href={"/"} passHref>
          <NavBtn>이용자권리 및 유의사항</NavBtn>
        </Link>
        <NavSpan />
        <Link href={"/"} passHref>
          <NavBtn>신용정보 활용체제</NavBtn>
        </Link>
        <NavSpan />
        <Link href={"/"} passHref>
          <NavBtn>토스증권(주)</NavBtn>
        </Link>
      </Nav>
      <InfoBox>
        <InfoText>사업자 등록번호 : 519-87-01431</InfoText>
        <InfoText>대표 : 김규빈</InfoText>
        <InfoText>
          주소 : 06133 서울특별시 강남구 테헤란로 133, 4층 (역삼동, 한국타이어)
        </InfoText>
      </InfoBox>
      <WarnText>
        토스증권에서 제공하는 투자 정보는 고객의 투자 판단을 위한 단순 참고용일
        뿐, 투자 제안 및 권유, 종목 추천을 위해 작성된 것이 아닙니다.
      </WarnText>
    </Wrapper>
  );
}

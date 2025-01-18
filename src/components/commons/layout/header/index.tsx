import styled from "@emotion/styled";
import { SearchOutlined } from "@ant-design/icons";
import Link from "next/link";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 10001;
  display: flex;
  align-items: center;
  padding: 0 36px 0 20px;
  background-color: white;
`;

const H1 = styled.h1`
  width: 80px;
  height: 20px;
`;

const LogoBtn = styled.a`
  display: block;
  width: 100%;
  height: 100%;
`;

const Logo = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const Nav = styled.nav`
  flex-grow: 1;
  text-align: center;
  font-size: 15px;
`;

const NavBtn = styled.a`
  padding: 10px;
  margin: 0px 5px;
  font-weight: bold;
  color: #6b7684;
  &:hover {
    color: #333d4b;
  }
`;

const SearchBtn = styled.button`
  width: 200px;
  padding: 8px 15px;
  text-align: left;
  font-size: 15px;
  color: #8b95a1;
  background-color: #f3f4f5;
  border: 0;
  border-radius: 20px;
  margin-left: 10px;
  cursor: pointer;
`;

const SlashBox = styled.div`
  display: inline-block;
  border: 1px solid #d6dade;
  background-color: #eeeff1;
  border-radius: 4px;
  padding: 2px 7px 1px 7px;
  margin-left: 10px;
`;

const LoginBtn = styled.button`
  width: 60px;
  height: 30px;
  border-radius: 7px;
  border: 0;
  color: white;
  background-color: #2371eb;
  font-weight: bold;
  cursor: pointer;
`;

export default function LayoutHeader(): React.ReactElement {
  return (
    <HeaderWrapper>
      <H1>
        <Link href={"/"} passHref>
          <LogoBtn>
            <Logo src="./assets/images/logo_black.png" alt="토스증권" />
          </LogoBtn>
        </Link>
      </H1>
      <Nav>
        <Link href={"/home"} passHref>
          <NavBtn>홈</NavBtn>
        </Link>
        <Link href={"/"} passHref>
          <NavBtn>뉴스</NavBtn>
        </Link>
        <Link href={"/"} passHref>
          <NavBtn>주식 골라보기</NavBtn>
        </Link>
        <Link href={"/"} passHref>
          <NavBtn>내 계좌</NavBtn>
        </Link>
        <SearchBtn type="button">
          <SearchOutlined />
          <SlashBox>/</SlashBox> 를 눌러 검색하세요
        </SearchBtn>
      </Nav>
      <LoginBtn type="button">로그인</LoginBtn>
    </HeaderWrapper>
  );
}

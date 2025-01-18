import { imgNewsItems } from "@/src/commons/stores/imgNewsItems";
import { newsItems } from "@/src/commons/stores/newsItems";
import styled from "@emotion/styled";
import Link from "next/link";

const IMAGE_PATH = "./assets/images/";

const NewsSection = styled.section`
  width: 100%;
  margin-bottom: 75px;
`;

const NewsHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const H2 = styled.h2`
  font-size: 20px;
`;

const More = styled.button`
  border: 0;
  border-radius: 5px;
  padding: 0 5px;
  background-color: transparent;
  color: #6b7684;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background-color: #f1f4f6;
  }
  transition: background-color 200ms ease-in-out;
`;

const ImgNewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 20px;
`;

const Article = styled.article`
  width: 100%;
  padding-right: 15px;
  &:last-child {
    padding: 0;
  }
`;

const ImgNewsALink = styled.a`
  display: block;
  width: 100%;
  line-height: 1.5;
  font-size: 14px;
  &:hover img {
    transform: scale(1.05);
  }
`;

const ImgBox = styled.div`
  width: 100%;
  height: 135px;
  border-radius: 10px;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: transform 200ms ease-in-out;
`;

const Title = styled.h2`
  margin-top: 7px;
  font-size: 15px;
  font-weight: normal;
  line-height: 1.5;
  word-break: break-all;
`;

const Hour = styled.span`
  color: #6b7684;
`;

const Newspaper = styled.span`
  color: #6b7684;
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  & h2 {
    display: inline-block;
    margin: 0 10px 5px 0;
  }
`;

export default function News(): React.ReactElement {
  return (
    <NewsSection>
      <NewsHeader>
        <H2>주요 뉴스</H2>
        <More type="button">더 보기</More>
      </NewsHeader>
      <ImgNewsGrid>
        {imgNewsItems.map((el, index) => (
          <Article key={index}>
            <Link href={"/"} passHref>
              <ImgNewsALink>
                <ImgBox>
                  <Img src={`${IMAGE_PATH}/${el.img}`} alt="뉴스 이미지" />
                </ImgBox>
                <Title>{el.title}</Title>
                <Hour>{el.hour}시간 전 ・ </Hour>
                <Newspaper>{el.newspaper}</Newspaper>
              </ImgNewsALink>
            </Link>
          </Article>
        ))}
      </ImgNewsGrid>
      <NewsGrid>
        {newsItems.map((el, index) => (
          <Article key={index}>
            <Link href={"/"} passHref>
              <ImgNewsALink>
                <Title>{el.title}</Title>
                <Hour>{el.hour}시간 전 ・ </Hour>
                <Newspaper>{el.newspaper}</Newspaper>
              </ImgNewsALink>
            </Link>
          </Article>
        ))}
      </NewsGrid>
    </NewsSection>
  );
}

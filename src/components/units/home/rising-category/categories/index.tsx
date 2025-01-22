import { domesticForeignState } from "@/src/commons/atom/domesticForeignState";
import { ICategoriesProps } from "@/src/commons/types/types";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRecoilValue } from "recoil";

const Article = styled.article`
  margin-top: 20px;
`;
const Ul = styled.ul<{
  domesticForeign: string;
}>`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => (props.domesticForeign === "allFilter" ? 1 : 2)},
    minmax(10px, 1fr)
  );
  grid-template-rows: repeat(3, max-content);
  grid-auto-flow: column;
  row-gap: 16px;
  column-gap: 32px;
  list-style-type: none;
`;
const ALink = styled.a`
  display: grid;
  grid-template-columns: 100px 1fr;
  column-gap: 16px;
  align-items: center;
  &:hover .img-box img {
    transform: scale(0.7);
  }
`;
const ImgBox = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border: 0;
  border-radius: 10px;
  background-color: #c9e2ff;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(0.6);
  transition: transform 200ms ease-in-out;
`;
const RankTitleBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;
const Rank = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #3182f6;
  margin-right: 10px;
`;
const Title = styled.div`
  font-weight: bold;
`;
const CategoryRate = styled.div`
  font-size: 22px;
  font-weight: bold;
  color: #f04351;
  margin-bottom: 5px;
`;
const RisingWinBox = styled.div`
  display: flex;
  align-items: center;
`;
const RisingText = styled.div`
  color: #6b7684;
  font-size: 14px;
  word-break: keep-all;
`;
const Line = styled.div`
  width: 1px;
  height: 15px;
  background-color: #ddd;
  margin: 0 8px;
`;
const WinBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  border: 0;
  border-radius: 5px;
  padding: 3px;
  word-break: keep-all;
  background-color: transparent;
  &:hover {
    background-color: #f1f4f6;
  }
  transition: background-color 200ms ease-in-out;
`;
const WinIcon = styled.img`
  display: block;
  width: 15px;
  height: 15px;
`;
const WinRate = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #f04351;
`;

export default function Categories({
  itemList,
}: ICategoriesProps): React.ReactElement {
  const domesticForeign = useRecoilValue(domesticForeignState);

  return (
    <Article>
      <Ul domesticForeign={domesticForeign}>
        {itemList.map((el, index) => (
          <li key={index}>
            <Link href={"/"} passHref>
              <ALink>
                <ImgBox className="img-box">
                  <Img
                    src={`./assets/images/${el.img}`}
                    alt="카테고리 이미지"
                  />
                </ImgBox>
                <div>
                  <RankTitleBox>
                    <Rank>{el.rank}위</Rank>
                    <Title>{el.title}</Title>
                  </RankTitleBox>
                  <CategoryRate>{el.categoryRate}%</CategoryRate>
                  <RisingWinBox>
                    <RisingText>
                      {el.categoryTotal}개 종목 중 {el.categoryRiseCnt}개 상승
                    </RisingText>
                    <Line />
                    <WinBtn type="button">
                      <WinIcon src="./assets/images/win.png" alt="1위 아이콘" />
                      {el.winner}
                      <WinRate>
                        {el.winRate > 0 ? `+${el.winRate}` : el.winRate}%
                      </WinRate>
                    </WinBtn>
                  </RisingWinBox>
                </div>
              </ALink>
            </Link>
          </li>
        ))}
      </Ul>
    </Article>
  );
}

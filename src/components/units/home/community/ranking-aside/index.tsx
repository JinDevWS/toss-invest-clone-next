import { domesticForeignState } from "@/src/commons/atom/domesticForeignState";
import { useGetItemsKrOrUs } from "@/src/commons/hooks/useGetItemsKrOrUs";
import styled from "@emotion/styled";
import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

const ICON_IMG_PATH = "./assets/images/community/";
const US_IMG_PATH = "./assets/images/";

const Aside = styled.aside``;
const Ul = styled.ul``;
const Li = styled.li``;
const Button = styled.button``;
const IconBox = styled.div``;
const Img = styled.img``;
const UsIcon = styled.img``;

export default function RankingAside(): React.ReactElement {
  const domesticForeign = useRecoilValue(domesticForeignState);
  const [itemList, setItemList] = useState<DocumentData[]>([]);

  const domeCommuRankList = useGetItemsKrOrUs(
    "community",
    "order",
    "asc",
    "kr",
    5,
  );
  const foreCommuRankList = useGetItemsKrOrUs(
    "community",
    "order",
    "asc",
    "us",
    5,
  );

  useEffect(() => {
    if (domesticForeign === "domesticFilter") setItemList(domeCommuRankList);
    else setItemList(foreCommuRankList);
  }, [domesticForeign]);

  return (
    <Aside>
      <Ul>
        {itemList.map((el) => (
          <Li key={el._id}>
            <Button type="button">
              <IconBox>
                <Img src={`${ICON_IMG_PATH}${el.img}`} alt="주식 종목 이미지" />
                {el.krOrUs === "us" && (
                  <UsIcon src={`${US_IMG_PATH}us.png`} alt="미국 주식" />
                )}
              </IconBox>
            </Button>
          </Li>
        ))}
      </Ul>
    </Aside>
  );
}

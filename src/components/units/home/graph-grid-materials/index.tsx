import Link from "next/link";
import * as GGI from "@/styles/graph-grid/GraphGridItems";
import {
  materialsItemIds,
  materialsItems,
} from "@/src/commons/stores/materialsItems";
import styled from "@emotion/styled";

const Space = styled.div`
  width: 40px;
`;

export default function GraphGridMaterials() {
  const gridItems = materialsItems;

  return (
    <GGI.GridUl>
      {materialsItemIds.map((el) => {
        return (
          <GGI.GridLi key={el}>
            <Link href={"/"} passHref>
              <GGI.GridBtn>
                <GGI.GridItemBox>
                  <GGI.GridItemTitle>{gridItems[el].title}</GGI.GridItemTitle>
                  <GGI.GridItemPrice>{gridItems[el].price}</GGI.GridItemPrice>
                  <GGI.GridItemChangedBox
                    changedPrice={gridItems[el].changedPrice}
                  >
                    <span>
                      {gridItems[el].changedPrice > 0 ? `+` : ``}
                      {gridItems[el].changedPrice}
                    </span>
                    <span>{` (${gridItems[el].changedRate}%)`}</span>
                  </GGI.GridItemChangedBox>
                </GGI.GridItemBox>
                <Space />
              </GGI.GridBtn>
            </Link>
          </GGI.GridLi>
        );
      })}
    </GGI.GridUl>
  );
}

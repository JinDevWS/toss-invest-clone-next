import { domesticForeignState } from "@/src/commons/atom/domesticForeignState";
import {
  bondItemIdsKr,
  bondItemIdsUs,
  bondItems,
} from "@/src/commons/stores/bondItems";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import * as GGI from "@/styles/graph-grid/GraphGridItems";

export default function GraphGridBond() {
  const domesticForeignAll = useRecoilValue(domesticForeignState);
  const gridItems = bondItems;
  const [bondItemIds, setBondItemIds] = useState<string[]>(bondItemIdsUs);

  useEffect(() => {
    if (domesticForeignAll === "domesticFilter") setBondItemIds(bondItemIdsKr);
    else setBondItemIds(bondItemIdsUs);
  }, [domesticForeignAll]);

  return (
    <GGI.GridUl>
      {bondItemIds.map((el) => {
        return (
          <GGI.GridLi key={el}>
            <Link href={"/"} passHref>
              <GGI.GridBtn>
                <GGI.GridItemBox>
                  <GGI.GridItemTitle>
                    {gridItems[el].title}
                    <GGI.ImgIcon
                      src={`./assets/images/${gridItems[el].krOrUs}.png`}
                    />
                  </GGI.GridItemTitle>
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
              </GGI.GridBtn>
            </Link>
          </GGI.GridLi>
        );
      })}
    </GGI.GridUl>
  );
}

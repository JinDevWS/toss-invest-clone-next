import { domesticForeignState } from "@/src/commons/atom/domesticForeignState";
import {
  stockIndexItemIdsKr,
  stockIndexItemIdsUs,
  stockIndexItems,
} from "@/src/commons/stores/stockIndexItems";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import NasdaqGraph from "@/public/assets/images/svgs/nasdaq-graph.svg";
import * as GGI from "@/styles/graph-grid/GraphGridItems";

export default function GraphGridStockIndex() {
  const domesticForeignAll = useRecoilValue(domesticForeignState);
  const gridItems = stockIndexItems;
  const [stockIndexItemIds, setStockIndexItemIds] =
    useState<string[]>(stockIndexItemIdsUs);

  useEffect(() => {
    if (domesticForeignAll === "domesticFilter")
      setStockIndexItemIds(stockIndexItemIdsKr);
    else setStockIndexItemIds(stockIndexItemIdsUs);
  }, [domesticForeignAll]);

  return (
    <GGI.GridUl>
      {stockIndexItemIds.map((el) => {
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
                <GGI.Graph changedPrice={gridItems[el].changedPrice}>
                  <NasdaqGraph />
                </GGI.Graph>
              </GGI.GridBtn>
            </Link>
          </GGI.GridLi>
        );
      })}
    </GGI.GridUl>
  );
}

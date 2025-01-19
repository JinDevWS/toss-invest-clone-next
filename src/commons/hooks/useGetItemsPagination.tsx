import { app } from "@/firebase";
import {
  collection,
  DocumentData,
  endAt,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  OrderByDirection,
  query,
  startAt,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export function useGetItemsPagination(
  collectionName: string,
  order: string,
  sort: OrderByDirection,
  limitNum: number,
  page: number,
): DocumentData[] {
  const [items, setItems] = useState<DocumentData[]>([]);
  const db = getFirestore(app);

  useEffect(() => {
    const fetchData = async () => {
      // 처음에 100개 다 불러오기
      const first = query(
        collection(db, collectionName),
        orderBy(order, sort),
        limit(100),
      );
      const documentSnapshots = await getDocs(first);

      // 예) 3페이지 => 0+21 ~ 9+21 => 0+(((3-1) * 10) + 1) ~ (10-1)+(((3-1) * 10) + 1)
      // 그런데 인덱스는 0부터 시작하므로 pageEndIndex 는 +1을 빼고 적어주기
      const pageStartIndex = (page - 1) * limitNum + 1;
      const pageEndIndex = limitNum - 1 + (page - 1) * limitNum;

      // 특정 페이지의 처음, 마지막으로 보여지는 document 구하기
      const pageFirstVisible = documentSnapshots.docs[pageStartIndex];
      const pageLastVisible = documentSnapshots.docs[pageEndIndex];

      // 특정 페이지의 아이템들을 구하기
      const current = query(
        collection(db, collectionName),
        orderBy(order, sort),
        startAt(pageFirstVisible),
        endAt(pageLastVisible),
        limit(limitNum),
      );

      const dataSnapShot = await getDocs(current);
      // id 같은 경우는 추후에 데이터를 수정하거나 삭제할 때 필요함
      // id값을 데이터 필드에 따로 기재하지 않는 이상 함께 반환해주면 좋다.
      const data = dataSnapShot.docs.map((doc) => ({
        _id: doc.id,
        ...doc.data(),
      }));
      setItems(data); // 상태를 업데이트
    };

    fetchData();
  }, [collectionName, order, sort, limitNum, page]);

  return items; // 데이터를 반환
}

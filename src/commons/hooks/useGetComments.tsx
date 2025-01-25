import { app } from "@/firebase";
import {
  collection,
  DocumentData,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  OrderByDirection,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export function useGetComments(
  collectionName: string,
  order: string,
  sort: OrderByDirection,
  community: string,
  limitNum: number,
): DocumentData[] {
  const [items, setItems] = useState<DocumentData[]>([]);
  const db = getFirestore(app);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(
        collection(db, collectionName),
        where("community", "==", community),
        orderBy(order, sort),
        limit(limitNum),
      );
      const dataSnapShot = await getDocs(q);
      // id 같은 경우는 추후에 데이터를 수정하거나 삭제할 때 필요함
      // id값을 데이터 필드에 따로 기재하지 않는 이상 함께 반환해주면 좋다.
      const data = dataSnapShot.docs.map((doc) => ({
        _id: doc.id,
        ...doc.data(),
      }));
      setItems(data); // 상태를 업데이트
    };

    fetchData();
  }, [collectionName, order, sort, community, limitNum]);

  return items; // 데이터를 반환
}

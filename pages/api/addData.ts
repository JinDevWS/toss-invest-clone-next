// 파이어스토어 데이터 추가용 소스코드

import { app } from "@/firebase";
import { doc, getFirestore, setDoc } from "firebase/firestore";

export default async function handler(req, res) {
  const db = getFirestore(app);

  if (req.method === "POST") {
    try {
      const { data } = req.body; // 클라이언트에서 전송한 데이터

      if (!Array.isArray(data)) {
        return res
          .status(400)
          .json({ error: "Invalid data format. Expected an array." });
      }

      // 데이터를 Firestore에 추가
      const promises = data.map((item, index) => {
        const docRef = doc(db, "stocks", `stock-kr-${index}`); // 문서 ID 생성
        return setDoc(docRef, item); // Firestore에 데이터 저장
      });

      await Promise.all(promises); // 모든 데이터 추가 완료
      res.status(200).json({ message: "Data added successfully!" });
    } catch (error) {
      console.error("Error adding data:", error);
      res.status(500).json({ error: "Failed to add data." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

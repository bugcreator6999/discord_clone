import React, { useEffect, useState } from "react";
import {
  onSnapshot,
  collection,
  query,
  DocumentData,
  Query,
} from "firebase/firestore";
import { db } from "../firebase";

interface Channels {
  id: string;
  channel: DocumentData;
}

const useCollection = (data: string) => {
  //   const [channels, setChannels] = useState<Channel[]>([]);
  const [documents, setDocuments] = useState<Channels[]>([]);
  const collectionRef: Query<DocumentData> = query(collection(db, data));

  useEffect(() => {
    onSnapshot(collectionRef, (querySnapshot) => {
      const channlesResults: Channels[] = [];
      querySnapshot.docs.forEach((doc) =>
        channlesResults.push({
          id: doc.id,
          channel: doc.data(),
        })
      );
      setDocuments(channlesResults);
    });
  }, []);

  return { documents };
};

export default useCollection;

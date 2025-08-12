"use client";
import { useEffect, useState } from "react";
import { db } from "@/services/firebaseConnection";
import { getDocs, collection, query, orderBy, onSnapshot } from "firebase/firestore";

type CardProps = {
  id?: string | number;
  titleCard?: string;
  colorCard?: string;
};

export function useGetCards() {
  const [cardsTasks, setCardsTasks] = useState<CardProps[]>([]);

    useEffect(() => {
      const cardsRef = collection(db, "cards");
      const order = query(cardsRef, orderBy("createdAt", "desc"));
    
      const unsubscribe = onSnapshot(order, (snapshot) => {
        let listCards: CardProps[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          titleCard: doc.data().titleCard,
          colorCard: doc.data().colorCard,
        }));

        setCardsTasks(listCards);
      });

      return () => unsubscribe();
    }, []);

  return {
    cardsTasks,
  };
}

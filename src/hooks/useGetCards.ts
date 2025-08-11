"use client";
import { useState } from "react";
import { db } from "@/services/firebaseConnection";
import { getDocs, collection } from "firebase/firestore";

type CardProps = {
  titleCard?: string;
  colorCard?: string;
};

export function useGetCards() {
  const [cardsTasks, setCardsTasks] = useState<CardProps[]>([]);
  let listCards: CardProps[] = [];

  async function fetchCards() {
    getDocs(collection(db, "cards"))
      .then((snapshot) => {
        snapshot.forEach((card) => {
          listCards.push({
            titleCard: card.data()?.titleCard,
            colorCard: card.data()?.colorCard,
          });
        });

        setCardsTasks(listCards);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return {
    cardsTasks,
    fetchCards,
  };
}

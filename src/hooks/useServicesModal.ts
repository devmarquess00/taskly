'use client';

import { useCallback, useState } from "react";

export function useServicesModal() {
  const [colorCard, setColorCard] = useState("");

  const colors = ["#ffffff", "#000000", "#333333", "#dfdfdf", "#2563EB", "#DC2626"];

  const handleColorCard = useCallback((color: string) => {
    setColorCard(color);
    console.log(color);
  }, []);

  return {
    colors,
    handleColorCard,
    colorCard
  }
}

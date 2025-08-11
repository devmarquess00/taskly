"use client";
import { useCallback, useState } from "react";

export function useShowModalCard() {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleShowModal = useCallback(() => {
    setIsShowModal(true);
  }, []);

  const handleRemoveModal = useCallback(() => {
    setIsShowModal(false);
  }, []);

  return {
    isShowModal,
    handleShowModal,
    handleRemoveModal,
  };
}

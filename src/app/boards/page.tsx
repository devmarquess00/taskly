"use client";
import { Card } from "@/components/card";
import HeaderBoards from "@/components/headerBoards";
import { ModalCard } from "@/components/modalCard";
import { Title } from "@/components/title";
import { useShowModalCard } from "@/hooks/useShowModalCard";
import { FaClock } from "react-icons/fa6";

export default function Boards() {
  const { isShowModal, handleShowModal, handleRemoveModal } = useShowModalCard();

  return (
    <div className="bg-zinc-800 h-screen w-full">
      <HeaderBoards onClick={handleShowModal} />
      <ModalCard isShowModal={isShowModal} isRemoveModal={handleRemoveModal} />

      <div className="px-5 md:px-15">
        <div className="flex items-center gap-2 mt-10">
          <Title
            title="Criados recentemente"
            extraClass="text-white font-semibold"
          />
          <FaClock className="text-white" />
        </div>

        <div className="grid grid-cols-2 gap-3 flex-col mt-5 md:grid-cols-5">
          <Card
            titleCard="Card teste"
            extraClassTitleCard="text-xs text-white"
          />
          <Card
            titleCard="Card teste"
            extraClassTitleCard="text-xs text-white"
          />
          <Card
            titleCard="Card teste"
            extraClassTitleCard="text-xs text-white"
          />
          <Card
            titleCard="Card teste"
            extraClassTitleCard="text-xs text-white"
          />
        </div>
      </div>
    </div>
  );
}

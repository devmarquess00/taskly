"use client";
import { Card } from "@/components/card";
import { Cookies } from "@/components/cookies";
import HeaderBoards from "@/components/headerBoards";
import { ModalCard } from "@/components/modalCard";
import ProtectedRoute from "@/components/protectedRoute";
import { Subtitle } from "@/components/subtitle";
import { Title } from "@/components/title";
import { useAddTasks } from "@/hooks/useAddTasks";
import { useCardsActions } from "@/hooks/useCardActions";
import { useGetCards } from "@/hooks/useGetCards";
import { useShowModalCard } from "@/hooks/useShowModalCard";
import { FaClock } from "react-icons/fa6";

export default function Boards() {
  const { isShowModal, handleShowModal, handleRemoveModal } =
    useShowModalCard();
  const { cardsTasks } = useGetCards();
  const { handleDeleteCard } = useCardsActions();

  return (
    <ProtectedRoute>
      <div className="bg-white h-screen w-full">
        <HeaderBoards onClick={handleShowModal} />
        <Cookies
          label="Utilizamos cookies para melhorar sua experiência de navegação com nosso site."
          extraClass="bg-blue-100 text-center text-xs py-2 px-10 md:py-5 2xl:py-7"
          buttonCookie="Politica de Privacidade."
        />
        <ModalCard
          isShowModal={isShowModal}
          isRemoveModal={handleRemoveModal}
        />

        <div className="px-5 md:px-15">
          <div className="flex items-center gap-2 mt-10">
            <Title
              title="Criados recentemente"
              extraClass="text-zinc-800 font-semibold text-sm"
            />
            <FaClock className="text-zinc-800" />
          </div>

          <div className="grid grid-cols-2 gap-3 flex-col mt-5 md:grid-cols-5">
            <>
              {cardsTasks && cardsTasks.length > 0 ? (
                cardsTasks.map((card, index) => (
                  <Card
                    colorCard={{ backgroundColor: card.colorCard }}
                    key={index}
                    titleCard={card.titleCard}
                    id={card.id}
                    extraClassTitleCard="text-xs text-white"
                    onClickDeleteButton={() => handleDeleteCard(card.id)}
                  />
                ))
              ) : (
                <Subtitle
                  subtitle="- Voce ainda nao tem nenhum card adicionado"
                  extraClass="w-full text-xs font-normal"
                />
              )}
            </>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

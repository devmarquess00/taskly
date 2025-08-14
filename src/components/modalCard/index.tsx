"use client";
import { FaXmark } from "react-icons/fa6";
import { Title } from "../title";
import { Button } from "../button";
import { Input } from "../input";
import { Subtitle } from "../subtitle";
import { Cookies } from "../cookies";
import { useAddCardDatabase } from "@/hooks/useAddCardDatabase";

type ModalCardProps = {
  isShowModal?: boolean;
  isRemoveModal?: () => void;
};

export const ModalCard = ({ isShowModal, isRemoveModal }: ModalCardProps) => {

  const {
    titleCard,
    setTitleCard,
    handleCreateCard,
    colors,
    colorCard,
    handleColorCard,
    messageError,
    setMessageError
  } = useAddCardDatabase();

  return (
    <>
      {isShowModal && (
        <div className="z-200 bg-white shadow-md w-xs fixed right-0 -mt-5 md:-mt-15 md:right-7 mr-2 py-3 px-6 rounded-md">
          <div className="flex items-center justify-between">
            <Title title="Criar novo quadro" extraClass="text-zinc-800 text-sm" />
            <Button
              label={<FaXmark className="text-zinc-800 hover:text-white" />}
              onClick={isRemoveModal}
              type="button"
              extraClass="hover:bg-blue-600 hover:!text-white duration-300 p-1.5 rounded-full"
            />
          </div>

          <div className="mt-5">
            <div className="w-full p-10 rounded-t-lg bg-gray-700" style={{ backgroundColor: colorCard || '#4169E1' }}></div>
            <div className="bg-gray-950 rounded-b-lg py-2 px-2">
              <Title
                title={titleCard || 'Segunda-feira'} 
                extraClass="text-white text-xs !font-light"
              />
            </div>
          </div>

          <div className="mt-5">
            <Title
              title="Tela de fundo"
              extraClass="text-gray-400 text-xs font-semibold mb-2"
            />
            <div className="flex gap-1 items-center">

              {colors.map((color, index) => (
                <button
                  key={index}
                  className="w-12 h-8 rounded-md hover:cursor-pointer hover:opacity-55 duration-500"
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorCard(color)}
                ></button>
              ))}
            </div>
            <Input
            type="text"
            extraClassLabel="!text-gray-400 text-sm font-semibold mb-1 mt-4"
            extraClass="border border-gray-400 rounded-sm text-black"
            label="Titulo do Quadro"
            placeholder="Titulo do quadro..."
            value={titleCard}
            onChange={(event) => {
              const valueInput = event.target.value;

              if (valueInput.length === 16 ) {
                setMessageError('Máximo de 16 caracteres!')
                return;
              } else {
                setTitleCard(valueInput);
                setMessageError('')
              }
            }}
            />

            {messageError && (
              <Subtitle
              subtitle={messageError}
              extraClass="text-xs text-red-700 mt-1.5 !font-normal"
              />
            )}

            <Subtitle
            subtitle="Ao criar o card ele ficará salvo em 'Criados recentemente'. Para verificar as tarefas dentro dele clique no ícone de olho que está localizado no card."
            extraClass="!font-normal leading-4 text-gray-400 text-start text-xs mt-2 mb-3"
            />
            <Button
            type="button"
            label="Criar"
            extraClass="w-full bg-blue-600 hover:bg-blue-700 duration-600 py-2 rounded-sm text-white text-center flex items-center justify-center text-sm"
            onClick={handleCreateCard}
            />
            <Cookies
            label="Ao criar o template você concorda com nossa"
            buttonCookie="politica de privacidade"
            extraClassButtonCookie="!inline !underline"
            extraClass="text-xs mt-3 mb-5 text-gray-400"
            />
          </div>
        </div>
      )}
    </>
  );
};


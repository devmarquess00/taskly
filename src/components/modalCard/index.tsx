"use client";
import { FaXmark } from "react-icons/fa6";
import { Title } from "../title";
import { Button } from "../button";
import { useServicesModal } from "@/hooks/useServicesModal";
import { Input } from "../input";
import { Subtitle } from "../subtitle";
import { Cookies } from "../cookies";

type ModalCardProps = {
  isShowModal?: boolean;
  isRemoveModal?: () => void;
};

export const ModalCard = ({ isShowModal, isRemoveModal }: ModalCardProps) => {

  const { colors, handleColorCard, colorCard } = useServicesModal();

  return (
    <>
      {isShowModal && (
        <div className="bg-zinc-900 w-xs fixed right-0 mt-3 mr-2 py-3 px-6 rounded-md">
          <div className="flex items-center justify-between">
            <Title title="Criar novo quadro" extraClass="text-white text-sm" />
            <Button
              label={<FaXmark className="text-white" />}
              onClick={isRemoveModal}
              extraClass="hover:bg-zinc-800 duration-300 p-1.5 rounded-full"
            />
          </div>

          <div className="mt-5">
            <div className="w-full p-10 rounded-t-lg bg-gray-700" style={{ backgroundColor: colorCard }}></div>
            <div className="bg-gray-950/50 rounded-b-lg py-2 px-2">
              <Title
                title="Segunda-feira"
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
            extraClass="border border-gray-400 rounded-sm text-white"
            label="Titulo do Quadro"
            placeholder="Titulo do quadro..."
            />
            <Subtitle
            subtitle="Ao criar o card ele ficará salvo em 'Criados recentemente'. Para verificar as tarefas dentro dele clique no ícone de olho que está localizado no card."
            extraClass="!font-normal leading-4 text-gray-400 text-start text-xs mt-4 mb-3"
            />
            <Button
            label="Criar"
            extraClass="w-full bg-zinc-950/35 hover:bg-zinc-950/30 duration-600 py-2 rounded-sm text-white text-center flex items-center justify-center text-sm"
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


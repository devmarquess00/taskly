import { FaXmark } from "react-icons/fa6";
import { Button } from "../button";
import { Subtitle } from "../subtitle";

type MoreInfos = {
    onClickMoreInfos?: () => void;
}

export const MoreInfos = ({
    onClickMoreInfos
}: MoreInfos) => {
  return (
    <div className="z-200 absolute -right-8 md:-right-22 top-8 bg-zinc-800 p-4 rounded-md border border-gray-600 w-[15rem]">
      <div className="flex items-center justify-between">
        <Subtitle
          subtitle="Ações da Lista"
          extraClass="text-xs text-white !font-normal"
        />
        <Button
          type="button"
          extraClass="hover:bg-zinc-700 rounded-full duration-400 p-1 text-white"
          onClick={onClickMoreInfos}
          icon={<FaXmark />}
        />
      </div>

      <div className="flex flex-col">
        <Button
        type="button"
        label="Marcar como concluído"
        extraClass="flex justify-start w-full text-xs text-white hover:bg-zinc-700 mt-2 py-2 px-2 duration-500 border-b border-zinc-700" 
        />
        <Button
        type="button"
        label="Excluir todas as tarefas"
        extraClass="flex justify-start w-full text-xs text-white hover:bg-zinc-700 mt-2 py-2 px-2 duration-500 border-b border-zinc-700" 
        />
      </div>
    </div>
  );
};

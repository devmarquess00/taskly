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
    <div className="z-200 absolute -right-8 md:-right-22 top-8 bg-white shadow-lg p-4 rounded-md border border-gray-300 w-[15rem]">
      <div className="flex items-center justify-between">
        <Subtitle
          subtitle="Ações da Lista"
          extraClass="text-xs text-zinc-800 !font-normal"
        />
        <Button
          type="button"
          extraClass="hover:bg-blue-600 hover:text-white rounded-full duration-400 p-1 text-zinc-800"
          onClick={onClickMoreInfos}
          icon={<FaXmark />}
        />
      </div>

      <div className="flex flex-col">
        <Button
        type="button"
        label="Marcar como concluído"
        extraClass="flex justify-start w-full text-xs text-zinc-800 mt-2 py-2 px-2 duration-500 border-b border-gray-300" 
        />
        <Button
        type="button"
        label="Excluir todas as tarefas"
        extraClass="flex justify-start w-full text-xs text-zinc-800 mt-2 py-2 px-2 duration-500 border-b border-gray-300" 
        />
      </div>
    </div>
  );
};

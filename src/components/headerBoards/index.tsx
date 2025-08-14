import { FaClipboardList, FaPlus } from "react-icons/fa6";
import { Title } from "../title";
import { Button } from "../button";

type HeaderBoardsProps = {
    onClick?: () => void;
}

export default function HeaderBoards ({
    onClick,
}: HeaderBoardsProps) {
    return (
        <header className="w-full px-6 py-4 md:px-10 flex items-center justify-between 2xl:py-8">
            <div className="flex items-center gap-2">
                <div className="bg-blue-600 p-2 rounded md 2xl:p-3">
                <FaClipboardList
                className="text-white text-lg md:text-2xl 2xl:text-3xl"
                />
                </div>
            <Title
            title="Taskly"
            extraClass="text-xl !text-zinc-800 md:text-3xl font-semibold 2xl:text-4xl"
            />
            </div>
            <Button
            type="button"
            label="Criar novo"
            icon={<FaPlus className="font-semibold" />}
            extraClass="bg-blue-600 text-white text-xs py-2 px-3 rounded-sm flex items-center justify-center gap-3 2xl:py-4 2xl:px-6 2xl:text-sm"
            onClick={onClick}
            />
        </header>
    )
}
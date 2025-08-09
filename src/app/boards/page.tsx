import HeaderBoards from "@/components/headerBoards";
import { Title } from "@/components/title";
import { FaClock } from 'react-icons/fa6';

export default function Boards () {
    return (
        <div className="bg-zinc-800 h-screen w-full">
            <HeaderBoards />

            <div className="flex items-center gap-2 m-5">
                <Title
                title="Criados recentemente"
                extraClass="text-white font-semibold"
                />
                <FaClock />
            </div>
        </div>
    )
}
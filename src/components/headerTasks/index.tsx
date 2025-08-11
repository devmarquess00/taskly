import { FaArrowLeft } from "react-icons/fa6"
import { Title } from "../title"
import Link from "next/link"

export const HeaderTasks = () => {
    return (
        <header className="w-full px-6 py-4 md:px-10 flex items-center justify-between 2xl:py-8 border-b border-zinc-600">
            <Link href='/boards' className="border border-gray-400 py-1.5 px-2 rounded-sm w-[4rem] flex justify-center items-center">
                <FaArrowLeft 
                className="text-lg text-white"
                />
            </Link>
            <Title
            title="Taskly"
            extraClass="text-xl !text-white md:text-3xl font-semibold 2xl:text-4xl"
            />
        </header>
    )
}
import { FaArrowLeft, FaClipboardList } from "react-icons/fa6"
import { Title } from "../title"
import Link from "next/link"

export const HeaderTasks = () => {
    return (
        <header className="w-full px-6 py-4 md:px-10 flex items-center justify-between 2xl:py-8 bg-white">
            <div className="flex items-center gap-2">
                <div className="bg-blue-600 p-2 rounded-md 2xl:p-3">
                <FaClipboardList 
                className="text-white text-lg text-2xl 2xl:text-3xl"
                />
                </div>
                <Title
                title='Taskly'
                extraClass='text-xl md:text-3xl font-semibold text-gray-700 mr-6 2xl:text-4xl'
                />
            </div>
            <Link href='/boards' className="bg-blue-600 py-1.5 px-2 rounded-sm w-[4rem] flex justify-center items-center outline-none">
                <FaArrowLeft 
                className="text-lg text-white"
                />
            </Link>
        </header>
    )
}
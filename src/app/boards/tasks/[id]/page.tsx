'use client';
import { Button } from "@/components/button";
import { HeaderTasks } from "@/components/headerTasks";
import { Input } from "@/components/input";
import { Subtitle } from "@/components/subtitle";
import { Title } from "@/components/title";
import { useAddTasks } from "@/hooks/useAddTasks";
import { tasksCard } from "@/menus/tasksCard";
import { FaPlus, FaXmark } from "react-icons/fa6";

export default function Tasks ({cardId}: { cardId: string }) {

    const { newTaskTitle,
    handleShowInput, 
    showInput, 
    setNewTaskTitle, 
    handleShowMoreInfos, 
    showMoreInfos,
    handleRemoveMoreInfos
} = useAddTasks(cardId);

    return (
        <div className="bg-zinc-800 h-screen w-full">
            <HeaderTasks />   

            <div className="px-10 py-5 flex gap-10 overflow-x-auto w-full">
                <div className="flex gap-10 w-max mt-5">
                    
                    {tasksCard.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.id} className="bg-zinc-900 py-4 px-6 w-[18rem] rounded-lg flex flex-col">
                                <div className="flex items-center justify-between relative">
                                    <Title
                                    title={item.title}
                                    extraClass="text-white text-sm"
                                    />
                                    <Button
                                    type="button"
                                    extraClass="hover:bg-zinc-700 rounded-full duration-400 p-1"
                                    onClick={() => handleShowMoreInfos(item.id.toString())}
                                    label={<Icon className="text-white" />}
                                    />

                                    {showMoreInfos === item.id.toString() && (
                                        <div className="absolute -right-12 md:-right-22 top-8 bg-zinc-800 p-4 rounded-md border 
                                        border-gray-600 w-[15rem]">
                                            <div className="flex items-center justify-between">
                                                <Subtitle
                                                subtitle="Ações da Lista"
                                                extraClass="text-xs text-white !font-normal"
                                                />
                                                <Button
                                                type="button"
                                                extraClass="hover:bg-zinc-700 rounded-full duration-400 p-1 text-white"
                                                onClick={handleRemoveMoreInfos}
                                                label={<FaXmark />}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="flex items-center justify-start gap-1 !bg-zinc-800 py-2.5 px-2 rounded-lg mt-5">
                                    <Input
                                    type="radio"
                                    extraClass="mb-1 p-3"
                                    />
                                    <Subtitle
                                    subtitle="Estudar JavaScript hoje"
                                    extraClass="text-sm text-gray-300 !font-normal"
                                    />
                                </div>
                                {showInput === item.id.toString() ? (
                                    <div className="flex flex-col">
                                        <Input
                                        type="text"
                                        extraClass="border-1 border-gray-400 p-2 mt-3 rounded-sm text-white"
                                        onChange={(event) => setNewTaskTitle(event.target.value)}
                                        />
                                        <Button
                                        type="button"
                                        icon={<FaPlus />}
                                        extraClass="flex items-center justify-center bg-blue-600 w-[3rem] rounded-sm px-2 py-1 mt-2 text-white"
                                        />
                                    </div>
                                ) : (
                                    <Button
                                    type="button"
                                    icon={<FaPlus />}
                                    label="Adicionar novo"
                                    extraClass="flex items-center gap-2 mt-3 text-gray-400 text-sm"
                                    onClick={() => handleShowInput(item.id.toString())}
                                    />
                                )}
                            </div>
                        )
                    })}

                </div>    
            </div>   
        </div>
    )
}
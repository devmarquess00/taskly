import { Button } from "@/components/button";
import { HeaderTasks } from "@/components/headerTasks";
import { Input } from "@/components/input";
import { Subtitle } from "@/components/subtitle";
import { Title } from "@/components/title";
import { tasksCard } from "@/menus/tasksCard";
import { FaPlus } from "react-icons/fa6";

export default function Tasks () {

    return (
        <div className="bg-zinc-800 h-screen w-full">
            <HeaderTasks />   

            <div className="px-10 py-5 flex gap-10 overflow-x-auto w-full">
                <div className="flex gap-10 w-max mt-5">
                    
                    {tasksCard.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.id} className="bg-zinc-900 py-4 px-6 w-[18rem] rounded-lg flex flex-col">
                                <div className="flex items-center justify-between">
                                    <Title
                                    title={item.title}
                                    extraClass="text-white text-sm"
                                    />
                                    <Icon className="text-white" />
                                </div>

                                <div className="flex items-center gap-1 !bg-zinc-800 py-2.5 px-2 rounded-lg mt-5">
                                    <Input
                                    type="radio"
                                    extraClass="mb-1 p-3"
                                    />
                                    <Subtitle
                                    subtitle="Estudar JavaScript hoje"
                                    extraClass="text-sm text-gray-300 !font-normal"
                                    />
                                </div>
                                <Button
                                icon={<FaPlus />}
                                label="Adicionar novo"
                                extraClass="flex items-center gap-2 mt-3 text-gray-400 text-sm"
                                />
                            </div>
                        )
                    })}

                </div>    
            </div>   
        </div>
    )
}
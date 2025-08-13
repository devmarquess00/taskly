'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Button } from "@/components/button";
import { HeaderTasks } from "@/components/headerTasks";
import { Input } from "@/components/input";
import { Subtitle } from "@/components/subtitle";
import { Title } from "@/components/title";
import { useAddTasks } from "@/hooks/useAddTasks";
import { tasksCard } from "@/menus/tasksCard";
import { FaArrowLeft, FaPlus, FaTrash, FaXmark } from "react-icons/fa6";
import { MoreInfos } from '@/components/moreInfos';
import { Textarea } from '@/components/textarea';

export default function Tasks() {
    const params = useParams();
    const cardId = params.id;

    if (!cardId || Array.isArray(cardId)) {
        return <p>Card nao encontrado</p>
    }

  const {
    newTaskTitle,
    handleShowInput,
    showInput,
    setNewTaskTitle,
    handleRemoveInput,
    handleShowMoreInfos,
    showMoreInfos,
    handleRemoveMoreInfos,
    fetchTasks,
    handleAddTask,
    tasks,
    handleDeleteTask
  } = useAddTasks(cardId);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div className="bg-zinc-800 h-screen w-full">
      <HeaderTasks />

      <div className="px-10 py-5 flex justify-center w-full">
        <div className="flex gap-10 w-full mt-5">
          {tasksCard.map((item) => {
            const Icon = item.icon;
            const columnId = item.id.toString();

            return (
              <div
                key={columnId}
                className="bg-zinc-900 py-4 px-4 w-full md:w-[80vh] 2xl:w-[50vh] rounded-lg flex flex-col"
              >
                <div className="flex items-center justify-between relative mb-3 border-b border-gray-500 pb-3">
                  <Title
                    title={item.title}
                    extraClass="text-white text-sm"
                  />
                  <Button
                    type="button"
                    extraClass="hover:bg-zinc-700 rounded-full duration-400 p-1"
                    onClick={() => handleShowMoreInfos(columnId)}
                    label={<Icon className="text-white" />}
                  />

                  {showMoreInfos === columnId && (
                    <MoreInfos
                    onClickMoreInfos={handleRemoveMoreInfos}
                     />
                  )}
                </div>

                {tasks
                  .filter((task) => task.columnId === columnId)
                  .map((task) => (
                    <div
                      key={task.id}
                      className="relative flex justify-between items-center bg-zinc-800 py-2.5 px-2 rounded-lg mt-2 mb-2 md:mb-3"
                    >
                      <div className='flex'>
                        <Subtitle
                        subtitle={task.title}
                        extraClass="text-xs text-gray-300 !font-normal leading-4 px-1 md:py-2 md:px-2.5"
                        />
                        <Button
                        type="button"
                        extraClass='text-white text-sm absolute -top-4 -right-3 m-2 !bg-zinc-700 p-1 md:p-1.5 rounded-full' 
                        icon={<FaTrash />}
                        onClick={() => handleDeleteTask(task.id)}
                        />
                      </div>
                    </div>
                  ))}

                {showInput === columnId ? (
                  <div className="flex flex-col justify-center">
                    <Textarea
                    value={newTaskTitle}
                    onChange={(event) => setNewTaskTitle(event.target.value)}
                    extraClass='border-1 border-gray-400 p-4 mt-1 md:mt-0 rounded-sm text-white text-xs md:text-sm'
                    placeholder='Digite sua nova tarefa aqui...'
                    />
                    <div className='flex items-center gap-2'>
                        <Button
                        type="button"
                        icon={<FaPlus />}
                        onClick={() => handleAddTask(columnId)}
                        extraClass="flex items-center justify-center bg-blue-600 w-[3rem] rounded-sm px-2 py-1 mt-2 text-white"
                        />
                        <Button
                        type="button"
                        label="Cancelar"
                        onClick={handleRemoveInput}
                        extraClass='bg-red-600 text-white mt-2 py-1 px-2 rounded-sm text-xs'
                        />
                    </div>
                  </div>
                ) : (
                  <Button
                    type="button"
                    icon={<FaPlus />}
                    label="Adicionar novo"
                    extraClass="flex justify-start ml-1 gap-2 mt-3 text-gray-400 text-sm"
                    onClick={() => handleShowInput(columnId)}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

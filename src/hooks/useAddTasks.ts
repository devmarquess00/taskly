'use client'
import { useCallback, useState } from 'react';


export function useAddTasks (cardId: string) {
    const [tasks, setTasks] = useState([]);
    const [newTaskTitle, setNewTaskTitle] = useState("")
    const [showInput, setShowInput] = useState<string | null>(null);
    const [showMoreInfos, setShowMoreInfos] = useState<string | null | boolean>(null);

    const handleShowInput = useCallback((id: string) => {
        setShowInput(id);
    }, [])

    const handleShowMoreInfos = useCallback((id: string) => {
        setShowMoreInfos(id);
    }, [])

    const handleRemoveMoreInfos = useCallback(() => {
        setShowMoreInfos(false)
    }, [])

    return {
        tasks,
        newTaskTitle,
        setNewTaskTitle,
        showInput,
        handleShowInput,
        showMoreInfos,
        handleShowMoreInfos,
        handleRemoveMoreInfos
    }
}
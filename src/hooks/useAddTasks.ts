'use client'
import { useCallback, useState } from 'react';


export function useAddTasks (cardId: string) {
    const [tasks, setTasks] = useState([]);
    const [newTaskTitle, setNewTaskTitle] = useState("")
    const [showInput, setShowInput] = useState<string | null>(null);

    const handleShowInput = useCallback((id: string) => {
        setShowInput(id);
    }, [])

    return {
        tasks,
        newTaskTitle,
        setNewTaskTitle,
        showInput,
        handleShowInput
    }
}
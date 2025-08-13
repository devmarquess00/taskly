'use client'
import { useCallback, useState } from 'react';
import { addDoc, collection, getDocs, query, Timestamp, where, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/services/firebaseConnection';

export function useAddTasks (cardId: string) {
    const [tasks, setTasks] = useState<any[]>([]);
    const [newTaskTitle, setNewTaskTitle] = useState("")
    const [showInput, setShowInput] = useState<string | null | boolean>(null);
    const [showMoreInfos, setShowMoreInfos] = useState<string | null | boolean>(null);

    const handleShowInput = useCallback((id: string) => {
        setShowInput(id);
    }, [])

    const handleRemoveInput = useCallback(() => {
        setShowInput(false);
    }, [])

    const handleShowMoreInfos = useCallback((id: string) => {
        setShowMoreInfos(id);
    }, [])

    const handleRemoveMoreInfos = useCallback(() => {
        setShowMoreInfos(false)
    }, [])

    const handleAddTask = async (columnId: string) => {
        if (!newTaskTitle.trim()) return;

        try {   
            const docRef = await addDoc(collection(db, "tasks"), {
                title: newTaskTitle,
                cardId: cardId,
                columnId: columnId,                                    
                createdAt: Timestamp.now()
            })

            setTasks((prev) => [...prev, { id: docRef.id, title: newTaskTitle, cardId, columnId }])
            setNewTaskTitle("")
        } catch (error) {
            console.log(error)
        }
    }

    const handleDeleteTask = async (columnId: string) => {
        try {
            const docRef = doc(db, "tasks", columnId);
            await deleteDoc(docRef);
            fetchTasks();
            
        } catch (error) {
            console.log(error)
        }
    }

    const fetchTasks = useCallback(async() => {
        try {
            const q = query(collection(db, "tasks"), where("cardId", "==", cardId));
            const snapshot = await getDocs(q);

            const loadedTasks = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))

            setTasks(loadedTasks);
        } catch (error) {
            console.log(error)
        }
    }, [cardId])

    return {
        tasks,
        newTaskTitle,
        setNewTaskTitle,
        showInput,
        handleShowInput,
        handleRemoveInput,
        showMoreInfos,
        handleShowMoreInfos,
        handleRemoveMoreInfos,
        handleAddTask,
        fetchTasks,
        handleDeleteTask
    }
}
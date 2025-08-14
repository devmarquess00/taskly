'use client';
import { db } from "@/services/firebaseConnection";
import {
    addDoc,
    collection,
    serverTimestamp
} from "firebase/firestore";
import { useCallback, useState } from "react";

export function useAddCardDatabase () {
    const [titleCard, setTitleCard] = useState('')
    const [colorCard, setColorCard] = useState('')
    const [messageError, setMessageError] = useState('')

    const colors = ["#4169E1", "#10B981", "#FF4500", "#9370DB", "#FFD6A5"];

    const handleColorCard = useCallback((color: string) => {
        setColorCard(color)
    }, [])

    async function handleCreateCard () {
        await addDoc(collection(db, "cards"), {
            titleCard: titleCard,
            colorCard: colorCard,
            createdAt: serverTimestamp(), 
        })    
        .then(() => {
            setTitleCard("")
        })   
        .catch((error) => {
            console.log(error)
        })
    }

    return {
        titleCard,
        setTitleCard,
        handleCreateCard,
        colors,
        colorCard,
        handleColorCard,
        messageError,
        setMessageError
    }
}
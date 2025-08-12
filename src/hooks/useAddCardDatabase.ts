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

    const colors = ["#ffffff", "#000000", "#333333", "#dfdfdf", "#2563EB", "#DC2626"];

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
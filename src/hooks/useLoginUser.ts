'use client';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/services/firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';

export function useLoginUser () {
    const route = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [messageError, setMessageError] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    async function handleLoginUser (event: FormEvent) {
        event.preventDefault();

        if (!email || !password) {
            setMessageError('Por favor, preencha todos os dados.');
            return;
        }

        await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            setEmail('')
            setPassword('')
            setIsLoading(true);

            setTimeout(() => {
                route.push('/boards')
            }, 2000)
        })
        .catch((error) => {
            setIsLoading(false);
        })
    }

    return {
        email, 
        setEmail,
        password,
        setPassword,
        isLoading,
        messageError,
        setMessageError,
        handleLoginUser
    }
}
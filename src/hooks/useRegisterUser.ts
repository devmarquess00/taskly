'use client';
import { FormEvent, useState } from 'react'; 
import { useRouter } from 'next/navigation';
import { auth } from '@/services/firebaseConnection';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export function useRegisterUser () {
    const route = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [messageError, setMessageError] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    async function handleRegisterUser (event: FormEvent) {
        event.preventDefault();

        if (!email || !password) {
            setMessageError('Por favor, preencha todos os dados.')
            return;
        }

        if (!checkbox) {
            setMessageError('Para continuar, aceite nossos termos!')
            return;
        }

        await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            setEmail('');
            setPassword('');
            setIsLoading(true);

            setTimeout(() => {
                route.push('/login')
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
        checkbox,
        setCheckbox,
        messageError,
        setMessageError,
        handleRegisterUser
    }
}
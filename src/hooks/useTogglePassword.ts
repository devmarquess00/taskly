'use client';
import { useCallback, useState } from 'react';

export function useTogglePassword () {
    const [showPassword, setShowPassword] = useState(false);
    
    const onTogglePassword = useCallback(() => {
        setShowPassword(prev => !prev);
    }, [])

    return {
        showPassword,
        onTogglePassword
    }
}
'use client';
import { useCallback, useState } from 'react' 

export function useShowCookie () {
    const [isShowCookie, setIsShowCookie] = useState(true);
    
    const handleShowCookie = useCallback(() => {
        setIsShowCookie(false)
    }, [])

    return {
        isShowCookie,
        handleShowCookie
    }
}

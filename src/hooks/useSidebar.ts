'use client';
import { useCallback, useState } from  'react';

export function useSidebar () {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

    const onToggleSidebar = useCallback(() => {
        setSidebarIsOpen(prev => !prev)
    }, [])

    return {
        sidebarIsOpen,
        onToggleSidebar
    }
}
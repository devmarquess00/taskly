import { ReactNode } from 'react';

type ButtonProps = {
    type: any;
    label?: ReactNode;
    icon?: ReactNode;
    extraClass?: string;
    onClick?: () => void;
    isLoading?: boolean;
}

export const Button = ({
    label,
    extraClass, 
    icon,
    onClick,
    type,
    isLoading
}: ButtonProps) => {
    return (
        <button type={type} onClick={onClick} className={`cursor-pointer flex items-center justify-center ${extraClass}`}>
        <span className='!ml-0'>{icon}</span>
        {isLoading ? 'Carregando...' : label}</button>
    )
}
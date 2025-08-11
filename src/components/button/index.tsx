import { ReactNode } from 'react';

type ButtonProps = {
    type: any;
    label?: ReactNode;
    icon?: ReactNode;
    extraClass?: string;
    onClick?: () => void;
}

export const Button = ({
    label,
    extraClass, 
    icon,
    onClick,
    type
}: ButtonProps) => {
    return (
        <button type={type} onClick={onClick} className={`cursor-pointer flex items-center justify-center ${extraClass}`}>
        <span className='!ml-0'>{icon}</span>
        {label}</button>
    )
}
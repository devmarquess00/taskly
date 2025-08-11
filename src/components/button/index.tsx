import { ReactNode } from 'react';

type ButtonProps = {
    label?: ReactNode;
    icon?: ReactNode;
    extraClass?: string;
    onClick?: () => void;
}

export const Button = ({
    label,
    extraClass, 
    icon,
    onClick
}: ButtonProps) => {
    return (
        <button onClick={onClick} className={`cursor-pointer flex items-center ${extraClass}`}>
        <span className='!ml-0'>{icon}</span>
        {label}</button>
    )
}
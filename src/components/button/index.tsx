import { ReactNode } from 'react';

type ButtonProps = {
    label?: ReactNode;
    extraClass?: string;
    onClick?: () => void;
}

export const Button = ({
    label,
    extraClass, 
    onClick
}: ButtonProps) => {
    return (
        <button onClick={onClick} className={`cursor-pointer ${extraClass}`}>{label}</button>
    )
}
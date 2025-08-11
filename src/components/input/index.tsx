type InputProps = {
    label?: string;
    extraClassLabel?: string;
    type: string;
    placeholder?: string;
    extraClass?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
    label,
    extraClassLabel,
    type,
    placeholder,
    extraClass,
    value,
    onChange
}: InputProps) => {
    return (
        <div className="flex flex-col gap-1">
            <label className={`text-xs text-zinc-900 ${extraClassLabel}`}>{label}</label>
            <input
            type={type}
            placeholder={placeholder}
            className={`py-2.5 px-2 text-xs outline-none ${extraClass}`}
            value={value}
            onChange={onChange}
            />
        </div>
    )
}
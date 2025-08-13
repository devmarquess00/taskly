type TextareaProps = {
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void; 
    value?: string;
    placeholder?: string;
    extraClass?: string;
}

export const Textarea = ({
    onChange,
    value,
    placeholder,
    extraClass
}:TextareaProps) => {
    return (
        <textarea 
        placeholder={placeholder}
        className={extraClass}
        onChange={onChange}
        value={value}
        />
    )
}
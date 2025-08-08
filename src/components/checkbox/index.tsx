type CheckboxProps = {
    label?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
}

export const Checkbox = ({
    label,
    onChange,
    onClick
}: CheckboxProps) => {
    return (
        <div className="flex items-center gap-1">
            <input
            type="checkbox"
            />
            <label className="text-xs text-gray-600">{label}</label>
        </div>
    )
}
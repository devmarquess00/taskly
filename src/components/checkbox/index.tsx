type CheckboxProps = {
    label?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: any;
}

export const Checkbox = ({
    label,
    onChange,
    value
}: CheckboxProps) => {
    return (
        <div className="flex items-center gap-1">
            <input
            type="checkbox"
            value={value}
            onChange={onChange}
            />
            <label className="text-xs text-gray-600">{label}</label>
        </div>
    )
}
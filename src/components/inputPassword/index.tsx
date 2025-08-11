import { FaEye, FaEyeSlash } from 'react-icons/fa6'

type InputPasswordProps = {
    label?: string;
    extraClassLabel?: string;
    type: string;
    placeholder?: string;
    extraClass?: string;
    showPassword?: boolean;
    onTogglePassword?: () => void;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputPassword = ({
    label,
    extraClassLabel,
    type,
    placeholder,
    extraClass,
    showPassword,
    onTogglePassword,
    value,
    onChange
}: InputPasswordProps) => {
    return (
        <div className="flex flex-col gap-1 relative">
            <label className={`text-xs text-zinc-900 ${extraClassLabel}`}>{label}</label>
            <input
            type={showPassword ? 'text': 'password'}
            placeholder={placeholder}
            className={`py-2.5 px-2 text-xs outline-none ${extraClass}`}
            value={value}
            onChange={onChange}
            />

            <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-2 bottom-2.5 text-zinc-500 hover:text-zinc-700 hover:cursor-pointer"
            >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
        </div>
    )
}
    type SocialAuthButtonProps = {
    iconImage: string;
    label: string;
    extraClassLabel?: string;
    extraClass?: string;
    onClick?: () => void;
}

export const SocialAuthButton = ({
    iconImage,
    label,
    extraClassLabel,
    extraClass,
    onClick
}: SocialAuthButtonProps) => {
    return (
        <button className={`flex items-center gap-2 justify-center ${extraClass}`} onClick={onClick}>
            <img src={iconImage} alt="Social-icons" className="w-7" />
            <p className={extraClassLabel}>{label}</p>
        </button>
    )
}
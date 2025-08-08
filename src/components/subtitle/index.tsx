type SubtitleProps = {
    subtitle: string;
    extraClass?: string;
}

export const Subtitle = ({
    subtitle,
    extraClass
}: SubtitleProps) => {
    return <p className={`text-sm font-semibold ${extraClass}`}>{subtitle}</p>
}
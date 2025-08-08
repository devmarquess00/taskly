type TitleProps = {
    title?: string;
    extraClass?: string;
}

export const Title = ({
    title,
    extraClass
}: TitleProps) => {
    return (
        <h1 className={extraClass}>{title}</h1>
    )
}
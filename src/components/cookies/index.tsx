type CookiesProps = {
    label?: string;
    buttonCookie?: string;
    extraClassButtonCookie?: string;
    extraClass?: string;
}

export const Cookies = ({
    label,
    buttonCookie,
    extraClassButtonCookie,
    extraClass,
}: CookiesProps) => {
    return (
        <div className={extraClass}>
            <p>{label} <button className={`hidden md:inline md:underline ${extraClassButtonCookie}`}>{buttonCookie}</button> </p>
        </div>
    )
}
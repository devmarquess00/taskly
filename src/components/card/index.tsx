import { FaEye } from "react-icons/fa6";
import { Button } from "../button";
import Link from "next/link";

type CardProps = {
    titleCard?: string;
    colorCard?: any;
    extraClassTitleCard?: string;
}

export const Card = ({
    titleCard,
    colorCard,
    extraClassTitleCard,
}: CardProps) => {
    return (
        <div className='w-full'>
            <div className="bg-gray-700 w-full p-10 rounded-t-lg"
            style={colorCard}
            ></div>
            <div className="flex items-center justify-between py-2 px-3 rounded-b-lg bg-gray-950/50">
                <p className={extraClassTitleCard}>{titleCard}</p>
                <Link href='/boards/tasks'>
                    <Button
                    extraClass="text-white text-lg"
                    label={<FaEye />}
                    type="button"
                    />
                </Link>
            </div>
        </div>
    )
}
import { FaEye, FaTrash } from "react-icons/fa6";
import { Button } from "../button";
import Link from "next/link";

type CardProps = {
    id?: string | number  | any;
    titleCard?: string;
    colorCard?: any;
    extraClassTitleCard?: string;
    onClickDeleteButton?: () => void;
}

export const Card = ({
    id,
    titleCard,
    colorCard,
    extraClassTitleCard,
    onClickDeleteButton,
}: CardProps) => {
    return (
        <div className='w-full relative'>
            <div className="w-full p-8 md:p-12 2xl:p-14 rounded-t-lg"
            style={colorCard}
            ></div>
            <Button
            type="button"
            icon={<FaTrash />}
            onClick={onClickDeleteButton}
            extraClass="absolute top-0 right-0 m-2 text-white"
            />
            <div className="flex items-center justify-between py-2 px-3 md:py-5 rounded-b-lg bg-gray-950">
                <p className={extraClassTitleCard}>{titleCard}</p>
                <Link href={`/boards/tasks/${id}`}>
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
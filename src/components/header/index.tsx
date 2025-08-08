import Link from 'next/link';
import { menuHeader } from '@/menus/header';
import { FaClipboardList, FaBars } from 'react-icons/fa6';
import { Title } from '../title';
import { Button } from '../button';

type HeaderProps = {
    onToggleSidebar?: () => void;
}

export const Header = ({
    onToggleSidebar
}: HeaderProps) => {
    return (
        <header className='w-full bg-white shadow-md px-6 py-4 md:px-10 flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <div className="bg-blue-600 p-2 rounded-md">
                    <FaClipboardList 
                    className="text-white text-2xl"
                    size={20}
                    />
                </div>
                <Title
                title='Taskly'
                extraClass='text-xl md:text-3xl font-semibold text-gray-700 mr-6'
                />
                <ul className='hidden md:flex items-center gap-5'>
                    {menuHeader.map((item) => (
                        <li key={item.id} className='text-sm text-gray-800/60 hover:text-gray-800/100 duration-500 cursor-pointer'>{item.label}</li>
                    ))}
                </ul>
            </div>
            <Button
            onClick={onToggleSidebar} 
            extraClass='text-xl text-gray-600 md:hidden'
            label={<FaBars />}
            />
            <div className='hidden md:flex items-center gap-8'>
                <Link href='/login'>Entrar</Link>
                <Link href='/register' className='bg-blue-600 py-3 px-5 rounded-sm text-white font-semibold'>Criar conta no Taskly</Link>
            </div>
        </header>
    )
}
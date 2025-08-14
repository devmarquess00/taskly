import { FaChevronRight } from 'react-icons/fa6';
import { menuHeader } from "@/menus/header"
import Link from 'next/link';

type SidebarProps = {
    sidebarIsOpen?: boolean;
}

export const Sidebar = ({
    sidebarIsOpen
}: SidebarProps) => {
    return (
        <>
        {sidebarIsOpen && (
            <aside className='py-2 px-5 bg-white h-full'>
                <div>
                    <ul className='flex flex-col gap-2 mt-5'>
                        {menuHeader.map((item) => (
                            <li key={item.id} className='flex items-center justify-between py-4 border-b w-full border-gray-200'>
                                <a href={item.url} className='w-full flex items-center justify-between'>
                                    <p>{item.label}</p>
                                    <FaChevronRight />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex flex-col gap-2 mt-10'>
                    <Link href='/register' className='bg-blue-600 py-4 px-5 rounded-sm text-white font-semibold text-center'>Criar conta no Taskly</Link> 
                    <Link href='/login' className='border border-blue-600 py-4 px-5 rounded-sm text-center'>Entrar</Link>
                </div>
            </aside>
        )}
        </>
    )
}
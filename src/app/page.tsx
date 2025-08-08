'use client';
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Subtitle } from "@/components/subtitle";
import { Title } from "@/components/title";
import { useSidebar } from "@/hooks/useSidebar";

export default function Home () {
  const { sidebarIsOpen, onToggleSidebar } = useSidebar();

  return (
    <div className="w-full h-screen bg-gray-100">
      <Header onToggleSidebar={onToggleSidebar} />
      <Sidebar sidebarIsOpen={sidebarIsOpen} />

      <div className="mt-8">
        <Title
        title="Organize suas tarefas e domine seus projetos."
        extraClass="text-center text-2xl text-gray-800 font-semibold leading-6 w-xs m-auto"
        />
        <Subtitle
        subtitle="Fique no controle. Trabalhe com mais leveza, propósito e clareza em cada passo"
        extraClass="text-center text-xs w-xs leading-3 !font-medium text-gray-800 m-auto py-3"
        />
      </div>

    </div>
  )
}
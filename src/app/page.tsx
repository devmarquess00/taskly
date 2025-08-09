'use client';
import { Button } from "@/components/button";
import { Cookies } from "@/components/cookies";
import { Header } from "@/components/header"
import { Input } from "@/components/input";
import { Sidebar } from "@/components/sidebar"
import { Subtitle } from "@/components/subtitle";
import { Title } from "@/components/title";
import { useSidebar } from "@/hooks/useSidebar";
import Link from "next/link";

export default function Home () {
  const { sidebarIsOpen, onToggleSidebar } = useSidebar();

  return (
    <div className="w-full h-screen">
      <Header onToggleSidebar={onToggleSidebar} sidebarIsOpen={sidebarIsOpen} />
      <Sidebar sidebarIsOpen={sidebarIsOpen} />

      <Cookies
      label="Utilizamos cookies para melhorar sua experiência de navegação com nosso site."
      extraClass="bg-blue-100 text-center text-xs py-2 px-10 md:py-5 2xl:py-7"
      buttonCookie="Politica de Privacidade."
      />

      <div className="py-8 md:py-0 px-12 flex !justify-center md:justify-around md:gap-30 2xl:gap-50 bg-[#fcfcfc] 2xl:pt-15">
        <div className="flex flex-col mt-6 md:mt-15">
          <Title
          title="Organize suas tarefas e domine seus projetos."
          extraClass="text-2xl w-xs leading-6 text-center text-gray-800 font-semibold md:w-lg md:text-5xl md:leading-12 md:text-start 2xl:text-6xl 2xl:w-2xl 2xl:leading-14 2xl:mb-4"
          />
          <Subtitle
          subtitle="Fique no controle. Trabalhe com mais leveza, propósito e clareza em cada passo!"
          extraClass="text-center text-xs w-xs leading-3 !font-semibold text-gray-800 py-3 md:text-sm md:w-sm md:text-start 2xl:w-lg 2xl:text-lg 2xl:mb-4 2xl:leading-6"
          />
          <Input
          placeholder="Digite seu e-mail"
          type="email"
          extraClass="border border-zinc-500 rounded-sm focus:border-blue-600 py-3.5 !w-[20rem] 2xl:bg-white 2xl:border-gray-200 2xl:py-4"
          />
          <Link href="/login">
            <Button
            label="Faça inscrição. É gratuito"
            extraClass="flex items-center justify-center bg-blue-600 py-3 px-3 mb-5 mt-3 md:mb-0 md:px-0 rounded-sm text-white w-full text-sm mt-2 py-3.5 md:!w-[15rem] !md:text-center md:flex md:items-center md:justify-center"
            />
          </Link>
          <Cookies
          label="Ao inserir o e-mail confirmo que quero receber"
          buttonCookie="todas as notificações de atualizações."
          extraClassButtonCookie="text-blue-500"
          extraClass="hidden md:inline md:text-xs mt-5 2xl:text-lg 2xl:w-lg 2xl:leading-5 2xl:mt-8"
          />
        </div>
        <div>
          <img src="/mobile-view.png" alt="Imagem de celular"
          className="hidden md:flex md:w-[330px] 2xl:w-[400px]"
          />
        </div>
      </div>

      <div className="bg-blue-600 py-10 px-10 md:py-13 md:px-30 2xl:px-60">
        <div className="flex flex-col 2xl:mt-4">
          <Title
          title="Da confusão a clareza."
          extraClass="text-xl text-white text-center font-bold"
          />
          <Subtitle
          subtitle="Transforme ideias soltas, tarefas acumuladas e metas difusas em um fluxo visual simples e organizado. Este espaço foi criado para ajudar você a sair do caos e enxergar com nitidez o que realmente importa. Planeje, priorize e acompanhe cada etapa da sua jornada com clareza e propósito."
          extraClass="text-center text-white !font-medium mt-3"
          />
        </div>
        <div className="bg-white rounded-md w-full py-3 px-5 mt-8 md:flex md:px-10 2xl:mt-14">
          <img src="/image1.png" alt="Imagem da confusão a clareza" 
          className="rounded-md mt-3 md:w-[700px] md:h-[300px]"
          />
          <div className="flex flex-col md:px-10 md:mt-10">
            <Title
            title="Seja produtivo"
            extraClass="mt-4 md:uppercase md:text-sm font-semibold"
            />
            <Subtitle
            subtitle="Transformar o caos em clareza é um processo de dar forma ao que antes parecia disperso. É quando ideias ganham direção, tarefas se alinham em prioridades e metas se tornam visíveis, com organização e propósito."
            extraClass="!font-medium mt-2 text-gray-600 md:text-lg"
            />
          </div>
        </div>
      </div>

    </div>
  )
}
'use client';
import { Button } from "@/components/button"
import { SocialAuthButton } from "@/components/socialAuthButton"
import { Input } from "@/components/input"
import { InputPassword } from "@/components/inputPassword"
import { Title } from "@/components/title"
import { Subtitle } from "@/components/subtitle"
import { FaClipboardList } from "react-icons/fa6"
import Link from "next/link"

import { useTogglePassword } from "@/hooks/useTogglePassword"
import { useState } from "react";

export default function Login () {
  const { onTogglePassword, showPassword } = useTogglePassword();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messageError, setMessageError] = useState('');

  async function handleLoginUser () {
    
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-none md:bg-[url('/background.png')]
    md:bg-cover md:bg-center md:bg-no-repeat">
      <form className="shadow-md py-5 px-10 md:max-w-sm w-full h-screen md:h-full"
      onSubmit={handleLoginUser}
      >
        <div className="flex items-center justify-center gap-2 mb-3 mt-13 md:mt-0">
          <div className="bg-blue-600 p-2 rounded-md">
            <FaClipboardList 
            className="text-white text-2xl"
            />
          </div>
          <Title
          title="Taskly"
          extraClass="text-zinc-800 text-3xl"
          />
        </div>
        <Subtitle
        subtitle="Faça login para continuar"
        extraClass="text-center font-medium"
        />

        <div className="flex flex-col mt-6 mb-4 gap-3">
          <Input
          type="email"
          placeholder="Entre com seu e-mail"
          label="E-mail"
          extraClass="border border-zinc-500 rounded-sm focus:border-blue-600"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
          }}
          />

          <InputPassword
          showPassword={showPassword}
          onTogglePassword={onTogglePassword}
          type="password"
          placeholder="Entre com sua senha"
          label="Senha"
          extraClass="border border-zinc-500 rounded-sm focus:border-blue-600"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value)
          }}
          />

          <Button
          type="submit"
          label="Continuar"
          extraClass="bg-blue-600 py-2 px-3 rounded-sm text-white text-sm mt-2"
          />

        </div>

        <div className="flex flex-col">
          <Subtitle
          subtitle="Ou continue com:"
          extraClass="text-xs text-center font-light text-gray-500"
          />

          <div className="flex flex-col gap-2 mt-4 mb-3">
            <SocialAuthButton
              iconImage="/google.svg"
              label="Google"
              extraClass="border border-zinc-300 py-1 px-2 rounded-xs hover:cursor-pointer"
              extraClassLabel="text-sm font-semibold"
            />
            <SocialAuthButton
              iconImage="/apple.svg"
              label="Apple"
              extraClass="border border-zinc-300 py-1 px-2 rounded-xs hover:cursor-pointer"
              extraClassLabel="text-sm font-semibold"
            />
          </div>

          <div className="flex items-center justify-center gap-3 mt-2">
            <Subtitle
            subtitle="Não tem conta?"
            extraClass="text-xs text-blue-500 !font-medium"
            />
            <Link href="/register"
            className="text-xs text-blue-500 font-medium hover:underline"
            >Crie sua conta aqui</Link>
          </div>
        </div>
      </form>
    </div>
  )
}
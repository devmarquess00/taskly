'use client';
import { Button } from "@/components/button"
import { SocialAuthButton } from "@/components/socialAuthButton"
import { Input } from "@/components/input"
import { InputPassword } from "@/components/inputPassword"
import { Checkbox } from "@/components/checkbox";
import { Title } from "@/components/title"
import { Subtitle } from "@/components/subtitle"
import { FaClipboardList } from "react-icons/fa6"
import { auth } from "@/services/firebaseConnection";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link"
import { useRouter } from 'next/navigation'

import { useTogglePassword } from "@/hooks/useTogglePassword"
import { FormEvent, useState } from "react";

export default function Login () {
  const { onTogglePassword, showPassword } = useTogglePassword();
  const route = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [messageError, setMessageError] = useState('');

  async function handleCreateUser (event: FormEvent) {
    event.preventDefault();

    if (!email || !password) {
      setMessageError('Preencha todos os campos para continuar.');
      return;
    }

    if (!checkbox) {
      setMessageError('Por favor, aceite os termos para prosseguir!');
      return;
    };

    await createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      setEmail('');
      setPassword('');
      
      setTimeout(() => {
        route.push('/login')
      }, 2000)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-none md:bg-[url('/background.png')]
    md:bg-cover md:bg-center md:bg-no-repeat">
      <form className="shadow-md py-5 px-10 md:max-w-sm w-full h-screen md:h-full"
      onSubmit={handleCreateUser}
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
        subtitle="Crie sua conta para continuar"
        extraClass="text-center font-medium"
        />

        <div className="flex flex-col mt-6 mb-4 gap-3">
          <Input
          type="email"
          placeholder="Digite seu e-mail"
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
          placeholder="Digite sua senha"
          label="Senha"
          extraClass="border border-zinc-500 rounded-sm focus:border-blue-600"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          />

          <Checkbox
          label="Eu aceito todos os termos e condições do site."
          value={checkbox}
          onChange={(event) => {
            setCheckbox(event.target.checked);
            setMessageError('')
          }}
          />

          {messageError && (
            <Subtitle
            subtitle={messageError}
            extraClass="text-red-500 !font-medium text-xs"
            />
          )}

          <Button
          label="Criar conta"
          extraClass="bg-blue-600 py-2 px-3 rounded-sm text-white text-sm mt-2"
          type="submit"
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
            subtitle="Já tem uma conta?"
            extraClass="text-xs text-blue-500 !font-medium"
            />
            <Link href="/login"
            className="text-xs text-blue-500 font-medium hover:underline"
            >Faça login aqui</Link>
          </div>
        </div>
      </form>
    </div>
  )
}
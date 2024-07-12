import Image from "next/image";
import { Input } from "@/components/ui/input"
import Link from 'next/link'

export default function Register() {
  return (
    <main className="flex  h-screen w-screen items-center justify-center">
        <div className="h-[950px] max-w-[700px]">
            <div>
                <h1 className="mt-16 text-center font-bold text-4xl">Créez votre compte</h1>
            </div>
            <div className="mt-8">
                <h1 className="font-semibold text-xl">Nom Complet</h1>
                <input className="rounded-md lg:w-[580px] h-[40px] xs:w-[400px] md:w-[500px] cs:w-[340px] px-5 font-semibold mt-2 bg-slate-300" placeholder="Entrez votre nom et prenom"/>
            </div>
            <div className="mt-8">
                <h1 className="font-semibold text-xl">Email</h1>
                <input className="rounded-md lg:w-[580px] h-[40px] xs:w-[400px]  md:w-[500px] cs:w-[340px] px-5 font-semibold mt-2 bg-slate-300" placeholder="Entrez votre mail personnel"/>
            </div>
            <div className="mt-8">
                <h1 className="font-semibold text-xl">Numero de Telephone</h1>
                <input className="rounded-md lg:w-[580px] h-[40px] xs:w-[400px]  md:w-[500px] cs:w-[340px] px-5 font-semibold mt-2 bg-slate-300" placeholder="Entrez votre numero de telephone"/>
            </div>
            <div className="mt-8">
                <h1 className="font-semibold text-xl">Mot de Passe</h1>
                <input type="password" className="rounded-md lg:w-[580px] h-[40px] xs:w-[400px] md:w-[500px] cs:w-[340px] px-5 font-semibold mt-2 bg-slate-300" placeholder="Entrez un mot de passe"/>
            </div>
            <div className="mt-8">
                <h1 className="font-semibold text-xl">Photo de Profil</h1>
                <Input className="rounded-md lg:w-[580px] h-[40px] xs:w-[400px]  md:w-[500px] cs:w-[340px] px-5 font-semibold mt-2 bg-slate-300" id="picture" type="file" />
            </div>
            <div className="mt-8">
                <h1 className="font-semibold text-xl">Image carte FLASHPAY</h1>
                <Input className="rounded-md lg:w-[580px] h-[40px] xs:w-[400px]  md:w-[500px] cs:w-[340px] px-5 font-semibold mt-2  bg-slate-300" id="picture" type="file" />
            </div>
            <div className="mt-12 flex gap-5 justify-end">
                <Link href="/login">
                    <button className="bg-slate-400 h-[40px] w-[150px] rounded-md">Se Connecter</button>
                </Link>
                <Link href="/register">
                    <button className="bg-green-500 h-[40px] w-[90px] rounded-md">Sincrire</button>
                </Link>
            </div>
        </div>
    </main>
  );
}

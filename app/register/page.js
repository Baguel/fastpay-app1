import Image from "next/image";
import { Input } from "@/components/ui/input"

export default function Register() {
  return (
    <main className="h-screen w-full flex items-center justify-center bg-red-500">
        <div className="h-[950px] max-w-[700px]">
            <div>
                <h1 className="mt-16 text-center font-bold text-4xl">Créez votre compte</h1>
            </div>
            <div className="mt-8">
                <h1 className="font-semibold text-xl">Nom Complet</h1>
                <input className="rounded-full lg:w-[580px] h-[40px] xs:w-[400px] sm:w-[400px] md:w-[500px] px-5 font-semibold mt-2" placeholder="Entrez votre nom et prenom"/>
            </div>
            <div className="mt-8">
                <h1 className="font-semibold text-xl">Email</h1>
                <input className="rounded-full lg:w-[580px] h-[40px] xs:w-[400px] sm:w-[400px] md:w-[500px] px-5 font-semibold mt-2" placeholder="Entrez votre mail personnel"/>
            </div>
            <div className="mt-8">
                <h1 className="font-semibold text-xl">Numero de Telephone</h1>
                <input className="rounded-full lg:w-[580px] h-[40px] xs:w-[400px] sm:w-[400px] md:w-[500px] px-5 font-semibold mt-2" placeholder="Entrez votre numero de telephone"/>
            </div>
            <div className="mt-8">
                <h1 className="font-semibold text-xl">Mot de Passe</h1>
                <input type="password" className="rounded-full lg:w-[580px] h-[40px] xs:w-[400px] sm:w-[400px] md:w-[500px] px-5 font-semibold mt-2" placeholder="Entrez un mot de passe"/>
            </div>
            <div className="mt-8">
                <h1 className="font-semibold text-xl">Photo de Profil</h1>
                <Input className="rounded-full lg:w-[580px] h-[40px] xs:w-[400px] sm:w-[400px] md:w-[500px] px-5 font-semibold mt-2" id="picture" type="file" />
            </div>
            <div className="mt-8">
                <h1 className="font-semibold text-xl">Image carte FLASHPAY</h1>
                <Input className="rounded-full lg:w-[580px] h-[40px] xs:w-[400px] sm:w-[400px] md:w-[500px] px-5 font-semibold mt-2" id="picture" type="file" />
            </div>
        </div>
    </main>
  );
}

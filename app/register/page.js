import Image from "next/image";
import { Input } from "@/components/ui/input"

export default function Register() {
  return (
    <main className="h-screen w-full flex items-center justify-center">
        <div className="">
            <div>
                <h1 className="text-4xl mt-5 text-center font-bold text-black xs:text-2xl">Créer Votre compte</h1>
            </div>
            <div className="xs:ml-3 xs:mr-3 mt-8">
                <h1 className="text-2xl font-semibold text-black">Nom Complet</h1>
                <input className="w-[520px] h-[40px] xs:w-[370px] p-5 mt-2 rounded-lg bg-slate-300" placeholder="Mettez votre nom complet"/>
            </div>
            <div className="xs:ml-3 xs:mr-3 mx-auto mt-8">
                <h1 className="text-2xl font-semibold text-black">Email</h1>
                <input className="w-[520px] h-[40px] xs:w-[370px] p-5 mt-2 rounded-lg bg-slate-300" placeholder="Mettez votre email"/>
            </div>
            <div className="xs:ml-3 xs:mr-3 mx-auto mt-8">
                <h1 className="text-2xl font-semibold text-black">Numero de Telephone</h1>
                <input className="w-[520px] h-[40px] xs:w-[370px] p-5 mt-2 rounded-lg bg-slate-300" placeholder="Mettez votre numero de telephone"/>
            </div>
            <div className="xs:ml-3 xs:mr-3 mx-auto mt-8">
                <h1 className="text-2xl font-semibold text-black">Mot de Passe</h1>
                <input type="password" className="w-[520px] h-[40px] xs:w-[370px] p-5 mt-2 rounded-lg bg-slate-300" placeholder="Mettez votre numero de telephone"/>
            </div>
            <div className="xs:ml-3 xs:mr-3 mx-auto mt-8">
                <h1 className="text-2xl font-semibold text-black">Photo de Profil</h1>
                <Input className="w-[520px] h-[40px] xs:w-[370px] mt-2 rounded-lg bg-slate-300" id="picture" type="file" />
            </div>
            <div className="xs:ml-3 xs:mr-3 mx-auto mt-8">
                <h1 className="text-2xl font-semibold text-black">Image de Carte</h1>
                <Input className="w-[520px] h-[40px] xs:w-[370px] mt-2 rounded-lg bg-slate-300" id="background" type="file" />
            </div>
            <div className="mt-8 xs:mr-3 flex gap-9 justify-end">
                <button className="bg-slate-400 h-[40px] w-[150px] rounded-md">Se Connecter</button>
                <button className="bg-green-500 h-[40px] w-[90px] rounded-md">S'incrire</button>
            </div>
        </div>
    </main>
  );
}

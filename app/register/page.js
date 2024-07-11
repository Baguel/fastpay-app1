import Image from "next/image";
import { Input } from "@/components/ui/input"

export default function Register() {
  return (
    <main className="h-screen w-screen flex items-center justify-center container-md">
        <div className="h-full w-[600px]">
            <div>
                <h1 className="text-4xl mt-5 text-center font-bold text-black xs:text-2xl">Créer Votre compte</h1>
            </div>
            <div className="ml-9 mt-8">
                <h1 className="text-2xl mt-5 font-semibold text-black">Nom Complet</h1>
                <input className="w-[520px] h-[40px] xs:w-[400px] p-5 mt-2 rounded-lg bg-slate-300" placeholder="Mettez votre nom complet"/>
            </div>
            <div className="ml-9 mt-8">
                <h1 className="text-2xl mt-5 font-semibold text-black">Email</h1>
                <input className="w-[520px] h-[40px] xs:w-[400px] p-5 mt-2 rounded-lg bg-slate-300" placeholder="Mettez votre email"/>
            </div>
            <div className="ml-9 mt-8">
                <h1 className="text-2xl mt-5 font-semibold text-black">Numero de Telephone</h1>
                <input className="w-[520px] h-[40px] xs:w-[400px] p-5 mt-2 rounded-lg bg-slate-300" placeholder="Mettez votre numero de telephone"/>
            </div>
            <div className="ml-9 mt-8">
                <h1 className="text-2xl mt-5 font-semibold text-black">Mot de Passe</h1>
                <input type="password" className="w-[520px] h-[40px] xs:w-[400px] p-5 mt-2 rounded-lg bg-slate-300" placeholder="Mettez votre numero de telephone"/>
                <h1 className="mt-1 ml-2 font-ligth text-black">Le mot de passe doit etre composé de lettres et chiffres.</h1>
            </div>
            <div className="ml-9 mt-8">
                <h1 className="text-2xl mt-5 font-semibold text-black">Photo de Profil</h1>
                <Input className="w-[520px] h-[40px] xs:w-[400px] mt-2 rounded-lg bg-slate-300" id="picture" type="file" />
            </div>
            <div className="ml-9 mt-8">
                <h1 className="text-2xl mt-5 font-semibold text-black">Image de Carte</h1>
                <Input className="w-[520px] h-[40px] xs:w-[400px] mt-2 rounded-lg bg-slate-300" id="background" type="file" />
                <h1 className="mt-1 ml-2 font-ligth text-black">Cette image servira de fond pour votre carte fastpay.</h1>
            </div>
            <div className="mt-8 flex gap-9 justify-end mr-12">
                <button className="bg-slate-400 h-[40px] w-[150px] rounded-md">Se Connecter</button>
                <button className="bg-green-500 h-[40px] w-[90px] rounded-md">S'incrire</button>
            </div>
        </div>
    </main>
  );
}

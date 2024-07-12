import Image from "next/image";
import { Input } from "@/components/ui/input"

export default function Welcome() {
  return (
    <main className="flex h-screen items-center justify-center bg-green-600">
        <div className="h-[950px] max-w-[700px]">
            <div className="h-[250px] max-w-[480px] bg-red-700 rounded-xl bg-center" src='/562949.jpg'>
                <Image className="absolute bg-center rounded-xl" height={250} width={480} src="/562949.jpg"/>
                <div className="relative">
                    <h1 className="text-xl font-semibold mt-2">FASTPAY</h1>
                </div>
            </div>
        </div>
    </main>
  );
}
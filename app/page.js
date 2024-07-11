import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full bg-green-500">
        <div className="h-screen flex gap-2 items-center justify-center">
          <Image width={60} height={60} src="/icons8-money-50.png" alt="money logo"/>
          <h1 className="text-4xl font-bold text-black">FLASHPAY</h1>
        </div>
    </main>
  );
}

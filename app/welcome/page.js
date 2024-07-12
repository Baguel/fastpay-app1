import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Welcome() {
  return (
    <main className="h-screen w-screen bg-green-600">
        <div className="mx-auto">
            <div className="items-center justify-around flex">
                <div>
                    <Avatar className="hover:cursor-pointer">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div>
                    <button className="mt-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="rgba(255,255,255,1)"><path d="M8.68637 4.00008L11.293 1.39348C11.6835 1.00295 12.3167 1.00295 12.7072 1.39348L15.3138 4.00008H19.0001C19.5524 4.00008 20.0001 4.4478 20.0001 5.00008V8.68637L22.6067 11.293C22.9972 11.6835 22.9972 12.3167 22.6067 12.7072L20.0001 15.3138V19.0001C20.0001 19.5524 19.5524 20.0001 19.0001 20.0001H15.3138L12.7072 22.6067C12.3167 22.9972 11.6835 22.9972 11.293 22.6067L8.68637 20.0001H5.00008C4.4478 20.0001 4.00008 19.5524 4.00008 19.0001V15.3138L1.39348 12.7072C1.00295 12.3167 1.00295 11.6835 1.39348 11.293L4.00008 8.68637V5.00008C4.00008 4.4478 4.4478 4.00008 5.00008 4.00008H8.68637ZM12.0001 15.0001C13.6569 15.0001 15.0001 13.6569 15.0001 12.0001C15.0001 10.3432 13.6569 9.00008 12.0001 9.00008C10.3432 9.00008 9.00008 10.3432 9.00008 12.0001C9.00008 13.6569 10.3432 15.0001 12.0001 15.0001Z"></path></svg></button>
                </div>
            </div>
            <div className="">
                <div className="col-span-2 mt-5 items-center justify-center flex">
                    <div className="h-[300px] w-[600px] xs:w-[480px] cs:h-[250px] cs:w-[360px] rounded-2xl bg-center bg-cover bg-no-repeat" style={{backgroundImage: "url('/562949.jpg')"}}>
                        <div className="flex justify-between mx-8">
                            <h1 className="mt-4 text-2xl font-bold text-white">FASTPAY</h1>
                            <h1 className="mt-4 text-2xl font-bold text-white">*** 584</h1>
                        </div>
                        <div className="flex justify-between mx-8 mt-40 cs:mt-24">
                            <div>
                                <h1 className="mt-4 text-xl font-bold text-white">Montant</h1>
                                <div className="flex gap-3">
                                    <h1 className="text-3xl font-bold text-white cs:text-2xl">150000 F</h1>
                                    <svg className="mt-2 cs:w-[20px] cs:h-[20px] cs:mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="rgba(249,245,245,1)"><path d="M4.52047 5.93457L1.39366 2.80777L2.80788 1.39355L22.6069 21.1925L21.1927 22.6068L17.8827 19.2968C16.1814 20.3755 14.1638 21.0002 12.0003 21.0002C6.60812 21.0002 2.12215 17.1204 1.18164 12.0002C1.61832 9.62282 2.81932 7.5129 4.52047 5.93457ZM14.7577 16.1718L13.2937 14.7078C12.902 14.8952 12.4634 15.0002 12.0003 15.0002C10.3434 15.0002 9.00026 13.657 9.00026 12.0002C9.00026 11.537 9.10522 11.0984 9.29263 10.7067L7.82866 9.24277C7.30514 10.0332 7.00026 10.9811 7.00026 12.0002C7.00026 14.7616 9.23884 17.0002 12.0003 17.0002C13.0193 17.0002 13.9672 16.6953 14.7577 16.1718ZM7.97446 3.76015C9.22127 3.26959 10.5793 3.00016 12.0003 3.00016C17.3924 3.00016 21.8784 6.87992 22.8189 12.0002C22.5067 13.6998 21.8038 15.2628 20.8068 16.5925L16.947 12.7327C16.9821 12.4936 17.0003 12.249 17.0003 12.0002C17.0003 9.23873 14.7617 7.00016 12.0003 7.00016C11.7514 7.00016 11.5068 7.01833 11.2677 7.05343L7.97446 3.76015Z"></path></svg>
                                </div>
                            </div>
                            <Image width={70} height={70} src="/13139346-carte-a-puce-sim-doree-micropuce-pour-le-paiement-ou-la-carte-de-credit-vecteur-vectoriel-removebg-preview.png" alt="puce electronique" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <div className="col-span-2 items-center justify-center flex">
                    <div className="h-[570px] w-[600px] rounded-t-2xl bg-white">
                        <div className="mt-10 flex justify-around">
                            <div className="">
                                <div className="h-[60px] w-[60px] border-2 border-black rounded-full"></div>
                                <h1 className="mt-2 text-xl font-semibold">Scan</h1>
                            </div>
                            <div>
                                <div className="h-[60px] w-[60px] border-2 border-black rounded-full"></div>
                                <h1 className="mt-2 text-center text-xl font-semibold">Transfert</h1>
                            </div>
                            <div>
                                <div className="h-[60px] w-[60px] border-2 border-black rounded-full"></div>
                                <h1 className="mt-2 text-xl font-semibold">Coffre</h1>
                            </div>
                        </div>
                        <h1 className="mt-9 text-center text-2xl font-bold">Historique de Transaction</h1>
                        <div className="mx-auto mt-5 h-[100px] w-[500px] cs:w-[360px] xs:w-[450px] bg-slate-300 rounded-lg">
                            <div className="flex justify-between mx-8">
                                <div className="flex gap-2">
                                    <Avatar className="mt-2 hover:cursor-pointer">
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <h1 className="mt-4 text-2xl font-bold cs:text-sm text-white">John Doe</h1>
                                </div>
                                <h1 className="mt-4 text-2xl font-bold cs:text-sm text-white">5000 F</h1>
                            </div>
                        <div className="flex justify-between mx-8">
                            <div>
                                <h1 className="mt-4 text-xl cs:text-sm text-white">Jan 12, 2023 at 2:30 </h1>
                            </div>
                            <h1 className="mt-4 text-2xl font-bold cs:text-sm text-white">TRANSFERE</h1>
                        </div>
                        </div>

                        <div className="mx-auto mt-5 h-[100px] w-[500px] cs:w-[360px] xs:w-[450px] bg-slate-300 rounded-lg">
                            <div className="flex justify-between mx-8">
                                <div className="flex gap-2">
                                    <Avatar className="mt-2 hover:cursor-pointer">
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <h1 className="mt-4 text-2xl font-bold cs:text-sm text-white">John Doe</h1>
                                </div>
                                <h1 className="mt-4 text-2xl font-bold cs:text-sm text-white">5000 F</h1>
                            </div>
                        <div className="flex justify-between mx-8">
                            <div>
                                <h1 className="mt-4 text-xl cs:text-sm text-white">Jan 12, 2023 at 2:30 </h1>
                            </div>
                            <h1 className="mt-4 text-2xl font-bold cs:text-sm text-white">TRANSFERE</h1>
                        </div>
                        </div>

                        <div className="mx-auto mt-5 h-[100px] w-[500px] cs:w-[360px] xs:w-[450px] bg-slate-300 rounded-lg">
                            <div className="flex justify-between mx-8">
                                <div className="flex gap-2">
                                    <Avatar className="mt-2 hover:cursor-pointer">
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <h1 className="mt-4 text-2xl cs:text-sm font-bold text-white">John Doe</h1>
                                </div>
                                <h1 className="mt-4 text-2xl cs:text-sm font-bold text-white">5000 F</h1>
                            </div>
                        <div className="flex justify-between mx-8">
                            <div>
                                <h1 className="mt-4 text-xl cs:text-sm text-white">Jan 12, 2023 at 2:30 </h1>
                            </div>
                            <h1 className="mt-4 text-2xl font-bold cs:text-sm text-white">TRANSFERE</h1>
                        </div>

                        </div>
                    </div>
                </div>

            </div>


        </div>
    </main>
  );
}
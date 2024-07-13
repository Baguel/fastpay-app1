import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Welcome() {
  return (
    <main className="h-screen w-screen bg-green-600">
        <div className="mx-auto">
            <div className="items-center justify-center flex">
                <div className="mr-6"> 
                    <button className="mt-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="rgba(251,247,247,1)"><path d="M5.33409 4.54491C6.3494 3.63637 7.55145 2.9322 8.87555 2.49707C9.60856 3.4128 10.7358 3.99928 12 3.99928C13.2642 3.99928 14.3914 3.4128 15.1245 2.49707C16.4486 2.9322 17.6506 3.63637 18.6659 4.54491C18.2405 5.637 18.2966 6.90531 18.9282 7.99928C19.5602 9.09388 20.6314 9.77679 21.7906 9.95392C21.9279 10.6142 22 11.2983 22 11.9993C22 12.7002 21.9279 13.3844 21.7906 14.0446C20.6314 14.2218 19.5602 14.9047 18.9282 15.9993C18.2966 17.0932 18.2405 18.3616 18.6659 19.4536C17.6506 20.3622 16.4486 21.0664 15.1245 21.5015C14.3914 20.5858 13.2642 19.9993 12 19.9993C10.7358 19.9993 9.60856 20.5858 8.87555 21.5015C7.55145 21.0664 6.3494 20.3622 5.33409 19.4536C5.75952 18.3616 5.7034 17.0932 5.0718 15.9993C4.43983 14.9047 3.36862 14.2218 2.20935 14.0446C2.07212 13.3844 2 12.7002 2 11.9993C2 11.2983 2.07212 10.6142 2.20935 9.95392C3.36862 9.77679 4.43983 9.09388 5.0718 7.99928C5.7034 6.90531 5.75952 5.637 5.33409 4.54491ZM13.5 14.5974C14.9349 13.7689 15.4265 11.9342 14.5981 10.4993C13.7696 9.0644 11.9349 8.57277 10.5 9.4012C9.06512 10.2296 8.5735 12.0644 9.40192 13.4993C10.2304 14.9342 12.0651 15.4258 13.5 14.5974Z"></path></svg></button>
                </div>
            </div>
            <div className="">
                <div className="col-span-2 mt-3 items-center justify-center flex">
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
                            <div className="items-center justify-center">
                                <div className="h-[60px] w-[60px] border-2 border-black rounded-full"><svg className="w-[36px] h-[36px] mt-2 ml-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4 4h6v6H4V4Zm10 10h6v6h-6v-6Zm0-10h6v6h-6V4Zm-4 10h.01v.01H10V14Zm0 4h.01v.01H10V18Zm-3 2h.01v.01H7V20Zm0-4h.01v.01H7V16Zm-3 2h.01v.01H4V18Zm0-4h.01v.01H4V14Z"/><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M7 7h.01v.01H7V7Zm10 10h.01v.01H17V17Z"/></svg></div>
                                <h1 className="mt-2 text-xl font-semibold">Scan</h1>
                            </div>
                            <div>
                                <div className="h-[60px] w-[60px] border-2 border-black rounded-full"><svg className="mt-3 ml-2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/></svg></div>
                                <h1 className="mt-2 text-center text-xl font-semibold">Transfert</h1>
                            </div>
                            <div>
                                <div className="h-[60px] w-[60px] border-2 border-black rounded-full"><svg className="mt-2 ml-3" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-safe2-fill" viewBox="0 0 16 16"><path d="M6.563 8H5.035a3.5 3.5 0 0 1 .662-1.596l1.08 1.08q-.142.24-.214.516m.921-1.223-1.08-1.08A3.5 3.5 0 0 1 8 5.035v1.528q-.277.072-.516.214M9 6.563V5.035a3.5 3.5 0 0 1 1.596.662l-1.08 1.08A2 2 0 0 0 9 6.563m1.223.921 1.08-1.08c.343.458.577 1.003.662 1.596h-1.528a2 2 0 0 0-.214-.516M10.437 9h1.528a3.5 3.5 0 0 1-.662 1.596l-1.08-1.08q.142-.24.214-.516m-.921 1.223 1.08 1.08A3.5 3.5 0 0 1 9 11.965v-1.528q.277-.072.516-.214M8 10.437v1.528a3.5 3.5 0 0 1-1.596-.662l1.08-1.08q.24.142.516.214m-1.223-.921-1.08 1.08A3.5 3.5 0 0 1 5.035 9h1.528q.072.277.214.516M7.5 8.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0"/><path d="M2.5 1A1.5 1.5 0 0 0 1 2.5V3H.5a.5.5 0 0 0 0 1H1v4H.5a.5.5 0 0 0 0 1H1v4H.5a.5.5 0 0 0 0 1H1v.5A1.5 1.5 0 0 0 2.5 16h12a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 14.5 1zm6 3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9"/></svg></div>
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
                        
                        <div className="flex items-center justify-center mt-5">
                            <button className="bg-green-400 h-8 w-64 rounded-xl">Voir toutes les transactions</button>
                        </div>

                    </div>
                </div>

            </div>


        </div>
    </main>
  );
}
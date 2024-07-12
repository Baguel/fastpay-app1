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
                    <div className="h-[300px] w-[600px] rounded-2xl bg-center bg-cover bg-no-repeat" style={{backgroundImage: "url('/562949.jpg')"}}>
                        <div className="flex justify-between mx-8">
                            <h1 className="mt-4 text-2xl font-bold text-white">FASTPAY</h1>
                            <h1 className="mt-4 text-2xl font-bold text-white">*** 584</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <div className="col-span-2 items-center justify-center flex">
                    <div className="h-[550px] w-[600px] rounded-t-2xl bg-white">

                    </div>
                </div>
            </div>

        </div>
    </main>
  );
}
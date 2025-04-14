"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SrcImage from  "../../../public/img/login1.png"
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {

  const router = useRouter();

  const HandleLogin =() => {
    router.push("/home")
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <section className="flex w-full max-w-4xl bg-white rounded-xl shadow-md overflow-hidden">

        <div className="w-full md:w-1/2 p-8">
          <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-center">Нэвтрэх</h1>
            <div>
              <label className="block mb-1">Email</label>
              <Input type="email" placeholder="Email" />
            </div>
            <div>
              <label className="block mb-1">Нууц үг</label>
              <Input type="password" placeholder="Password" />
            </div>
            <div className="flex flex-col items-end space-y-2">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Нууц үгээ мартсан уу?
              </a>
              <Button className="w-full" onClick={HandleLogin}>Нэвтрэх</Button>
              <a href="register" className="text-sm text-blue-600 hover:underline">
                Бүртгүүлэх
              </a>
            </div>
          </div>
        </div>

        <div className="hidden md:block w-1/2">
          <Image
            src={SrcImage}
            alt="Login Illustration"
            className="h-full w-full object-cover"
            width={512}
            height={512}
          />
        </div>
      </section>
    </main>
  );
}

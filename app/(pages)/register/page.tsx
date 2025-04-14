"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SrcImage from "../../../public/img/image 2.png";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function RegisterPage() {
  const router = useRouter();

  const HandleLogin = () => {
    router.push("/home");
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <section className="flex w-full max-w-4xl bg-white rounded-xl shadow-md overflow-hidden">
        <div className="w-full md:w-1/2 p-8">
          <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-center">Бүртгүүлэх</h1>
            <div>
              <label className="block mb-1">Хэрэглэгчийн нэр</label>
              <Input type="email" placeholder="Email" />
            </div>
            <div>
              <label className="block mb-1">Байгууллагын регистер</label>
              <Input type="password" placeholder="Password" />
            </div>
            <div>
              <label className="block mb-1">Байршил дүүрэг хороо</label>
              <Input type="email" placeholder="Email" />
            </div>
            <div>
              <label className="block mb-1">Нууц үг</label>
              <Input type="password" placeholder="Password" />
            </div>
            <div className="flex flex-col items-end space-y-2">
              <Button className="w-full" onClick={HandleLogin}>
                Бүртгэл үүсгэх
              </Button>
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

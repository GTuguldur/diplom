"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SrcImage from "../../../public/img/login1.png";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { loginUser } from "@/app/api/user";
import { useState } from "react";
import { getSession } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setError(null);
    setLoading(true);
    try {
      const credentials = {
        identifier,
        password,
      };
      const response: any = await loginUser(credentials);

      if (response.success) {

        console.log("token from res", response.data.token)

        localStorage.setItem("store_token", response.data.token)

      router.replace('/home');
      } else {
        // const data = await response
        // setError(data.message || 'Login failed');
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <section className="flex w-full max-w-4xl bg-white rounded-xl shadow-md overflow-hidden">
        <div className="w-full md:w-1/2 p-8">
          <div className="space-y-6">
            <h1 className="text-2xl font-semibold text-center">Нэвтрэх</h1>

            <div>
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1">
                Нууц үг
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="flex flex-col items-end space-y-2">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Нууц үгээ мартсан уу?
              </a>
              <Button
                className="w-full"
                onClick={handleLogin}
                disabled={loading}
              >
                {loading ? 'Түр хүлээнэ үү...' : 'Нэвтрэх'}
              </Button>
              <a
                href="/register"
                className="text-sm text-blue-600 hover:underline"
              >
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

'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import StoreImg from "../../../public/img/product.png";

export default function StorePage() {
  const router = useRouter();
  const [quantities, setQuantities] = useState(Array(6).fill(10));

  const handleQuantityChange = (index: number, amount: number) => {
    setQuantities(prev => {
      const newQty = [...prev];
      newQty[index] = Math.max(0, newQty[index] + amount);
      return newQty;
    });
  };

  return (
    <main className="flex min-h-screen bg-gray-100 text-sm">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white flex flex-col items-center py-6 fixed h-screen z-10">
        <Image
          src="/img/icon.png"
          alt="Logo"
          width={80}
          height={80}
          className="mb-2"
        />
        <nav className="flex flex-col space-y-4 text-center w-full">
          <a href="#" className="hover:bg-blue-700 py-2">Аж ахуй нэгжүүд</a>
          <a href="#" className="hover:bg-blue-700 py-2">Миний захиалга</a>
          <a href="#" className="hover:bg-blue-700 py-2">Гомдол</a>
        </nav>
        <div className="mt-auto text-xs text-center p-4">Help and Support</div>
      </aside>

      {/* Main content */}
      <section className="ml-64 flex-1 p-6">
        {/* Top bar */}
        <div className="flex justify-between items-center mb-4">
          <button onClick={() => router.back()} className="text-lg">←</button>

          {/* Search bar */}
          <div className="relative w-80">
            <input
              type="text"
              placeholder="Хайх . . ."
              className="w-full rounded-full px-4 py-2 border pl-10"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-600">
              🔍
            </button>
          </div>

          {/* Profile icon */}
          <Image
            src="/img/profile logo.png"
            alt="Profile"
            width={36}
            height={36}
            className="rounded-full"
          />
        </div>

        {/* Title */}
        <h1 className="text-xl font-semibold text-center mb-4">Талх чихэр</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left column - description */}
          <div className="lg:w-1/4 bg-white p-4 rounded border shadow">
            <p className="font-semibold mb-1">Танилцуулга :</p>
            <p className="text-xs mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text...
            </p>
            <p>Байршил : ????????????????????</p>
            <p>Утас : ???????</p>
            <p className="flex items-center space-x-1">
              Үнэлгээ :
              {[...Array(5)].map((_, i) => (
                <span key={i}>☆</span>
              ))}
            </p>
            <textarea
              className="w-full mt-4 p-2 border rounded text-xs"
              placeholder="Урамшуулал"
              rows={4}
            />
          </div>

          {/* Right column - food items */}
          <div className="lg:w-3/4 grid grid-cols-3 gap-4">
            {Array(6).fill(0).map((_, i) => (
              <div key={i} className="bg-white rounded border shadow p-2 w-full">
                <Image
                  src={StoreImg}
                  alt={`food ${i}`}
                  width={120}
                  height={80}
                  className="mx-auto mb-1 rounded"
                />
                <p className="text-sm">Нэр: талх</p>
                <p className="text-sm">Үнэ: ????????</p>
                <div className="flex items-center justify-between mt-2">
                  <button
                    onClick={() => handleQuantityChange(i, -1)}
                    className="bg-blue-600 text-white px-2 rounded"
                  >-</button>
                  <input
                    type="number"
                    value={quantities[i]}
                    className="w-10 text-center border rounded text-sm"
                    readOnly
                  />
                  <button
                    onClick={() => handleQuantityChange(i, 1)}
                    className="bg-blue-600 text-white px-2 rounded"
                  >+</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom buttons */}
        <div className="bg-white border rounded mt-6 p-4 w-full text-center">
          <p className="mb-4">Захиалгын нийт дүн :</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-yellow-400 px-6 py-2 rounded hover:bg-yellow-500">
              Буцах
            </button>
            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
              Захиалах
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

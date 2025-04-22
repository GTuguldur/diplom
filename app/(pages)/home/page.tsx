"use client";

import Image from "next/image";
import { useState } from "react";
import LogoImage from "../../../public/img/icon.png";
import TalhImg from "../../../public/img/talh_chiher.png";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
    { name: "Таванбогд", phone: "????????" },
    { name: "талх чихэр", phone: "????????" },
    { name: "city foods", phone: "????????" },
    { name: "талх чихэр", phone: "????????" },
    { name: "талх чихэр", phone: "????????" },
    { name: "талх чихэр", phone: "????????" },
    { name: "талх чихэр", phone: "????????" },
    { name: "талх чихэр", phone: "????????" },
  ];

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="flex min-h-screen bg-white font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-[#3E68FF] text-white flex flex-col items-center py-6 fixed h-screen">
        <Image
          src={LogoImage}
          alt="Logo"
          width={200}
          height={200}
          className="mb-4"
        />
        <nav className="flex flex-col space-y-6 w-full px-6 text-left">
          <a href="#" className="hover:underline">
            Аж ахуй нэгжүүд
          </a>
          <a href="#" className="hover:underline">
            Миний захиалга
          </a>
          <a href="#" className="hover:underline">
            Гомдол
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <section className="ml-64 flex-1 p-6">
        {/* Search Bar */}
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-full max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Хайх . . ."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm pr-10"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#3E68FF] text-white p-2 rounded-full hover:bg-blue-700">
              🔍
            </button>
          </div>

          {/* Right Profile Icon */}
          <div className="ml-4">
            <Image
              src="/img/profile logo.png"
              alt="Profile"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-8">Аж ахуй нэгжүүд</h1>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredData.map((company, index) => (
            <div
              key={index}
              className="border-1 border-gray-800 rounded-xl shadow bg-white p-4 text-center"
            >
              <Image
                src={TalhImg}
                alt="Company Logo"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <p>Б нэр: {company.name}</p>
              <p>Утас : {company.phone}</p>
              <button className="mt-4 bg-[#3E68FF] text-white px-4 py-2 rounded hover:bg-blue-700">
                Захиалга хийх
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

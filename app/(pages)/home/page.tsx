"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import TalhImg from "../../../public/img/talh_chiher.png";
import { useOrgs } from "@/app/api/organization";  // assumes { orgs, loading, error }
import React from "react";

export default function HomePage() {
  const router = useRouter();
  const { orgs, loading, error } = useOrgs()

  const goToStore = (id: number) => {
    router.push(`/stores?id=${id}`);
  };

  if (loading) {
    return <p className="text-center py-8">Loading organizations…</p>;
  }
  if (error) {
    return <p className="text-center py-8 text-red-500">{error}</p>;
  }

  return (
    <div className="px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Аж ахуйн нэгжүүд</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {orgs!.data.items.map((org: any) => (
          <div
            key={org.ID}
            className="border rounded-xl shadow bg-white p-4 text-center"
          >
            <Image
              src={TalhImg}
              alt={`${org.name} Logo`}
              width={80}
              height={80}
              className="mx-auto mb-4"
            />

            <p className="font-semibold">{org.name}</p>
            <p className="text-sm text-gray-600">Утас: {org.phone}</p>
            <p className="text-sm text-gray-600">Email: {org.email}</p>
            <p className="text-sm text-gray-600">Хаяг: {org.address}</p>
            <p className="text-sm text-gray-600">Регистр: {org.register}</p>

            <button
              className="mt-4 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
              onClick={() => goToStore(org.ID)}
            >
              Захиалга хийх
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

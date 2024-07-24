"use client";

import { useStartStore } from "@/store/store";
import { Input } from "./ui/input";
import { usePseudoStore } from "@/store/store";
import Link from "next/link";

export const Launch = () => {
  const { start, toggleStart } = useStartStore();
  const { pseudo, setPseudo } = usePseudoStore();
  const handleChangeStart = () => {
    if (pseudo.length > 0) {
      toggleStart();
    } else {
      alert("Please enter a pseudo");
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center text-center flex-col">
      <Input
        value={pseudo}
        placeholder="pseudo"
        className="w-3/12 p-5 my-4 font-semibold text-xl"
        onChange={(e) => setPseudo(e.target.value)}
      />
      <div
        onClick={handleChangeStart}
        className="rounded-lg bg-pink-500 hover:bg-pink-900 text-7xl font-extrabold text-white p-4 text-center hover:cursor-pointer"
      >
        LAUNCH
      </div>
      <div className="text-2xl mt-4">
        <Link href="score" className="font-extrabold">
          score 🎯
        </Link>
      </div>
    </div>
  );
};

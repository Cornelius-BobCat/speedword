"use client";

import { useStartStore } from "@/store/store";
import { Input } from "./ui/input";
import { usePseudoStore } from "@/store/store";
import Link from "next/link";
import Image from "next/image";

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
    <>
      <div className="w-full h-screen absolute inset-0 bg-black  z-10">
        {/* Image de fond */}
        <Image
          src="/fond.jpeg" // Chemin vers votre image
          alt="Fond"
          layout="fill" // L'image remplit le conteneur parent
          objectFit="cover" // Couvre entièrement le conteneur
          objectPosition="center" // Centre l'image
          className="z-0" // Place l'image en arrière-plan
        />
        {/* Superposition noire */}
        <div className=""></div>
      </div>
      <div className="flex h-screen w-full items-center justify-center text-center flex-col z-40">
        <Input
          value={pseudo}
          placeholder="pseudo"
          className="w-3/12  my-4 font-semibold text-3xl bg-white p-10 rounded-none"
          onChange={(e) => setPseudo(e.target.value)}
        />
        <div
          onClick={handleChangeStart}
          className="rounded-lg bg-pink-500 hover:bg-pink-900 text-7xl font-extrabold text-white p-4 text-center hover:cursor-pointer"
        >
          LAUNCH
        </div>
        <div className="text-2xl mt-4 text-white bg-black rounded-lg py-5 px-10 hover:bg-black/50">
          <Link href="score" className="font-extrabold">
            score 🎯
          </Link>
        </div>
      </div>{" "}
    </>
  );
};

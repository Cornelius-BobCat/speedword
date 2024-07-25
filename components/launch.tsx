"use client";
import UseTypingSimulation from "@/lib/hook-typing";
import { useStartStore } from "@/store/store";
import { Input } from "./ui/input";
import { usePseudoStore } from "@/store/store";
import Link from "next/link";
import Image from "next/image";
import { useWinningWordsStore } from "@/store/store";
import { Button } from "./ui/button";
export const Launch = () => {
  const { winningWords, resetWinningWords } = useWinningWordsStore();
  // Récupère le statut du jeu et la fonction pour le modifier
  const { start, toggleStart } = useStartStore();
  // Récupère le pseudo et la fonction pour le modifier
  const { pseudo, setPseudo } = usePseudoStore();
  const handleChangeStart = () => {
    // Vérifie si le pseudo est renseigné
    if (pseudo.length > 0) {
      // Lance le jeu
      toggleStart();
    } else {
      // Affiche une alerte si le pseudo n'est pas renseigné
      alert("Please enter a pseudo");
    }
  };
  const handleReset = () => {
    // reset la liste des mots gagnants
    resetWinningWords();
  };
  const words = [
    "pseudo",
    "franck",
    "camille",
    "pierre",
    "pseudo",
    "emilie",
    "jacques",
    "sophie",
  ];
  const more = UseTypingSimulation(words, 100);
  return (
    <>
      <div className="w-full h-screen absolute inset-0 bg-black  z-10">
        <Image
          src="/fond.jpeg"
          alt="Fond"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
      </div>
      <div className="flex h-screen w-full items-center justify-center text-center flex-col z-40">
        {winningWords.length > 0 && (
          <div className="flex justify-center items-center">
            <div className="text-4xl text-white bg-black/50 p-5 rounded-lg">
              <div>🎉 Congratulation 🎉</div>
              <div>You have {winningWords.length} winning words</div>
            </div>
            <Button onClick={handleReset} className="ml-5">
              ❌
            </Button>
          </div>
        )}
        <Input
          value={pseudo}
          placeholder={more}
          className="w-3/12  my-4  text-3xl bg-white p-10 rounded-full text-center  text-pink-600 font-extrabold"
          onChange={(e) => setPseudo(e.target.value)}
        />
        <div
          onClick={handleChangeStart}
          className="rounded-lg bg-pink-500 hover:bg-pink-900 text-7xl font-extrabold text-white p-4 text-center hover:cursor-pointer"
        >
          {"🎲 "}
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

// Decompte.tsx
"use client";

import { Save } from "@/app/actions/save.action";
import { useNumberStore } from "@/store/store";
import { useStartStore } from "@/store/store";
import { useWinningWordsStore } from "@/store/store";
import { usePseudoStore } from "@/store/store";
import Image from "next/image";
import { use, useEffect } from "react";

export const Decompte = () => {
  const { value, decrement, setValue } = useNumberStore();
  const { start, toggleStart } = useStartStore();
  const { winningWords, resetWinningWords } = useWinningWordsStore();
  const { pseudo } = usePseudoStore();

  useEffect(() => {
    // remove les mots gagnants lors du premier rendu
    resetWinningWords();
    setValue(60.0);
  }, []);

  useEffect(() => {
    if (value <= 0) {
      // Sauvegarde le pseudo et le nombre de mots gagnants
      Save(pseudo, winningWords.length);
      // Remet la valeur à 60
      setValue(60.0);
      // inverse le sens de la partie
      toggleStart();
    }
  }, [value, toggleStart, setValue, resetWinningWords]);

  useEffect(() => {
    // Crée un interval pour décrémenter la valeur toutes les secondes
    let interval: NodeJS.Timeout | null = null;

    if (start) {
      // Crée un interval pour décrémenter la valeur toutes les secondes
      interval = setInterval(() => {
        if (value > 0) {
          decrement();
        }
      }, 100);
    } else {
      // Nettoie l'interval lorsque le décompte est arrêté
      if (interval) {
        clearInterval(interval);
      }
    }

    // Nettoie l'interval lorsque le composant est démonté ou lorsque `start` change
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [start, value, decrement]);

  return (
    <div
      className={` flex w-full text-[130px] font-extrabold animate-pulse ${
        start
          ? value > 20
            ? "text-black"
            : value > 10
            ? "text-orange-500"
            : "text-red-700"
          : ""
      }`}
    >
      {value <= 5 && (
        <Image
          src="/bob.gif"
          alt="moquerie"
          width={200}
          height={80}
          className="rounded-full"
        />
      )}
      {value <= 15 && value >= 5 && (
        <Image
          src="/homer.gif"
          alt="moquerie"
          width={200}
          height={80}
          className="rounded-full"
        />
      )}
      <span>
        {start ? (value > 0 ? value.toFixed(1) : "0.0") : "Speed Words"}
      </span>
    </div>
  );
};

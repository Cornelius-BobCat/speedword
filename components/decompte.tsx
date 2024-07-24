// Decompte.tsx
"use client";

import { Save } from "@/app/actions/save.action";
import { useNumberStore } from "@/store/store";
import { useStartStore } from "@/store/store";
import { useWinningWordsStore } from "@/store/store";
import { usePseudoStore } from "@/store/store";
import { useEffect } from "react";

export const Decompte = () => {
  const { value, decrement, setValue } = useNumberStore();
  const { start, toggleStart } = useStartStore();
  const { winningWords, resetWinningWords } = useWinningWordsStore();
  const { pseudo } = usePseudoStore();
  useEffect(() => {
    if (value <= 0) {
      toggleStart();
      resetWinningWords();
      setValue(60.0);
      Save(pseudo, winningWords.length);
    }
  }, [value, toggleStart, setValue, resetWinningWords]);

  useEffect(() => {
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
    <div className="text-[130px] font-extrabold animate-pulse">
      {start ? (value > 0 ? value.toFixed(1) : "0.0") : "Speed Words"}
    </div>
  );
};

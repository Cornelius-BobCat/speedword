// Decompte.tsx
"use client";

import { useNumberStore } from "@/store/store";
import { useStartStore } from "@/store/store";
import { use, useEffect } from "react";

export const Decompte = () => {
  const { value, decrement, setValue } = useNumberStore();
  const { start, toggleStart } = useStartStore();
  useEffect(() => {
    if (value <= 0) {
      toggleStart();
      setValue(20.0);
    }
  }, [value, toggleStart, setValue]);

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

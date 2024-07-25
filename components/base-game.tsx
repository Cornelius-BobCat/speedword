import { Createletter } from "@/app/actions/shuffle-letter.action";
import React, { useEffect } from "react";
import { Decompte } from "./decompte";
import { TapWord } from "./tap-word";
import { useLettersStore } from "@/store/store";
import { useStartStore } from "@/store/store";
import { WinningWords } from "./winningWords";

export const BaseGame = () => {
  const { lettersBase, setLettersBase } = useLettersStore();
  const { start } = useStartStore();
  useEffect(() => {
    // On crée les lettres de base
    if (start) {
      setLettersBase(Createletter());
    }
  }, [start, setLettersBase]);

  return (
    <div className="flex flex-row w-full h-screen justify-center items-center">
      <div className="w-1/2">
        <div className="w-9/12 justify-center mx-auto">
          <div className="grid grid-cols-4 text-7xl items-center">
            {lettersBase.map((letter, index) => (
              <div
                key={index}
                className="mx-2 my-2 py-10 bg-amber-100/50 rounded-xl text-center"
              >
                <span className="text-amber-600 font-extrabold">{letter}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-1/2 py-5 flex flex-col h-screen justify-between items-start">
        <div className="h-1/2">
          <div>
            <Decompte />
          </div>
          <div>
            <TapWord />
          </div>
        </div>
        <div className="h-1/2 overflow-y-auto w-full">
          <WinningWords />
        </div>
      </div>
    </div>
  );
};

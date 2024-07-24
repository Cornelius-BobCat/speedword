import { Createletter } from "@/app/actions/shuffle-letter.action";
import React, { useEffect, useState } from "react";
import { Decompte } from "./decompte";
import { TapWord } from "./tap-word";
import { useLettersStore } from "@/store/store";
import { useStartStore } from "@/store/store";
import { set } from "zod";
import { WinningWords } from "./winningWords";

export const BaseGame = () => {
  const { lettersBase, setLettersBase } = useLettersStore();
  const { start } = useStartStore();
  useEffect(() => {
    if (start) {
      setLettersBase(Createletter());
    }
  }, [start, setLettersBase]);

  console.log("lettersBase", lettersBase);

  return (
    <div className="flex flex-row w-full h-screen justify-center items-center">
      <div className="w-1/2">
        <div className="grid grid-cols-4 text-7xl items-center h-screen">
          {lettersBase.map((letter, index) => (
            <div key={index} className="mx-2">
              {letter}
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-between items-start">
        <div>
          <div>
            <Decompte />
          </div>
          <div>
            <TapWord />
          </div>
        </div>
        <div>
          <WinningWords />
        </div>
      </div>
    </div>
  );
};

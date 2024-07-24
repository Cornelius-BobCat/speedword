import { createletter } from "@/app/actions/shuffle-letter.action";
import React, { useEffect, useState } from "react";
import { Decompte } from "./decompte";
import { TapWord } from "./tap-word";

export const BaseGame = () => {
  const [lettersBase, setLettersBase] = useState<string[]>([]);

  // on commence le jeu , le bouton "start" est cliqué
  useEffect(() => {
    // creation du jeu de letter
    setLettersBase(createletter());
  }, []);

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
      <div className="w-1/2 flex flex-col">
        <div>
          <Decompte />
        </div>
        <div>
          <TapWord />
        </div>
        <div>Mot tapé valide</div>
      </div>
    </div>
  );
};

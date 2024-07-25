"use client";
import Link from "next/link";
import { GetScore } from "../actions/getscore.action";
import { useEffect, useState } from "react";

/**
 * Renders the Page component.
 * Retrieves the score data and displays it in a formatted list.
 * @returns The rendered Page component.
 */

export default function Page() {
  const [scores, setScores] = useState<
    { id: string; pseudo: string; score: number }[]
  >([]);

  useEffect(() => {
    async function fetchData() {
      const res = await GetScore();
      setScores(res);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="w-3/12 mx-auto text-2xl items-center text-center space-y-3 z-30">
        <div className="my-10">
          <div className="my-10">
            <Link
              href="/"
              className="text-2xl  text-white bg-black rounded-lg p-5 hover:bg-black/50"
            >
              🎯 GO BACK
            </Link>
          </div>
          <div className="text-xs italic relative">
            clique sur LAUNCH pour commencer une nouvelle partie
            <br />
            - tu as 60 secondes pour trouver un maximum de mots
            <br />
            - tu peux taper les mots en majuscule ou minuscule
            <br />
            - les mots doivent être en français
            <br />
            - les mots doivent être dans le dictionnaire
            <br />
            - les mots doivent être différents
            <br />- les mots doivent être composés {"d'au"} moins 2 lettres
            <br />- si tu trouve un mot tu rajoute 1 secondes au compteur
          </div>
        </div>
        {scores.map((score, index) => (
          <div
            key={index}
            className="flex justify-between bg-black/50 text-white p-2"
          >
            {index > 3 && <div></div>}
            <div className="font-bold">
              {index == 1 && <div>🏆</div>}
              {index == 2 && <div>🥈</div>}
              {index == 3 && <div>🥉</div>}

              {score.pseudo}
            </div>

            <div>{score.score} pts</div>
          </div>
        ))}
      </div>
    </>
  );
}

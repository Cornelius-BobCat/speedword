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
        <div className="py-10">
          <Link
            href="/"
            className="text-2xl  text-white bg-black rounded-lg py-5 px-10 hover:bg-black/50"
          >
            🎯 GO BACK
          </Link>
        </div>
        {scores.map((score, index) => (
          <div
            key={index}
            className="flex justify-between bg-black/50 text-white p-2"
          >
            <div className="font-bold">{score.pseudo}</div>

            <div>{score.score} pts</div>
          </div>
        ))}
      </div>
    </>
  );
}

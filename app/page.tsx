"use client";

import { BaseGame } from "@/components/base-game";
import { Launch } from "@/components/launch";
import { useStartStore } from "@/store/store";
import { useEffect, useState } from "react";
import { GetScore } from "./actions/getscore.action";
export default function Home() {
  const { start, toggleStart } = useStartStore();
  const [scoreRes, setScoreRes] = useState<any[]>([]);
  useEffect(() => {
    const get = async () => {
      const res = await GetScore();
      setScoreRes(res);
    };
    get();
  }, []);

  return (
    <main className="flex flex-col w-full px-4">
      {!start ? <Launch /> : <BaseGame />}
      <div className="absolute top-4 left-4">
        {scoreRes.map((score, index) => (
          <div key={index}>
            {score.pseudo} - {score.score}
          </div>
        ))}
      </div>
    </main>
  );
}

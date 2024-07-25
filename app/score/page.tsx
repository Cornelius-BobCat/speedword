// pages/scores.tsx

import Link from "next/link";
import { GetScore } from "../actions/getscore.action";
import { GetServerSideProps } from "next";

type Score = {
  pseudo: string;
  score: number;
};

type Props = {
  scores: Score[];
};

export default function ScoresPage({ scores }: Props) {
  return (
    <div className="w-3/12 mx-auto text-2xl items-center text-center space-y-3 ">
      <div className="py-10">
        <Link
          href="/"
          className="text-2xl text-white bg-black rounded-lg py-5 px-10 hover:bg-black/50"
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
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const scores = await GetScore();

  return {
    props: {
      scores,
    },
  };
};

import Link from "next/link";
import { GetServerSideProps } from "next";
import { GetScore } from "../actions/getscore.action";

/**
 * Renders the Page component.
 * Retrieves the score data and displays it in a formatted list.
 * @returns The rendered Page component.
 */
export default function Page({ scores }: { scores: any[] }) {
  return (
    <div className="w-3/12 mx-auto text-2xl items-center text-center space-y-3">
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const scores = await GetScore();

  context.res.setHeader(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate"
  );
  context.res.setHeader("Pragma", "no-cache");
  context.res.setHeader("Expires", "0");
  context.res.setHeader("Surrogate-Control", "no-store");

  return {
    props: {
      scores,
    },
  };
};

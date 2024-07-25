import Link from "next/link";
import { GetScore } from "../actions/getscore.action";
import Image from "next/image";
/**
 * Renders the Page component.
 * Retrieves the score data and displays it in a formatted list.
 * @returns The rendered Page component.
 */
export const revalidate = 1;

export default async function Page() {
  const res = await GetScore();
  console.log("Scores:", res);

  return (
    <>
      <div className="w-full h-screen absolute inset-0 bg-black  z-10">
        <Image
          src="/fond.jpeg"
          alt="Fond"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
      </div>
      <div className="w-3/12 mx-auto text-2xl items-center text-center space-y-3 ">
        <div className="py-10">
          <Link
            href="/"
            className="text-2xl  text-white bg-black rounded-lg py-5 px-10 hover:bg-black/50"
          >
            🎯 GO BACK
          </Link>
        </div>
        {res.map((score, index) => (
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

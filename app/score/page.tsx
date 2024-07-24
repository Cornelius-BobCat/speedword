import Link from "next/link";
import { GetScore } from "../actions/getscore.action";

export default async function Page() {
  const res = await GetScore();

  return (
    <div className="w-9/12 mx-auto justify-center items-center text-center ">
      🎯
      {res.map((score, index) => (
        <div key={index} className="text-2xl font-bold">
          {score.pseudo} - {score.score} pts
        </div>
      ))}
      <Link href="/">⏪ Back</Link>
    </div>
  );
}

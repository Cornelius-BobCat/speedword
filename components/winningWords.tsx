import { useWinningWordsStore } from "@/store/store";
import { CircleCheck } from "lucide-react";
export const WinningWords = () => {
  const { winningWords } = useWinningWordsStore();
  return (
    <div className="flex flex-col">
      {winningWords.map((word, index) => (
        <h3
          className="scroll-m-20 text-2xl font-semibold tracking-tight space-x-2 items-center flex"
          key={index}
        >
          <CircleCheck className="text-green-500 " />{" "}
          <span>{word.toUpperCase()}</span>
        </h3>
      ))}
    </div>
  );
};

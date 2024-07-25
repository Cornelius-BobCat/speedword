import { useWinningWordsStore } from "@/store/store";
import { CircleCheck } from "lucide-react";

export const WinningWords = () => {
  const { winningWords } = useWinningWordsStore();

  return (
    <div className="columns-2 md:columns-3 gap-4">
      {winningWords.map((word, index) => (
        <div
          className="mb-2 flex items-center space-x-2 break-inside-avoid"
          key={index}
        >
          <CircleCheck className="text-green-500" />
          <span className="text-2xl font-semibold tracking-tight">
            {word.toUpperCase()}
          </span>
        </div>
      ))}
    </div>
  );
};

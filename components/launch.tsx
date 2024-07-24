"use client";

import { useStartStore } from "@/store/store";

export const Launch = () => {
  const { start, toggleStart } = useStartStore();
  return (
    <div className="flex h-screen w-full items-center justify-center text-center">
      <div
        onClick={toggleStart}
        className="rounded-lg bg-pink-500 hover:bg-pink-900 text-7xl font-extrabold text-white p-4 text-center hover:cursor-pointer"
      >
        LAUNCH
      </div>
    </div>
  );
};

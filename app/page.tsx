"use client";

import { BaseGame } from "@/components/base-game";
import { Launch } from "@/components/launch";
import { useStartStore } from "@/store/store";
export default function Home() {
  const { start, toggleStart } = useStartStore();
  return (
    <main className="flex  w-full px-4">
      {!start ? <Launch /> : <BaseGame />}
    </main>
  );
}

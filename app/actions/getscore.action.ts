"use server";

import { db } from "@/lib/db";

export const GetScore = async () => {
  try {
    const topScores = await db.player.findMany({
      orderBy: {
        score: "desc", // Trier par score en ordre décroissant
      },
    });
    console.log("Top scores:", topScores);
    return topScores;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des meilleurs scores:",
      error
    );
    return [];
  }
};

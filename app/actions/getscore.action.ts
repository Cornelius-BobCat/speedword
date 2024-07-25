"use server";

import { db } from "@/lib/db";

/**
 * Retrieves the top scores from the database.
 * @returns {Promise<Array<Object>>} An array of objects representing the top scores.
 */
export async function GetScore() {
  try {
    const topScores = await db.player.findMany({
      orderBy: {
        score: "desc",
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
}

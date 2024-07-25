"use server";
import { db } from "@/lib/db";
export const Save = async (pseudo: string, score: number) => {
  try {
    // Rechercher le joueur par son pseudo
    const player = await db.player.findUnique({
      where: { pseudo },
    });

    if (player) {
      // Comparer le score actuel avec le nouveau score
      console.log("nouveau score >", score, "ancien score >", player.score);
      if (score > player.score) {
        // Mettre à jour le score si le nouveau est plus élevé
        await db.player.update({
          where: { pseudo },
          data: { score },
        });
        console.log(`Score updated for player ${pseudo}`);
      } else {
        console.log(`No update needed for player ${pseudo}`);
      }
    } else {
      // Si le joueur n'existe pas, vous pouvez choisir de le créer
      await db.player.create({
        data: { pseudo, score },
      });
      console.log(`New player created: ${pseudo}`);
    }
  } catch (error) {
    console.error("Error saving score:", error);
  }
};

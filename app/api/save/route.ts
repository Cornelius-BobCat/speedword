import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const pseudo = url.searchParams.get("pseudo") as string;
  const score = Number(url.searchParams.get("score"));
  try {
    // Rechercher le joueur par son pseudo
    const player = await db.player.findUnique({
      where: { pseudo },
    });

    if (player) {
      // Comparer le score actuel avec le nouveau score
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
}

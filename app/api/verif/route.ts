import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

let wordCache: Set<string> | null = null;
const cacheFilePath = path.join(process.cwd(), "public", "ods6.txt");

async function loadWordCache() {
  if (!wordCache) {
    try {
      const data = await fs.readFile(cacheFilePath, "utf-8");
      wordCache = new Set(
        data.split("\n").map((line) => line.trim().toUpperCase())
      );
    } catch (error) {
      console.error("Error reading file for cache:", error);
      throw new Error("Failed to read file for cache");
    }
  }
}

export async function GET(req: NextRequest) {
  // Extraire l'URL de la requête
  const url = new URL(req.url);

  // Récupérer le paramètre 'word' depuis l'URL de la requête
  const word = (url.searchParams.get("word") || "").toUpperCase().trim();

  if (!word) {
    return NextResponse.json(
      { error: "Invalid word parameter" },
      { status: 400 }
    );
  }

  try {
    // Charger le cache si nécessaire
    await loadWordCache();

    // Vérifier si le mot est dans le cache
    const isWordValid = wordCache?.has(word) || false;
    console.log(`Word: ${word}, IsValid: ${isWordValid}`);

    return NextResponse.json({ content: isWordValid });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}

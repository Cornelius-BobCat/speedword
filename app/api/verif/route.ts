// app/api/verif/route.ts
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  // Extraire l'URL de la requête
  const url = new URL(req.url);

  // Récupérer le paramètre 'word' depuis l'URL de la requête
  const word = (url.searchParams.get("word") as string).toUpperCase();
  console.log(word);
  try {
    // Chemin du fichier
    const filePath = path.join(process.cwd(), "public", "ods6.txt");

    // Lire le fichier
    const data = fs.readFileSync(filePath, "utf-8");

    // Diviser les lignes
    const lines = data.split("\n").map((line) => line.trim().toUpperCase());

    // Vérifier si le mot est dans les lignes
    const isWordValid = lines.includes(word);
    console.log(isWordValid);
    return NextResponse.json({ content: isWordValid });
  } catch (error) {
    console.error("Error reading file:", error);
    return NextResponse.json({ error: "Failed to read file" }, { status: 500 });
  }
}

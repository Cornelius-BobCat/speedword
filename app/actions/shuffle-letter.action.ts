"use server";

export const Createletter = () => {
  const lettersBase = [
    "YNELUG",
    "NAVDEZ",
    "GTNVIE",
    "QBMJOA",
    "CADPMN",
    "IRSNHE",
    "ALTBIR",
    "WULIRE",
    "TLESUP",
    "LASREC",
    "SMOIAR",
    "IAFXRO",
    "HEFSIE",
    "IEAATO",
    "TDSNOD",
    "TEUNKO",
  ];

  // Sélectionner une lettre aléatoire pour chaque groupe de lettres
  const selectedLetters = lettersBase.map((group) => {
    const randomIndex = Math.floor(Math.random() * group.length);
    return group[randomIndex];
  });

  // Combiner les lettres sélectionnées en une seule chaîne
  return selectedLetters;
};

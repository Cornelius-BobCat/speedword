export const CompareLetter = (
  base: string[],
  value: string,
  winningWords: string[]
): boolean => {
  console.log("winningWords", winningWords);
  console.log("value", value);
  // Convertir le tableau base en une seule chaîne
  const baseString = base.join("").toUpperCase(); // Convertir en majuscules
  // Convertir en majuscules
  // Compter les occurrences des lettres dans base
  const baseCount = baseString.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Convertir value en majuscules
  const valueUpper = value.toUpperCase();

  // Vérifier si value est déjà présent dans winningWords
  if (winningWords.includes(valueUpper)) {
    return false; // Le mot est déjà présent, retournez false
  }
  // Compter les occurrences des lettres dans value
  const valueCount = valueUpper.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  // Vérifier si chaque lettre de value respecte les quantités disponibles dans base
  for (const char of Object.keys(valueCount)) {
    if (!baseCount[char] || baseCount[char] < valueCount[char]) {
      return false;
    }
  }
  return true;
};

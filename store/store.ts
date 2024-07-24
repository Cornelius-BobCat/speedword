import { create } from "zustand";

type StartStore = {
  start: boolean;
  toggleStart: () => void;
};

export const useStartStore = create<StartStore>((set) => ({
  start: false, // État initial
  toggleStart: () => set((state) => ({ start: !state.start })), // Inverse l'état
}));

type NumberStore = {
  value: number; // État initialisé avec un nombre
  setValue: (newValue: number) => void; // Fonction pour définir une valeur
  increment: () => void; // Fonction pour incrémenter la valeur
  decrement: () => void; // Fonction pour décrémenter la valeur
};

export const useNumberStore = create<NumberStore>((set) => ({
  value: 30.0, // État initial, par exemple 0
  setValue: (newValue: number) => set({ value: newValue }), // Met à jour la valeur
  increment: () => set((state) => ({ value: state.value + 0.1 })), // Incrémente la valeur de 1
  decrement: () => set((state) => ({ value: state.value - 0.1 })), // Décrémente la valeur de 1
}));

type LettersStore = {
  lettersBase: string[];
  setLettersBase: (newLettersBase: string[]) => void;
};

export const useLettersStore = create<LettersStore>((set) => ({
  lettersBase: [], // État initial
  setLettersBase: (newLettersBase) => set({ lettersBase: newLettersBase }), // Met à jour le tableau
}));

// Définir le type du store
type WinningWordsStore = {
  winningWords: string[]; // Liste des mots gagnants
  addWinningWord: (word: string) => void; // Fonction pour ajouter un mot gagnant
  resetWinningWords: () => void; // Fonction pour réinitialiser la liste des mots gagnants
};

// Créer le store Zustand
export const useWinningWordsStore = create<WinningWordsStore>((set) => ({
  winningWords: [], // État initial, liste vide
  addWinningWord: (word) =>
    set((state) => ({
      winningWords: [...state.winningWords, word], // Ajoute un mot à la liste
    })),
  resetWinningWords: () => set({ winningWords: [] }), // Réinitialise la liste des mots gagnants
}));

type PseudoStore = {
  pseudo: string; // État initial avec une chaîne de caractères
  setPseudo: (newPseudo: string) => void; // Fonction pour mettre à jour la chaîne
};

export const usePseudoStore = create<PseudoStore>((set) => ({
  pseudo: "", // Chaîne initiale, vide par défaut
  setPseudo: (newPseudo: string) => set({ pseudo: newPseudo }), // Met à jour la chaîne de caractères
}));

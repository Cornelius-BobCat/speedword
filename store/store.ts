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
  value: 20.0, // État initial, par exemple 0
  setValue: (newValue: number) => set({ value: newValue }), // Met à jour la valeur
  increment: () => set((state) => ({ value: state.value + 0.1 })), // Incrémente la valeur de 1
  decrement: () => set((state) => ({ value: state.value - 0.1 })), // Décrémente la valeur de 1
}));

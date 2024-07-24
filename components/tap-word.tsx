"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useLettersStore } from "@/store/store";
import { useWinningWordsStore } from "@/store/store";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CompareLetter } from "@/app/actions/compare-letter.action";
import Image from "next/image";

export function TapWord() {
  const { lettersBase } = useLettersStore();
  const { winningWords, addWinningWord } = useWinningWordsStore();
  // Schéma Zod pour la validation
  const formSchema = z.object({
    word: z
      .string()
      .min(1, {
        message: "Word must be at least 1 characters long.",
      })
      .refine(
        async (word) => {
          // Appeler l'API pour vérifier si le mot est valide
          const response = await fetch(
            `/api/verif?word=${encodeURIComponent(word)}`
          );
          const data = await response.json();

          if (data.content) {
            return true; // Retourne `true` si le mot est valide, sinon `false`
          }
          return false;
        },
        {
          message: "The word is not valid.",
        }
      ),
  });
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      word: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    const r = CompareLetter(lettersBase, values.word, winningWords);
    console.log("compare", r);
    if (r) {
      // ajoute le mot au local storage
      addWinningWord(values.word);
    }
    form.reset();
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex flex-row"
      >
        <FormField
          control={form.control}
          name="word"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tap Word</FormLabel>
              <FormControl>
                <Input
                  placeholder="something ..."
                  {...field}
                  className=" border-b-8 border-gray-400 rounded-none shadow-none  text-4xl font-semibold text-center h-28 uppercase"
                />
              </FormControl>
              <FormDescription>Press Enter pour envoyer</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Image
          src="/keyenter.png"
          width={100}
          height={100}
          alt={"key enter"}
          className="animate-bounce"
        />
      </form>
    </Form>
  );
}

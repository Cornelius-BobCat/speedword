"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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

export function TapWord() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
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
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                  className="border-none border-b-2 border-gray-400 text-7xl text-center h-28"
                />
              </FormControl>
              <FormDescription>Press Enter pour envoyer</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

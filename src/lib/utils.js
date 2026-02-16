import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases de Tailwind de forma condicional y resuelve conflictos.
 * @param {...string} inputs - Clases de CSS o lógicas condicionales.
 * @returns {string} - Cadena de clases optimizada.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
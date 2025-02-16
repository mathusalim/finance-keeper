// import type { ButtonColor, ButtonVariant } from './Button.svelte';
import clsx from 'clsx';
import { tv, type VariantProps } from 'tailwind-variants';
import { ThemeVariants } from '../themeVariants';

export const InputVariants = ThemeVariants(
  clsx(
    'bg-surface-700 border-surface-500 rounded-base ring-0 transition-all shadow-none p-1 w-full placeholder-surface-300',
    'focus-within:border-primary-500/100',
    'focus:brightness-105 focus:filter focus:outline-transparent focus:outline-2 focus:outline-offset-2 focus:ring-2 focus:ring-red focus:ring-shadow-primary-500/100',
    'focus-visible:ring-outline-800 focus-visible:ring-2 focus-visible:outline-none'
  )
);

export type InputVariant = VariantProps<typeof InputVariants>['variant'];
export type InputColor = VariantProps<typeof InputVariants>['color'];

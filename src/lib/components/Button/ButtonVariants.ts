// import type { ButtonColor, ButtonVariant } from './Button.svelte';
import clsx from 'clsx';
import { tv, type VariantProps } from 'tailwind-variants';
import { ThemeVariants } from '../themeVariants';

export const ButtonVariants = ThemeVariants(
  clsx(
    'rounded-base px-5 py-2 whitespace-nowrap text-center inline-flex items-center justify-center transition-transform hover:brightness-125 hover:filter font-bold'
  )
);

export type ButtonVariant = VariantProps<typeof ButtonVariants>['variant'];
export type ButtonColor = VariantProps<typeof ButtonVariants>['color'];

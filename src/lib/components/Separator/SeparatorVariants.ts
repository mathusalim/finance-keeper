// import type { ButtonColor, ButtonVariant } from './Button.svelte';
import clsx from 'clsx';
import { tv, type VariantProps } from 'tailwind-variants';
import { ThemeVariants } from '../themeVariants';

export const SeparatorVariants = ThemeVariants(clsx('shrink-0'));

export type SeparatorVariant = VariantProps<
  typeof SeparatorVariants
>['variant'];
export type SeparatorColor = VariantProps<typeof SeparatorVariants>['color'];

// import type { ButtonColor, ButtonVariant } from './Button.svelte';
import clsx from 'clsx';
import { tv, type VariantProps } from 'tailwind-variants';
import { ThemeVariants } from '../themeVariants';

const baseVariants = ThemeVariants(
  clsx('rounded-container bg-surface-800 p-4 shadow-lg select-none flex flex-col')
);

export const CardVariants = tv({
  extend: baseVariants,
  variants: {
    hover: { true: 'hover:scale-105 ' },
  },
});

export type CardVariant = VariantProps<typeof CardVariants>['variant'];
export type CardColor = VariantProps<typeof CardVariants>['color'];
export type CardHover = VariantProps<typeof CardVariants>['hover'];

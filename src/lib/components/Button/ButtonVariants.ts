// import type { ButtonColor, ButtonVariant } from './Button.svelte';
import clsx from 'clsx';
import { tv, type VariantProps } from 'tailwind-variants';
import { ThemeVariants } from '../themeVariants';

export const baseVariants = ThemeVariants(
  clsx(
    'rounded-base px-5 py-2 whitespace-nowrap text-center inline-flex items-center justify-center transition-transform hover:brightness-125 hover:filter font-bold'
  )
);

export const ButtonVariants = tv({
  extend: baseVariants,
  variants: {
    disabled: { true: 'opacity-55 cursor-default' },
  },
});

export type ButtonVariant = VariantProps<typeof ButtonVariants>['variant'];
export type CardColor = VariantProps<typeof ButtonVariants>['disabled'];
export type ButtonColor = VariantProps<typeof ButtonVariants>['color'];

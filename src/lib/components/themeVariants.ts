// import type { ButtonColor, ButtonVariant } from './Button.svelte';
import { tv } from 'tailwind-variants';

export const ThemeVariants = (base: string) =>
  tv({
    base,
    variants: {
      variant: {
        gradient: '',
        transparent: '!bg-transparent',
        filled: '',
        ghost: '',
        soft: '',
        ring: '',
      },
      color: {
        primary: '',
        surface: '',
        secondary: '',
        tertiary: '',
        success: '',
        warning: '',
        error: '',
      },
    },
    compoundVariants: [
      //#region Filled Button classes
      {
        color: 'primary',
        variant: 'filled',
        class: 'bg-opacity-100 bg-primary-500',
      },
      {
        color: 'secondary',
        variant: 'filled',
        class: 'bg-opacity-100 bg-secondary-500',
      },
      {
        color: 'tertiary',
        variant: 'filled',
        class: 'bg-opacity-100 bg-tertiary-500',
      },
      {
        color: 'surface',
        variant: 'filled',
        class: 'bg-opacity-100 bg-surface-500',
      },
      {
        color: 'success',
        variant: 'filled',
        class: 'bg-opacity-100 bg-success-500',
      },
      {
        color: 'warning',
        variant: 'filled',
        class: 'bg-opacity-100 bg-warning-500',
      },
      {
        color: 'error',
        variant: 'filled',
        class: 'bg-opacity-100 bg-error-500',
      },
      //#endregion
      //#
      //#region Ghost Button classes
      {
        color: 'primary',
        variant: 'ghost',
        class: 'ring-1 ring-primary-500 bg-primary-500/20',
      },
      {
        color: 'secondary',
        variant: 'ghost',
        class: 'ring-1 ring-secondary-500 bg-secondary-500/20',
      },
      {
        color: 'tertiary',
        variant: 'ghost',
        class: 'ring-1 ring-tertiary-500 bg-tertiary-500/20',
      },
      {
        color: 'surface',
        variant: 'ghost',
        class: 'ring-1 ring-surface-500 bg-surface-500/20',
      },
      {
        color: 'success',
        variant: 'ghost',
        class: 'ring-1 ring-success-500 bg-success-500/20',
      },
      {
        color: 'warning',
        variant: 'ghost',
        class: 'ring-1 ring-warning-500 bg-warning-500/20',
      },
      {
        color: 'error',
        variant: 'ghost',
        class: 'ring-1 ring-error-500 bg-error-500/20',
      },
      //#endregion
      //#
      //#region Soft Button classes
      {
        color: 'primary',
        variant: 'soft',
        class: 'bg-primary-500/20 text-primary-200',
      },
      {
        color: 'secondary',
        variant: 'soft',
        class: 'bg-secondary-500/20 text-secondary-200',
      },
      {
        color: 'tertiary',
        variant: 'soft',
        class: 'bg-tertiary-500/20 text-tertiary-200',
      },
      {
        color: 'surface',
        variant: 'soft',
        class: 'bg-surface-500/20 text-surface-200',
      },
      {
        color: 'success',
        variant: 'soft',
        class: 'bg-success-500/20 text-success-200',
      },
      {
        color: 'warning',
        variant: 'soft',
        class: 'bg-warning-500/20 text-warning-200',
      },
      {
        color: 'error',
        variant: 'soft',
        class: 'bg-error-500/20 text-error-200',
      },
      //#endregion
      //#
      //#region Ring Button classes
      {
        color: 'primary',
        variant: 'ring',
        class: 'ring-1 ring-primary-500 bg-transparent',
      },
      {
        color: 'secondary',
        variant: 'ring',
        class: 'ring-1 ring-secondary-500 bg-transparent',
      },
      {
        color: 'tertiary',
        variant: 'ring',
        class: 'ring-1 ring-tertiary-500 bg-transparent',
      },
      {
        color: 'surface',
        variant: 'ring',
        class: 'ring-1 ring-surface-500 bg-transparent',
      },
      {
        color: 'success',
        variant: 'ring',
        class: 'ring-1 ring-success-500 bg-transparent',
      },
      {
        color: 'warning',
        variant: 'ring',
        class: 'ring-1 ring-warning-500 bg-transparent',
      },
      {
        color: 'error',
        variant: 'ring',
        class: 'ring-1 ring-error-500 bg-transparent',
      },
      //#endregion
      //#
      //#region Gradient Button classes
      {
        color: 'primary',
        variant: 'gradient',
        class: 'bg-gradient-to-br from-primary-500 to bg-tertiary-500',
      },
      {
        color: 'secondary',
        variant: 'gradient',
        class: 'bg-gradient-to-br from-secondary-500 to bg-tertiary-500',
      },
      {
        color: 'tertiary',
        variant: 'gradient',
        class: 'bg-gradient-to-br from-primary-500 to bg-tertiary-500',
      },
      {
        color: 'surface',
        variant: 'gradient',
        class: 'bg-gradient-to-br from-surface-500 to bg-tertiary-500',
      },
      {
        color: 'success',
        variant: 'gradient',
        class: 'bg-gradient-to-br from-success-500 to bg-tertiary-500',
      },
      {
        color: 'warning',
        variant: 'gradient',
        class: 'bg-gradient-to-br from-warning-500 to bg-tertiary-500',
      },
      {
        color: 'error',
        variant: 'gradient',
        class: 'bg-gradient-to-br from-error-500 to bg-tertiary-500',
      },
      //#endregion
      //#
    ],

    defaultVariants: {
      variant: 'filled',
      color: 'primary',
    },
  });

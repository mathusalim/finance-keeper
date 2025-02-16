<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import {
    ButtonVariants,
    type ButtonColor,
    type ButtonVariant,
  } from './ButtonVariants';
  import { Button } from 'bits-ui';
  import clsx from 'clsx';

  const {
    children,
    disabled = false,
    variant = 'filled',
    color = 'primary',
    ...rest
  }: HTMLButtonAttributes & {
    variant?: ButtonVariant;
    color?: ButtonColor;
  } = $props();

  const newClasses: string = ButtonVariants({
    variant,
    color,
    disabled: disabled || false,
  });
</script>

<Button.Root {...rest} class={clsx(newClasses, rest.class)}>
  {@render children?.()}
</Button.Root>

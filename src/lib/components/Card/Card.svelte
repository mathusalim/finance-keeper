<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import {
    CardVariants,
    type CardColor,
    type CardHover,
    type CardVariant,
  } from './CardVariants';
  import type { Snippet } from 'svelte';
  import clsx from 'clsx';
  import Separator from '../Separator/Separator.svelte';

  const {
    children,
    variant = 'filled',
    hover = false,
    color = 'primary',
    cardBody,
    cardFooter,
    cardHeader,
    ...rest
  }: HTMLAttributes<HTMLDivElement> & {
    variant?: CardVariant;
    color?: CardColor;
    hover?: CardHover;
    cardHeader?: Snippet;
    cardBody?: Snippet;
    cardFooter?: Snippet;
  } = $props();

  const newClasses: string = CardVariants({ variant, color, hover });
</script>

<div {...rest} class={clsx(newClasses, rest.class?.toString())}>
  {#if cardBody || cardFooter || cardHeader}
    {@render cardHeader?.()}
    <div class="flex-1">
      {@render cardBody?.()}
    </div>
    {@render cardFooter?.()}
  {:else}
    <div class="flex-1">
      {@render children?.()}
    </div>
  {/if}
</div>

<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  import { InputVariants } from './InputVariants';
  import clsx from 'clsx';

  let {
    value = $bindable(),
    ...rest
  }: HTMLInputAttributes & { error?: string } = $props();
  const newClasses: string = InputVariants({
    variant: 'gradient',
    color: 'secondary',
  });
</script>

<input {...rest} bind:value class={clsx(newClasses, rest.class)} />

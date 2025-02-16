<script lang="ts">
  import { Separator } from 'bits-ui';
  import clsx from 'clsx';
  import type { HTMLAttributes } from 'svelte/elements';
  import { SeparatorVariants, type SeparatorColor } from './SeparatorVariants';
  const {
    orientation = 'horizontal',
    color = 'primary',
    ...rest
  }: HTMLAttributes<HTMLDivElement> & {
    orientation?: 'horizontal' | 'vertical';
    color?: SeparatorColor;
  } = $props();

  const newClasses =
    orientation === 'horizontal' ? 'h-[2px] w-full my-1' : 'min-h-full w-[2px]';
</script>

<Separator.Root
  {orientation}
  {...rest}
  class={clsx(
    SeparatorVariants({ variant: 'gradient', color }),
    newClasses,
    rest.class,
  )}
></Separator.Root>

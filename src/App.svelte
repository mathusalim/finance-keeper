<script lang="ts">
  import Button from '$lib/components/Button/Button.svelte';
  import Card from '$lib/components/Card/Card.svelte';
  const colors = [
    'secondary',
    'tertiary',
    'success',
    'warning',
    'error',
    'primary',
    'surface',
  ];
  const variants = [
    'transparent',
    'filled',
    'ghost',
    'soft',
    'ring',
    'gradient',
  ];
</script>

{#each variants as variant}
  <div class="flex gap-4 p-4">
    {#if variant === 'transparent'}
      <Card variant={variant as any}>{variant}</Card>
    {:else}
      {#each colors as color, i}
        <Card
          variant={variant as any}
          color={color as any}
          hover={true}
          class="h-40 w-20"
        ></Card>
      {/each}
    {/if}
  </div>
{/each}

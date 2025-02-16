<script lang="ts">
  import Button from '$lib/components/Button/Button.svelte';
  import Card from '$lib/components/Card/Card.svelte';
  import Separator from '$lib/components/Separator/Separator.svelte';
  import { useAuth } from '../supabase/auth/auth.svelte';
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

  const { logout } = useAuth();
</script>

<!-- MENU  -->
<div
  class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]"
>
  <div class="bg-tertiary-500 hidde md:flex md:flex-col">
    <div class="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
      <a href="/" class="flex items-center gap-2 font-semibold">
        <span class="">Name here</span>
      </a>
      <Button variant="soft" color="warning" class="ml-auto">
        <span class="">N</span>
      </Button>
    </div>
    <Separator color="warning" />
    <div class="flex-1">
      <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
        <a
          href="##"
          class="text-black hover:text-primary-200 flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
        >
          Link 1
        </a>
        <a
          href="##"
          class="text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
        >
          Link 2
        </a>
        <a
          href="##"
          class="text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
        >
          Link 3
        </a>
        <a
          href="##"
          class="text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all"
        >
          Link 4
        </a>
      </nav>
    </div>
    <div class=" p-4">
      <Card variant="filled" color="primary">
        {#snippet cardHeader()}
          <h3>Upgrade to Pro</h3>
          <span
            >Unlock all features and get unlimited access to our support team.</span
          >
        {/snippet}
        {#snippet cardBody()}
          <Separator color="primary" />
          <Button color="success" variant="filled" class="mt-2">Upgrade</Button>
        {/snippet}
      </Card>
    </div>
  </div>
  <!-- CONTENT -->
  <div class="flex flex-col h-screen">
    <!-- HEADER -->
    <header class="bg-tertiary-500/45">
      <div
        class="flex h-14 items-center justify-between px-4 lg:h-[60px] lg:px-6"
      >
        <input type="text" placeholder="seach" />
        <Button onclick={logout}>Logout</Button>
      </div>
      <Separator class="mb-0" color="warning" />
    </header>
    <!-- MAIN CONTENT -->
    <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 overflow-auto">
      <div class="flex items-center">
        <h1 class="text-lg font-semibold md:text-2xl">Inventory</h1>
      </div>
      <div
        class="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
      >
        <!-- <div class="flex flex-col items-center gap-1 text-center">
          <h3 class="text-2xl font-bold tracking-tight">
            You have no products
          </h3>
          <p class="text-muted-foreground text-sm">
            You can start selling as soon as you add a product.
          </p>
          <Button class="mt-4">Add Product</Button>
        </div> -->
        <div class="flex flex-col gap-4 p-4">
          {#each variants as variant}
            <div class="flex gap-4 flex-wrap p-4">
              {#if variant === 'transparent'}
                <Button variant={variant as any}>{variant}</Button>
              {:else}
                {#each colors as color, i}
                  <Button variant={variant as any} color={color as any}>
                    {color + ' ' + variant}
                  </Button>
                {/each}
              {/if}
            </div>
          {/each}
        </div>
      </div>
    </main>
  </div>
</div>

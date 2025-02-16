<script lang="ts">
  import Button from '$lib/components/Button/Button.svelte';
  import Card from '$lib/components/Card/Card.svelte';
  import Separator from '$lib/components/Separator/Separator.svelte';
  import Confirm from './Confirm.svelte';
  import Login from './Login.svelte';
  import Message from './Message.svelte';
  import Register from './Register.svelte';
  import { useAuthState } from './Auth.svelte';
  import { useAuthEvents } from '../../supabase/auth/authEvents.svelte';
  const { pageState, setPageName } = useAuthState();
  const { recovery } = useAuthEvents();
  const recoveryState = $derived(recovery());
  const pageName = $derived(pageState());
</script>

<div class="flex items-center justify-center min-h-screen">
  <Card class="mx-auto max-w-sm p-12" variant="gradient" color="tertiary">
    {#snippet cardHeader()}
      {#if pageName === 'Login' || pageName === 'Register'}
        <p class="text-2xl text-center">{pageName}</p>
        <Separator color="secondary" class="my-4" />
      {/if}
    {/snippet}

    {#snippet cardBody()}
      {#if recoveryState}
        <Confirm />
      {:else if pageName === 'Login'}
        <Login />
      {:else if pageName === 'Register'}
        <Register />
      {:else if pageName === 'message'}
        <Message />
      {:else if recoveryState}{:else}
        <Confirm />
      {/if}
    {/snippet}
    {#snippet cardFooter()}
      {#if pageName === 'Login' || pageName === 'Register'}
        <Separator color="secondary" class="my-4" />
        <div class=" text-center text-sm">
          {pageName === 'Login'
            ? "Don't have an account?"
            : 'Already have an account?'}
          <Button
            variant="transparent"
            class="underline"
            onclick={() =>
              setPageName(pageName === 'Login' ? 'Register' : 'Login')}
          >
            {pageName === 'Login' ? 'Register' : 'Login'}
          </Button>
        </div>
      {/if}
    {/snippet}
  </Card>
</div>

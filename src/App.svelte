<script lang="ts">
  import Layout from './pages/Layout.svelte';
  import AuthLayout from './pages/Auth/AuthLayout.svelte';
  import { useApplicationState } from './state/applicationState.svelte';
  const { state } = useApplicationState();
  const sessionData = $derived(state);
</script>

{#if sessionData.ready}
  {#if !sessionData.isPasswordReset && sessionData.user}
    <Layout />
  {:else}
    <AuthLayout />
  {/if}
{:else}
  <p>not ready</p>
{/if}

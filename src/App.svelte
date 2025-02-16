<script lang="ts">
  import Layout from './pages/Layout.svelte';
  import Button from '$lib/components/Button/Button.svelte';
  import AuthLayout from './pages/Auth/AuthLayout.svelte';
  import { useAuthEvents } from './supabase/auth/authEvents.svelte';
  const { session } = useAuthEvents();
  const sessionData = $derived(session());
</script>

{#if sessionData}
  {console.log(sessionData)}
  <Layout />
{:else}
  <AuthLayout />
{/if}

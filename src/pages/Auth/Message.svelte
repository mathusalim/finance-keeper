<script lang="ts">
  import Button from '$lib/components/Button/Button.svelte';
  import Input from '$lib/components/Input/Input.svelte';
  import { useApplicationState } from '../../state/applicationState.svelte';
  const { setAuthPageName } = useApplicationState();
</script>

<div class="grid gap-4">
  <div class="grid gap-2">
    <div class="flex items-center">
      <label for="email">Type Email</label>
    </div>
    <p>Email has been sent, fallow instructions</p>
  </div>
  <Button
    variant="transparent"
    color="success"
    class="w-full"
    onclick={() => setAuthPageName('Login')}>Back to Login</Button
  >
</div>

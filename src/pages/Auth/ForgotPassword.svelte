<script lang="ts">
  import Button from '$lib/components/Button/Button.svelte';
  import Input from '$lib/components/Input/Input.svelte';
  import { useApplicationState } from '../../state/applicationState.svelte';
  import { useAuth } from '../../supabase/auth/auth.svelte';

  const emailValidation = (val: string) => {
    if (!val) {
      validationState.email = true;
      return 'Email is required';
    }
    if (!val.includes('@')) {
      validationState.email = true;
      return 'Email is invalid';
    }

    validationState.email = false;
    return '';
  };

  let validationState = $state({
    email: false,
  });
  let email = $state('');
  let error = $state('');

  const { requestPasswordReset } = useAuth();
  const { setAuthPageName } = useApplicationState();

  const tryRequestPasswordReset = async (email: string) => {
    const result = await requestPasswordReset(email);
    if (result.error) {
      error = result.error.message;
    } else {
      error = '';
      setAuthPageName('message');
    }
  };
</script>

<div class="grid gap-4">
  <div class="grid gap-2">
    <div class="flex items-center">
      <label for="email">Type Email</label>
    </div>
    <Input
      id="email"
      type="email"
      bind:value={email}
      onblur={() => emailValidation(email)}
    />
  </div>
  {#if error}<p class="text-error-500">{error}</p>{/if}
  <Button
    variant="soft"
    color="success"
    class="w-full"
    disabled={validationState.email}
    onclick={() => tryRequestPasswordReset(email)}>Update</Button
  >
</div>

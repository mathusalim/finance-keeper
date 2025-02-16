<script lang="ts">
  import Button from '$lib/components/Button/Button.svelte';
  import Input from '$lib/components/Input/Input.svelte';
  import { useApplicationState } from '../../state/applicationState.svelte';
  import { useAuth } from '../../supabase/auth/auth.svelte';

  const passwordValidation = (val: string) => {
    if (!val) {
      validationState.password = true;
      return 'Password is required';
    }
    if (val.length < 6) {
      validationState.password = true;
      return 'Password must be at least 6 characters long';
    }
    validationState.password = false;
    return '';
  };

  let validationState = $state({
    password: false,
  });
  let password = $state('');
  let error = $state('');

  const { updatePassword } = useAuth();
  const { setIsPasswordReset } = useApplicationState();

  const tryUpdate = async (password: string) => {
    const result = await updatePassword(password);
    if (result.error) {
      error = result.error.message;
    } else {
      setIsPasswordReset(false);
    }
  };
</script>

<div class="grid gap-4">
  <div class="grid gap-2">
    <div class="flex items-center">
      <label for="password">New Password</label>
    </div>
    <Input
      id="password"
      type="password"
      bind:value={password}
      onblur={() => passwordValidation(password)}
    />
  </div>
  {#if error}<p class="text-error-500">{error}</p>{/if}
  <Button
    variant="transparent"
    color="success"
    class="w-full"
    onclick={() => setIsPasswordReset(false)}>Back to Home</Button
  >
  <Button
    variant="soft"
    color="success"
    class="w-full"
    disabled={validationState.password}
    onclick={() => tryUpdate(password)}>Update Password</Button
  >
</div>

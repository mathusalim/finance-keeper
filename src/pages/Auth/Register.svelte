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
    email: false,
    password: false,
  });
  let email = $state('');
  let password = $state('');
  let error = $state('');

  const { signUp } = useAuth();
  const { setAuthPageName } = useApplicationState();

  const trySignUp = async (email: string, password: string) => {
    const result = await signUp(email, password);
    if (result.error) {
      error = result.error.message;
    } else {
      if ((result.data.user?.identities?.length || 0) > 0) {
        setAuthPageName('message');
      }
      console.log(result);
    }
  };
</script>

<div class="grid gap-4">
  <div class="grid gap-2">
    <label for="email">Email</label>
    <Input
      id="email"
      type="email"
      placeholder="m@example.com"
      required
      bind:value={email}
      onblur={() => emailValidation(email)}
    />
  </div>

  <div class="grid gap-2">
    <div class="flex items-center">
      <label for="password">Password</label>
    </div>
    <Input
      id="password"
      type="password"
      required
      bind:value={password}
      onblur={() => passwordValidation(password)}
    />
  </div>
  {#if error}<p class="text-error-500">{error}</p>{/if}
  <Button
    variant="soft"
    color="success"
    class="w-full"
    disabled={validationState.email || validationState.password}
    onclick={() => trySignUp(email, password)}>Create an account</Button
  >
  <!-- <Button variant="outline" class="w-full">Login with Google</Button> -->
</div>

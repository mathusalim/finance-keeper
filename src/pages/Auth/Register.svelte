<script lang="ts">
  import Button from '$lib/components/Button/Button.svelte';
  import Input from '$lib/components/Input/Input.svelte';
</script>

<div class="grid gap-4">
  <div class="grid gap-2">
    <label for="email">Email</label>
    <Input id="email" type="email" placeholder="m@example.com" required />
  </div>
  <div class="grid gap-2">
    <label for="userName">Username (otpional)</label>
    <Input id="userName" type="text" />
  </div>
  <div class="grid gap-2">
    <div class="flex items-center">
      <label for="password">Password</label>
    </div>
    <Input id="password" type="password" required />
  </div>
  <Button variant="soft" color="success" class="w-full"
    >Create an account</Button
  >
  <!-- <Button variant="outline" class="w-full">Login with Google</Button> -->
</div>

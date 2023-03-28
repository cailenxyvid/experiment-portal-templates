<script lang="ts">
  import { activeUser } from "$lib/stores/user"

  const login = () => {
    $activeUser.email = email
    $activeUser.name = name
  }

  const logout = () => {
    $activeUser.email = email = ''
    $activeUser.name = name = ''
  }

  let email:string
  let name:string
</script>

<style>
    button[type=submit] {
        background-color: var(--theme-primary);      
        border-color: var(--theme-accent);
    }
</style>

{#if $activeUser.email}
<h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Welcome, {$activeUser.email}!</h2>
<button on:click={logout} class="bg-[color:var(--theme-accent)] text-white flex w-full justify-center rounded-md py-2 px-3">Logout</button>

{:else}
<div>    
    <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Register for this event</h2>
  </div>
  <form class="mt-8 space-y-6" action="#" method="POST">
    <input type="hidden" name="remember" value="true">
    <div class="-space-y-px rounded-md shadow-sm">
      <div>
        <label for="email-address" class="sr-only">Email address</label>
        <input bind:value={email} id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Email address">
      </div>
      <div>
        <label for="name" class="sr-only">Name</label>
        <input bind:value={name} id="name" name="name" type="text" required class="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Name">
      </div>
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
        <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
      </div>
    </div>

    <div>        
        <button type="submit" 
        class="group relative flex w-full justify-center rounded-md py-2 px-3 text-black border mb-2"
        on:click|preventDefault={login}>        
        Register          
      </button>   
      
      <button class="bg-[color:var(--theme-accent)] text-white flex w-full justify-center rounded-md py-2 px-3">Test Connection</button>
    </div>
  </form>
  {/if}
<script lang="ts">
  import RegistrationForm from "$lib/components/RegistrationForm.svelte"
  import CountdownClock from "$lib/components/CountdownClock/CountdownClock.svelte"

  import { activeEvent } from "$lib/stores/event"
  import { activeTheme } from "$lib/stores/theme"

  export let event: any    
</script>

<div class="w-full max-w-md space-y-8">     
  <h1 class="text-4xl text-center mt-4">{event.title}</h1>
  
  <RegistrationForm />
  
  {#if $activeTheme.showCountDown}
  <CountdownClock event_date={$activeEvent.start} />
  {/if}  
</div>
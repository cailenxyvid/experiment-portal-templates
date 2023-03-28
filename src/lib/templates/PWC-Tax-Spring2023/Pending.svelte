<script lang="ts">
  import RegistrationForm from "$lib/components/RegistrationForm.svelte"
  import CountdownClock from "$lib/components/CountdownClock/CountdownClock.svelte"

  import { activeEvent } from "$lib/stores/event"
  import { activeTheme } from "$lib/stores/theme"

  export let event: any    
</script>

<div class="w-2/4 space-y-8">         
  <div class="flex container flex-row space-x-4">
    <div class="left space-y-2">
      <h1 class="text-4xl text-center">{event.title}</h1>
      {#if $activeTheme.showCountDown}
      <CountdownClock event_date={$activeEvent.start} />
      {/if}  
    </div>
    <div class="right">
      <RegistrationForm />
    </div>
  </div>    
</div>